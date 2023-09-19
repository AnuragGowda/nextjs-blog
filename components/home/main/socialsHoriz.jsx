import {TbBrandGithub} from 'react-icons/tb'
import {PiLinkedinLogo, PiInstagramLogo} from 'react-icons/pi'
import { motion } from 'framer-motion'

export default function Socials(){

    const parent = {
        visible: {
          opacity: 1,
          transition: {
            delayChildren:0.5,
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
            duration: 1.5
          }
        }
    }

    return (
        <motion.div 
            className="flex text-4xl space-x-10 my-auto mx-auto w-[fit-content] pb-20"
            initial="hidden"
            whileInView="visible"
            variants={parent}
        >
            <motion.button
                className="hover:text-sky-600 text-sky-300"
                variants={child} 
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.9 }}
                onClick={()=>window.open('https://www.linkedin.com/in/anurag-gowda-478b91168/')}
            >
                <PiLinkedinLogo />
            </motion.button>
            <motion.button
                className="hover:text-indigo-600 text-indigo-300"
                variants={child} 
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.9 }}
                onClick={()=>window.open('https://github.com/AnuragGowda')}
            >
                <TbBrandGithub />
            </motion.button>
            <motion.button
                className="hover:text-pink-600 text-pink-300"
                variants={child} 
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.9 }}
                onClick={()=>window.open('https://www.instagram.com/anuraggowdaa/')}
            >
                <PiInstagramLogo />
            </motion.button>
        </motion.div>
    )
}