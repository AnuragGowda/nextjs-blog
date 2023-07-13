import { useState, useEffect } from "react";
import Share from "../../components/share";
import ReadOther from "../../components/readother";
import blogData from "../../data/blogData.json"
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet-async";
import ReactMarkdown from 'react-markdown';
import axios from 'axios'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from "rehype-raw";
import 'katex/dist/katex.min.css'
import Blogbox from "../../components/blogbox";

function getFourRandom(arr, idx){
  const elements = arr.filter((_, i) => i !== idx);
  const sampleSize = Math.min(elements.length, 3);
  const shuffledArray = elements.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, sampleSize);
}

const Blockquote = ({ children }) => {
  // Custom rendering logic for blockquote

  const re = /\[!(.*)\][\+|-]? (.*)/

  const [,type,title] = children[1].props.children[0].match(re)

  return (
    <Blogbox type={type} title={title} content={children.slice(2)} /> 
  )
};

const components = {
  blockquote: Blockquote
};

export default function BlogPage() {

  const router = useRouter()
  const [data, setData] = useState(null) 
  
  useEffect(() => {
    setData(blogData.blogs[router.query.id-1])
  }, [])

  const otherBlogs = getFourRandom(blogData.blogs, router.query.id-1)

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
  
  if (!data){
    return <>{blogData.blogs[router.query.id-1].title}</>
  }

  // Render the gist description if it exists 
  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name='title' content={data.title}/>
        <meta name='description' content={data.description}/>
      </Helmet>
      <div className="flex h-[fit-content] justify-center">
        <div className="hidden lg:block mt-52 mr-5">
          <Share title={data.title} location={data.location} />
        </div>
        <div className="flex flex-col divide-y max-w-screen-md flex-grow mt-5">
          <div className="mr-5 ml-5">
            <div className="text-6xl font-bold">
              {data.title}
            </div>
            <div className="flex flex-wrap mt-3 mb-3">
              {data.tags.map(
                tag =>
                <div className="bg-blue-400 text-white text-sm font-bold py-1 px-2 rounded m-1 dark:bg-purple-700 dark:text-purple-200">
                  {tag}
                </div>
              )}
            </div>
          </div>
          <div className="p-3">
            <div className="text-md flex">
              By&nbsp;
              <div className="text-gray-500 font-medium">
                Anurag Gowda
              </div>
              &nbsp;on&nbsp;
              <div className="text-blue-400 font-medium dark:text-purple-500">
                July 2023
              </div>
            </div>
          </div>
          <div className="blog">
            <ReactMarkdown 
              className="ml-4 mr-4 md:ml-14"
              children={markdownContent}
              components={components}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
            /> 
          </div>
        </div>
        <div className="hidden lg:block mt-52 ml-5">
          <div className="mt-11 sticky top-10">
            <ReadOther data={otherBlogs}/>
          </div>
        </div>
      </div>
    </>
  );
}

