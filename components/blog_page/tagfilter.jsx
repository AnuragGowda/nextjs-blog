import {FaChevronDown, FaChevronRight, FaTag} from 'react-icons/fa6'
import SmallTags from "../blog_components/smalltag"
import data from "../../data/data.json"
import { useState } from "react";

export default function TagFilterCard({collapsed}){

    const tags = data.blogs.reduce((accumulator, current) => {
        current.tags.forEach((tag) => accumulator.add(tag));
        return accumulator;
    }, new Set());

    const allTags = Array.from(tags)

    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="flex flex-col p-6 border rounded-lg bg-white dark:bg-[#2e2e2e] dark:border-[#2e2e2e] flex-grow">
            <div className="flex text-xl font-medium justify-between" onClick={()=>setShowDropdown(!showDropdown)}>
                <div className="flex">
                    <div className="mt-1.5 mr-1 text-blue-400 dark:text-purple-500">
                        <FaTag />
                    </div>
                    <div>
                        Tags
                    </div>
                </div>
                <div className={collapsed?"flex h-full":"hidden"}>
                    <div className="my-auto h-[fit-content] text-blue-400 dark:text-purple-400">
                        {showDropdown?<FaChevronDown />:<FaChevronRight />}
                    </div>
                </div>
            </div>
            <div className={`flex gap-2 mt-4 ml-2 flex-wrap ${!collapsed || (collapsed && showDropdown)?'':'hidden'}`}>
                <SmallTags tags={allTags} />
            </div>
        </div>
    )
}