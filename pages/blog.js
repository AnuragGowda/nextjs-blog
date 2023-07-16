import data from "../data/data.json"
import BlogCard from "../components/blogcard"
import { motion } from "framer-motion"
import TagFilterCard from "../components/tagfilter"
import FolderFilterCard from "../components/folderfliter"
import Search from "../components/searchfilter"
import { useSearchParams } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder } from "@fortawesome/free-regular-svg-icons"
import { faTag, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function splitArr(array) {
    return array.reduce(
      (result, element, index) => {
        result[index % 2].push(element);
        return result;
      },
      [[], []]
    );
  }
  



export default function BlogPage(){
    
    let b = data.blogs
    const sp = useSearchParams()
    
    if (sp.has("folder")){
      b = b.filter(obj => obj.folder === sp.get("folder"))
    }else if (sp.has("tag")){
      b = b.filter(obj => obj.tags.includes(sp.get("tag")))
    }
    const [query, setQuery] = useState('')
    const blogs = b.filter(obj => obj.title.toLowerCase().includes(query.toLowerCase()))
    const [blogs1, blogs2] = splitArr(blogs)

    const parent = {
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3
          },
        }
      }
    
      const child = {
        hidden: {
          opacity: 0,
          y:10
        },
        visible: {
          delay:2, 
          opacity: 1,
          y:0,
          transition:{
            duration: 1
          }
        }
      }

    return (
        <div className="flex flex-col items-center bg-[#f9fafb] dark:bg-[#1e1e1e] pb-5">
            <div className="font-bold text-5xl mt-10">
                Blog
            </div>
            {
            (!sp.has("folder") && !sp.has("tag")) && 
              <div className="text-gray-400 mt-5 text-xl max-w-2xl ml-3 mr-3 text-center">
                  Here's a collection of a few articles on topics I have been learning recently. 
              </div>
            }
            {
              sp.has("folder") &&
              <div className="text-blue-500 dark:text-purple-500 mt-5 text-xl max-w-2xl ml-3 mr-3 text-center">
                  <FontAwesomeIcon icon={faFolder} className="mr-2" />
                  {sp.get("folder")}
                  <FontAwesomeIcon icon={faXmark} className="ml-2 text-gray-400 cursor-pointer" onClick={()=>window.open("/blog", "_self")}/>
              </div>
            }
            {
              !sp.has("folder") && sp.has("tag") &&
              <div className="text-blue-500 dark:text-purple-500 mt-5 text-xl max-w-2xl ml-3 mr-3 text-center">
                  <FontAwesomeIcon icon={faTag} className="mr-2" />
                  {sp.get("tag")}
                  <FontAwesomeIcon icon={faXmark} className="ml-2 text-gray-400 cursor-pointer" onClick={()=>window.open("/blog", "_self")}/>
              </div>
            }

            <div className="flex flex-col gap-5 mt-5 mx-2 lg:hidden w-[80vw]">
              <Search setter={setQuery} />
              <div className="flex flex-wrap gap-3 w-full">
                <FolderFilterCard collapsed={true} />
                <TagFilterCard collapsed={true} />
              </div>
            </div>
            
              <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={parent}
                  className="hidden sm:flex grid grid-cols-2 divide-x mt-10 gap-5"
              >
                {
                  blogs.length == 0? <div className=" flex my-auto  mx-10 text-gray-400 text-2xl font-medium">No blogs matching filter </div> :
              
                  <div className="flex gap-7">
                    <div className="flex flex-col gap-7">
                        {blogs1.map(blog => 
                            <motion.div variants={child} key={blog.title}>
                                <BlogCard data={blog}/>
                            </motion.div>
                        )}
                    </div>
                    <div className="flex flex-col gap-7">
                        {blogs2.map(blog => 
                            <motion.div variants={child} key={blog.title}>
                                <BlogCard data={blog}/>
                            </motion.div>
                        )}
                    </div>
                  </div>
                }
                <div className="p-5 max-w-xs hidden lg:block">
                  <div className="sticky top-40 flex flex-col gap-5">
                  <Search setter={setQuery} />
                  <FolderFilterCard />
                  <TagFilterCard />
                  </div>
                </div>
              </motion.div>
            
            {
              blogs.length == 0? <div className="sm:hidden flex mt-20 mb-72 mx-2 text-gray-400 text-lg font-medium">No blogs matching filter </div> :
              <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={parent}
                  className="sm:hidden flex flex-col gap-3 my-5 mx-2"
              >
                  {blogs.map(blog => 
                      <motion.div variants={child} key={blog.title}>
                          <BlogCard data={blog}/>
                      </motion.div>
                  )}
              </motion.div>
            }
        </div>
    )
}