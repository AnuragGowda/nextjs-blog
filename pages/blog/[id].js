import Share from "../../components/share"
import NextPost from "../../components/nextpost"
import data from "../../data/data.json"
import Head from "next/head"
import Toc from "../../components/toc"
import BlogPost from "../../components/blogpost"
import { faClock, faFolder } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Comments from "../../components/comments"
import Tags from "../../components/tags"
import Breadcrumbs from "../../components/breadcrubs"
import { motion } from 'framer-motion'

export default function BlogPage({ blogData }) {

  // Render the gist description if it exists 
  return (
    <>
      <Head>
        <title>{blogData.title}</title>
        <meta name='og:title' content={blogData.title}/>
        <meta name='og:description' content={blogData.description}/>
        <meta name='og:image' content={"https://anuraggowda.com"+blogData.img}/>
        <meta name='og:url' content={"https://anuraggowda.com/"+blogData.location}/>
        <meta name='og:type' content="website"/>
        <meta name="twitter:card" content={"https://anuraggowda.com"+blogData.img} />
        <meta name="twitter:title" content={blogData.title} />
        <meta name="twitter:description" content={blogData.description} />
        <meta name="twitter:image" content={"https://anuraggowda.com"+blogData.img} />
      </Head>
      <div className="flex h-[fit-content] justify-center mt-2 bg-[#f9fafb] dark:bg-[#1e1e1e] pb-10">

        <div className="flex flex-col mt-16 w-[fit-content] border p-3 mx-3 md:p-14 rounded-lg bg-white dark:bg-[#2e2e2e] dark:border-[#2e2e2e]">
          <Breadcrumbs folder={blogData.folder} name={blogData.title} />
          <img className="w-full md:max-w-4xl rounded-2xl my-3" src={blogData.img} />
          <div className="mt-3 text-md flex py-3 w-full justify-between">
            <div className="flex ml-3 md:ml-0">
              <motion.div 
                whileHover={{ scale:1.03 }}
                whileTap={{ scale:0.95 }} 
                className="flex text-blue-400 font-bold dark:text-purple-500 mr-3"
              >
                <FontAwesomeIcon icon={faFolder} className="mt-1" />
                <div className="ml-1 cursor-pointer" onClick={()=>window.open(`/blog?folder=${blogData.folder}`, '_self')}>
                  {blogData.folder}
                </div>
              </motion.div>
              <FontAwesomeIcon icon={faClock} className="mt-1 mr-1 text-gray-400" />
              <div className="text-gray-400 font-medium ">
                {blogData.date}
              </div>
            </div>
            <div className="mr-2 md:mr-0 share-show hidden">
              <Share />
            </div>
          </div>
          <div className="sm:text-5xl text-4xl font-bold text-left ml-3 my-2 md:ml-0">
            {blogData.title}
          </div>
          <div className="flex flex-wrap my-3 ml-3 md:ml-0">
            <Tags tags={blogData.tags} />
          </div>
          <div className="flex justify-center border-t mt-3">
            <BlogPost path={blogData.markdownLocation}/>
          </div>
          <div className="border-y mt-20 flex justify-center gap-20">
              <NextPost prev={true} blogData={blogData.prev}/>
              <NextPost prev={false} blogData={blogData.next}/>
          </div> 
          <div className="mt-32">
            <Comments />
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

export async function getServerSideProps(context) {
  // Fetch the data from the imported JSON file
  const {query} = context
  const blogData = data.blogs[query.id-1];

  // Pass the data as props to the page component
  return {
    props: {
      blogData,
    },
  };
}