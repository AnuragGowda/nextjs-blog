import data from "../data/data.json"
import PortfolioCard from "../components/portfoliocard";
import { motion } from "framer-motion";

export default function PortfolioPage(){

    const projects = data.projects

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
        <div className="flex flex-col items-center ml-5 mr-5 mt-[10vh]">
            <div className="font-bold text-5xl mt-10">
                Portfolio
            </div>
            <div className="text-gray-400 mt-5 text-xl max-w-2xl ml-3 mr-3 text-center mb-5">
                Here's some of the things I've worked on.
            </div>
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={parent}
                className="flex flex-wrap gap-5 mb-10 justify-center max-w-7xl"
            >
                {projects.map(data =>
                    <motion.div variants={child} key={data.title}>
                        <PortfolioCard data={data}/>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}