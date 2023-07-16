import { faChevronDown, faChevronRight, faChevronUp, faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SmallTags from "./smalltag"
import data from "../data/data.json"
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
            <div className="flex text-xl font-medium justify-between">
                <div className="flex">
                    <FontAwesomeIcon icon={faTag} className="mt-1.5 mr-1 text-blue-400 dark:text-purple-500"/>
                    <div>
                        Tags
                    </div>
                </div>
                <div className={collapsed?"":"hidden"}>
                    <FontAwesomeIcon icon={showDropdown?faChevronDown:faChevronRight} className="text-blue-400 dark:text-purple-400" onClick={()=>setShowDropdown(!showDropdown)} />
                </div>
            </div>
            <div className={`flex gap-2 mt-4 ml-2 flex-wrap ${!collapsed || (collapsed && showDropdown)?'':'hidden'}`}>
                <SmallTags tags={allTags} />
            </div>
        </div>
    )
}