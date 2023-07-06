import { useState, useEffect } from "react";
import Share from "../../components/share";
import ReadOther from "../../components/readother";
import blogData from "../../data/blogData.json"
import { Octokit } from '@octokit/rest';
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { Helmet } from "react-helmet-async";

const octokit = new Octokit({
    auth: process.env.API
});

async function getGist(gistId) {
  try {
    const response = await octokit.rest.gists.get({ gist_id: gistId });
    return response.data;
  } catch (error) {
    console.error('Error occurred while fetching the gist:', error);
    throw error;
  }
}

function getFourRandom(arr, idx){
  const elements = arr.filter((_, i) => i !== idx);
  const sampleSize = Math.min(elements.length, 3);
  const shuffledArray = elements.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, sampleSize);
}

export default function BlogPage() {

  const router = useRouter()
  const data = blogData.blogs[router.query.id-1]
  const otherBlogs = getFourRandom(blogData.blogs, router.query.id-1)

  const [gist, setGist] = useState(null);
  const { theme } = useTheme()

  useEffect(() => {
    async function fetchData() {
      try {
        const gistData = await getGist(data.gistID);
        setGist(gistData);
      } catch (error) {
        // Handle error
        console.log(error)
      }
    }

    fetchData();
  }, []);


  if (!gist) {
    // Loading state
    return <div>Loading...</div>;
  }

  // Render the gist description if it exists
  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name='title' content={data.title}/>
        <meta name='description' content={data.description}/>
      </Helmet>
      <div className="flex h-screen justify-center">
        <div className="hidden lg:block mt-52 mr-5">
          <Share title={data.title} location={data.location} />
        </div>
        <div className="flex flex-col divide-y max-w-screen-md h-max flex-grow">
          <div className="mr-5 ml-5">
            <div className="text-4xl font-bold">
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
          <iframe srcDoc={
              gist.files['post.html'].content.slice(0, 220)+(theme=="dark"?"<style>blockquote {color: hsla(0,0%,100%,.4);border-left-color: hsla(0,0%,100%,.1);}body{color: hsla(0,0%,100%,.75);background-color: #1e1e1e; }</style>":"")+gist.files['post.html'].content.slice(220)
            } 
            className="w-full h-screen mt-2"
          >
          </iframe>
        </div>
        <div className="hidden lg:block mt-52 ml-5">
          <ReadOther data={otherBlogs}/>
        </div>
      </div>
    </>
  );
}

