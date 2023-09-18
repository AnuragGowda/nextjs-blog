import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';
import { faLinkedin, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useTheme } from 'next-themes';


export default function Share({ title, location }){

    const { theme } = useTheme()

    return (
        <div className="flex gap-3">
            <motion.button
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.9 }}

                onClick={()=>window.open(`https://www.linkedin.com/sharing/share-offsite/?url=https://anuraggowda.com${location}`, "_blank")}
            >
                <FontAwesomeIcon icon={faLinkedin} size="xl" className="text-[#0077B5] dark:text-[#94a3b8] hover:dark:text-purple-400"/>
            </motion.button>
            <motion.button
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.9 }}

                onClick={()=>window.open(`https://reddit.com/submit?url=https://anuraggowda.com${location}&title=${title}`, "_blank")}
            >
                <FontAwesomeIcon icon={faReddit} size="xl" className="text-[#FF4500] dark:text-[#94a3b8] hover:dark:text-purple-400"/>
            </motion.button>
            <motion.button
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.9 }}

                onClick={()=>window.open(`https://twitter.com/intent/tweet?text=Check out this blog "${title}": https://anuraggowda.com${location}`, "_blank")}
            >
                <FontAwesomeIcon icon={faTwitter} size="xl" className="text-[#1DA1F2] dark:text-[#94a3b8] hover:dark:text-purple-400"/>
            </motion.button>
        </div>
    )
}