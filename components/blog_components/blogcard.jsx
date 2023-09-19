import {FaRegClock, FaFolder} from 'react-icons/fa6'
import { motion } from 'framer-motion'
import Link from "next/link"
import SmallTags from "./smalltag"

export default function BlogCard({ data }){

    return (
        <div className={`flex flex-col max-w-sm p-4 bg-white border dark:border-[#2e2e2e] rounded-lg dark:bg-[#2e2e2e]`}>
            <Link href={data.location} >
                <motion.img 
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.9}}
                    className="rounded-lg mb-3" 
                    src={data.img}
                />
            </Link>
            <div className="ml-2">
                <Link href={data.location}>
                    <div 
                        className="font-bold text-xl mb-2"
                    >
                        {data.title}
                    </div>
                </Link>
                <div className="dark:text-gray-500 mt-2">
                    {data.description}
                </div>
                <div className="flex flex-wrap mt-2">
                    <SmallTags tags={data.tags} />
                </div>
                <div className="flex justify-between mt-3 ml-2 mr-4">
                    <div className="items-center text-sm flex text-blue-400 font-medium dark:text-purple-500">
                        <FaFolder />
                        <div className="ml-1 cursor-pointer">
                            {data.folder}
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-medium dark:text-gray-400">
                        <div className="mr-1">
                            <FaRegClock /> 
                        </div>
                        {data.read} min
                    </div> 
                </div>
            </div>
        </div>
    )
}