import { motion } from "framer-motion"

export default function Tags({tags}){
    const parent = {
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.5,
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
          opacity: 1,
          y:0,
          transition:{
            duration: 1
          }
        }
      }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={parent}
            className="flex flex-wrap"
        >
            {tags.map(
                tag =>
                <motion.button 
                    variants={child} 
                    whileHover={{ scale:1.02 }}
                    whileTap={{ scale:0.95 }}
                    key={tag} 
                    onClick={()=>window.open(`/blog?tag=${tag}`, '_self')}
                    className="border-2 border-gray-300 rounded-xl text-gray-500 dark:border-gray-500 text-sm font-bold py-0.5 px-2 rounded m-1 hover:text-blue-400 hover:border-blue-400 hover:dark:text-purple-400 hover:dark:border-purple-400"
                >
                    # {tag}
                </motion.button>
            )}
        </motion.div>
    )
}