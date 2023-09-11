import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import Head from "next/head"

export default function HomePage() {
  const parent = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren:3.2,
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

  const name = {
    hidden: {opacity:1},
    visible: {
      opacity:1,
      transition: {
        staggerChildren:0.2
      }
    }
  }

  const letter = {
    hidden: {opacity:0},
    visible:{opacity:1},
  }

  const fn = "Anurag"
  const ln = "Gowda"

  return (
    <>
    <Head>
      <title>agowda</title>
      <meta name='og:title' content="Home Page"/>
      <meta name='og:description' content="Anurag Gowda's personal website"/>
      <meta name='og:image' content="https://anuraggowda.com/images/blog.png"/>
      <meta name='og:url' content="https://anuraggowda.com/images/"/>
      <meta name='og:type' content="website"/>
    </Head>
  
    <div className="flex h-[calc(100vh-20vh)] items-center justify-center">
      <div className="flex flex-col gap-1 ml-10 mr-10">
        <div className="font-medium text-xl">
          Hi, I'm
        </div>
        <motion.div className="flex flex-wrap font-bold text-6xl" variants={name} initial="hidden" animate="visible" transition={{duration:1}}>
          {fn.split("").map((c, i) => {
              return (
                <motion.span key={c+"-"+i} variants={letter}>
                  {c}
                </motion.span>
              )
            })}
          &nbsp;
          <div className="flex">
            <div className="text-blue-400 dark:text-purple-600"> 
              {ln.split("").map((c, i) => {
                  return (
                    <motion.span key={c+"-"+i} variants={letter}>
                      {c}
                    </motion.span>
                  )
                })}
            </div>
            <motion.span variants={letter}>
              .
            </motion.span>
          </div>
        </motion.div>
        <motion.div className="text-gray-500 text-xl mt-8 max-w-4xl" initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }} transition={{ delay:2.1, duration:0.5 }}>
          A Sophmore CS + Math double major at UMD. I enjoy learning about topics related to Web development and Machine Learning. I use this website to document my growth and learning. 
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={parent}
          className="flex gap-5 mt-5"
        > 
          <motion.button 
            variants={child} 
            whileHover={{ scale:1.1 }}
            whileTap={{ scale:0.9 }}
            onClick={()=>window.open("https://github.com/AnuragGowda", "_blank")}
            className="rounded-xl border p-2 bg-gray-200 dark:bg-gray-600 dark:border-gray-600"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl"/>
          </motion.button>

          <motion.button 
            variants={child} 
            whileHover={{ scale:1.1 }}
            whileTap={{ scale:0.9 }}
            onClick={()=>window.open("https://www.linkedin.com/in/anurag-gowda-478b91168/", "_blank")}
            className="rounded-xl border p-2 bg-gray-200 dark:bg-gray-600 dark:border-gray-600"
          >
              <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
          </motion.button>

          <motion.button 
            variants={child} 
            whileHover={{ scale:1.1 }}
            whileTap={{ scale:0.9 }}
            onClick={()=>window.open("mailto:gowdaanuragr@gmail.com", "_blank")}
            className="rounded-xl border p-2 bg-gray-200 dark:bg-gray-600 dark:border-gray-600"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2xl"/>
          </motion.button>

          <motion.button 
            variants={child}
            whileHover={{ scale:1.1 }}
            whileTap={{ scale:0.9 }}
            onClick={()=>window.open("https://www.instagram.com/anuraggowdaa/", "_blank")}
            className="rounded-xl border p-2 bg-gray-200 dark:bg-gray-600 dark:border-gray-600"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl"/>
          </motion.button>

        </motion.div>

      </div>
    </div>
    </>
  )
}