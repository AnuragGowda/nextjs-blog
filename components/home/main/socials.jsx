import { motion } from 'framer-motion'
import {TbMailShare, TbBrandGithub} from 'react-icons/tb'
import {PiLinkedinLogo, PiInstagramLogo} from 'react-icons/pi'

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
          x:-10
        },
        visible: { 
          opacity: 1,
          x:0,
          transition:{
            duration: 1
          }
        }
    }

    return (
        <motion.div 
            className="flex flex-col text-2xl md:text-3xl space-y-4 xl:space-y-6 my-auto mr-10 2xl:mr-0"
            initial="hidden"
            animate="visible"
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
            <motion.button
                className="hover:text-slate-600 text-slate-300"
                variants={child} 
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.9 }}
                onClick={()=>window.open('mailto:gowdaanuragr@gmail.com')}
            >
                <TbMailShare />
            </motion.button>
        </motion.div>
    )
}