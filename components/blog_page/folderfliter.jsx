import { FaArrowTurnUp, FaChevronDown, FaChevronRight, FaFolder } from 'react-icons/fa6'
import { useState } from "react";

export default function FolderFilterCard({ collapsed }){

    const folders = ['Web', 'Machine Learning']
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="flex flex-col p-6 border rounded-lg bg-white dark:bg-[#2e2e2e] dark:border-[#2e2e2e] flex-grow">
            <div className="flex justify-between" onClick={()=>setShowDropdown(!showDropdown)}>
                <div className="flex text-xl font-medium">
                    <div className="mt-1 mr-2 text-blue-400 dark:text-purple-500">
                        <FaFolder />
                    </div>
                    Folders
                </div>
                <div className={collapsed?"flex h-full":"hidden"}>
                    <div className="my-auto h-[fit-content] text-xl text-blue-400 dark:text-purple-400">
                        {showDropdown?<FaChevronDown />:<FaChevronRight />}
                    </div>
                </div>
            </div>
            <div className={`flex flex-col ml-3 mt-2 gap-2 ${!collapsed || (collapsed && showDropdown)?'':'hidden'}`}>
                {
                    folders.map(folder => (
                        <div key={folder} className="flex" onClick={()=>window.open(`/blog?folder=${folder}`, '_self')}> 
                            <div className="text-blue-400 dark:text-purple-500 mr-3 transform rotate-90">
                                <FaArrowTurnUp /> 
                            </div>
                            <div className="cursor-pointer hover:font-medium hover:text-blue-300 hover:dark:text-purple-400">
                                {folder}
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}