import { useState, useEffect, createElement } from "react";

import axios from 'axios'

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

export default function BlogPost(){
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

    useEffect(() => {
      const fetchMarkdown = async () => {
        try {
          const response = await axios.get('https://raw.githubusercontent.com/AnuragGowda/Test/main/update.md');
          setMarkdownContent(response.data);
        } catch (error) {
          console.error('Error fetching Markdown file:', error);
        }
      };
  
      fetchMarkdown();
    }, []);

    return (
        <div className="blog">
            <ReactMarkdown 
                className="ml-4 mr-4 md:ml-0 max-w-screen-md flex-grow"
                children={markdownContent}
                components={components}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
            /> 
        </div>
    )
}