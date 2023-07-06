import blogData from "../data/blogData.json"
import BlogCard from "../components/blogcard"
import { motion } from "framer-motion"

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
    
    const blogs = blogData.blogs
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
        <div className="flex flex-col items-center ml-5 mr-5">
            <div className="font-bold text-5xl mt-10">
                Blog
            </div>
            <div className="text-gray-400 mt-5 text-xl max-w-2xl ml-3 mr-3 text-center">
                Here's a collection of a few articles on topics I have been learning recently. 
            </div>

            <motion.div 
                initial="hidden"
                animate="visible"
                variants={parent}
                className="hidden sm:flex grid grid-cols-2 divide-x mt-10"
            >
                <div className="flex flex-col gap-3">
                    {blogs1.map(blog => 
                        <motion.div variants={child}>
                            <BlogCard data={blog}/>
                        </motion.div>
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    {blogs2.map(blog => 
                        <motion.div variants={child}>
                            <BlogCard data={blog}/>
                        </motion.div>
                    )}
                </div>
            </motion.div>
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={parent}
                className="sm:hidden flex flex-col gap-3 mb-5 mt-5"
            >
                {blogs.map(blog => 
                    <motion.div variants={child}>
                        <BlogCard data={blog}/>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}