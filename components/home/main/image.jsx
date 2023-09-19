import Image from "next/image";
import blob from "../../../public/images/banim.svg"
import { motion } from "framer-motion";

export default function FloatingImage(){
    return (
        <motion.div 
            className="flex flex-grow min-w-[30vw] max-w-[70vw] max-h-[70vw] md:max-w-[50vw] xl:max-w-[600px]"
            initial={{opacity:0, x:30}}
            animate={{opacity:1, x:0}}
            transition={{duration:1}}
        >
            <Image 
                className="w-full mx-auto my-auto"
                src={blob}
                width={400} 
                height={400}
            />
        </motion.div>
    )
}