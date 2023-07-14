import Share from "../../components/share";
import NextPost from "../../components/nextpost";
import blogData from "../../data/blogData.json"
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet-async";
import Toc from "../../components/toc";
import BlogPost from "../../components/blogpost";
import { faClock, faFolder } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      </Helmet>
        <div className="flex h-[fit-content] justify-center pl-14 mt-2 bg-[#f9fafb] dark:bg-[#1e1e1e]">

          <div className="flex flex-col mt-16 w-[fit-content] border p-14 rounded-lg bg-white dark:bg-[#2e2e2e] dark:border-[#2e2e2e]">
            <div className="flex text-gray-400 font-medium">
              Home <FontAwesomeIcon icon={faChevronRight} size="sm" className="px-2 pt-1.5"/> Blog <FontAwesomeIcon icon={faChevronRight} size="sm" className="px-2 pt-1.5"/> Machine Learning
            </div>
            <img className="max-w-4xl rounded-2xl my-3" src="https://webtech-note.com/_next/image?url=%2Fimages%2Fposts%2Ftocbot-contentlayer%2Fthumb.png&w=1920&q=75" />
            <div className="mt-3 text-md flex py-3 w-full justify-between">
              <div className="flex ml-3 md:ml-0">
                <div className="flex text-blue-400 font-bold dark:text-purple-700 mr-3">
                  <FontAwesomeIcon icon={faFolder} className="mt-1" />
                  <div className="ml-1">
                    Machine Learning
                  </div>
                </div>
                <FontAwesomeIcon icon={faClock} className="mt-1 mr-1 text-gray-400" />
                <div className="text-gray-400 font-medium ">
                  July 2023
                </div>
              </div>
              <div className="mr-2 md:mr-0">
                <Share />
              </div>
            </div>
            <div className="text-5xl font-bold text-left ml-3 my-2 md:ml-0">
              Introduction to Neural Networks
            </div>
            <div className="flex flex-wrap my-3 ml-3 md:ml-0">
              {data.tags.map(
                tag =>
                <div key={tag} className="border border-gray-300 rounded-xl text-gray-500 text-sm font-bold py-1 px-2 rounded m-1">
                  # {tag}
                </div>
              )}
            </div>
            <div className="mt-3 border-b">

            </div>
            <div className="flex justify-center">
              <BlogPost />
            </div>
          </div>

          <div className="hidden lg:block mt-16 ml-5">
            <div className="sticky top-40">
              <Toc />
            </div>
          </div>

        </div>
    </>
  );
}

