import { useState, useEffect, createElement } from "react";

import { Octokit } from "@octokit/rest";

import Blogbox from "./blogbox";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from "rehype-raw";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light'
import 'katex/dist/katex.min.css'

export default function BlogPost({path}){
    const { theme } = useTheme()

    const Blockquote = ({ children }) => {

        // Custom rendering logic for blockquote
        const re = /\[!(.*)\][\+|-]? (.*)/
        const [,type,title] = children[1].props.children[0].match(re)

        return (
            <Blogbox type={type} title={title} content={children.slice(2)} /> 
        )
    }

    const HeadingComponent = ({ level, children }) => {

        const headingText = children[0]

        return createElement(`h${level}`, { id: headingText }, children)
    }
  
    const components = {
        blockquote: Blockquote,
        h1: HeadingComponent,
        h2: HeadingComponent,
        h3: HeadingComponent,
        h4: HeadingComponent,
        h5: HeadingComponent,
        h6: HeadingComponent,
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
            <SyntaxHighlighter
                {...props}
                className="code-block"
                children={String(children).replace(/\n$/, '')}
                style={theme=="light"?oneLight:oneDark}
                language={match[1]}
                PreTag="div"
                showLineNumbers
            />
            ) : (
            <code {...props} className={className}>
                {children}
            </code>
            )
        }
    }

    const [markdownContent, setMarkdownContent] = useState('');

    console.log(process.env.NEXT_PUBLIC_API)

    useEffect(() => {
        const octokit = new Octokit({
            auth: process.env.API,
        });
        
        octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'AnuragGowda',
            repo: 'Obsidian',
            path: path,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
                }
        })
        .then((response) => {
            const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
            setMarkdownContent(content);
        })
        .catch((error) => {
            console.error('Error fetching file:', error);
        })
      }, []);

    return (
        <div className="blog max-w-3xl mx-3">
            <ReactMarkdown
                children={markdownContent}
                components={components}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
            /> 
        </div>
    )
}