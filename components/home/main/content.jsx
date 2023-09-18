import { PiNotepad, PiPaperPlaneTiltBold } from 'react-icons/pi'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';


export default function MainContent(){
    return (
        <div className="flex flex-col text-center lg:text-left lg:max-w-[35vw] my-auto">
            <motion.h1 
                className="text-2xl sm:text-5xl -mb-1 mt-4 sm:-mt-0.5"
                initial={{opacity:0, y:-10}}
                animate={{opacity:1, y:0}}
                transition={{duration:1}}
            >   
                <div>
                    <p className="text-slate-600 mb-3 text-sm sm:text-lg">Hi, I'm</p>
                    Anurag Gowda
                </div>
            </motion.h1>
            <motion.div
                className="space-y-3 md:space-y-6"
                initial={{opacity:0, y:10}}
                animate={{opacity:1, y:0}}
                transition={{duration:1}}
            >
                <h2 className="text-base sm:text-xl font-medium text-sky-400">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('and I am still working on this website')
                            .pauseFor(1000)
                            .deleteChars(32)
                            typewriter.typeString('don\'t know what to put here')
                            .pauseFor(1000)
                            .deleteChars(27)
                            typewriter.typeString('am thinking of what to put here')
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </h2>
                <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
                    I'm a Sophmore CS + Math double major at UMD. I enjoy learning about topics related to Web development and Machine Learning. 
                </p>
                <div className="pt-4 flex space-x-3 md:space-x-10 justify-center lg:justify-normal">
                    <button className="flex rounded-xl bg-slate-500 hover:bg-slate-600 text-white px-4 py-3 md:px-8 md:py-5">
                        Resume
                        <div className="ml-4 my-auto text-xl">
                            <PiNotepad />
                        </div>
                    </button>
                    <Link href="/#contact" className="flex rounded-xl bg-blue-400 hover:bg-blue-500 text-white px-4 py-3 md:px-8 md:py-5">
                        Contact
                        <div className="ml-3 my-auto text-xl">
                            <PiPaperPlaneTiltBold />
                        </div>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}