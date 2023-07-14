import Share from "../../components/share";
import NextPost from "../../components/nextpost";
import blogData from "../../data/blogData.json"
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet-async";
import Toc from "../../components/toc";
import BlogPost from "../../components/blogpost";

export default function BlogPage() {

  const router = useRouter()
  const data = blogData.blogs[router.query.id-1]
  
  if (!data){
    return <>loading</>
  }

  // Render the gist description if it exists 
  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name='title' content={data.title}/>
        <meta name='description' content={data.description}/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.18.2/tocbot.css"></link>
      </Helmet>
      <div className="flex flex-col  mt-5">
        <div className="flex h-[fit-content] justify-center pl-14">

          <div className="flex flex-col mt-10 w-[fit-content]">
            <div className="text-6xl font-bold text-left ml-3 md:ml-0">
              {data.title}
            </div>
            <div className="flex flex-wrap my-3 ml-3 md:ml-0">
              {data.tags.map(
                tag =>
                <div key={tag} className="bg-blue-400 text-white text-sm font-bold py-1 px-2 rounded m-1 dark:bg-purple-700 dark:text-purple-200">
                  {tag}
                </div>
              )}
            </div>
            <div className="text-md flex border-y py-3 w-full justify-between">
              <div className="flex ml-3 md:ml-0">
                By&nbsp;
                <div className="text-gray-500 font-medium">
                  Anurag Gowda
                </div>
                &nbsp;on&nbsp;
                <div className="text-blue-400 font-medium dark:text-purple-500">
                  July 2023
                </div>
              </div>
              <div className="mr-2 md:mr-0">
                <Share />
              </div>
            </div>
            <div className="flex justify-center">
              <BlogPost />
            </div>
          </div>

          <div className="hidden lg:block mt-56 ml-5">
            <div className="sticky top-10">
              <Toc />
            </div>
          </div>

        </div>
        
        <div className="flex justify-center gap-5 mt-10">
          <NextPost />
          <NextPost />
        </div>
      </div>
    </>
  );
}

