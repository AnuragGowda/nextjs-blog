import { faArrowTurnUp, faFolder, faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function FolderFilterCard({ collapsed }){

    const folders = ['Web', 'Machine Learning']
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="flex flex-col p-6 border rounded-lg bg-white dark:bg-[#2e2e2e] dark:border-[#2e2e2e] flex-grow">
            <div className="flex justify-between">
                <div className="flex text-xl font-medium">
                    <FontAwesomeIcon icon={faFolder} className="mt-1 mr-1 text-blue-400 dark:text-purple-500" />
                    Folders
                </div>
                <div className={collapsed?"":"hidden"}>
                    <FontAwesomeIcon icon={showDropdown?faChevronDown:faChevronRight} className="text-blue-400 dark:text-purple-400" onClick={()=>setShowDropdown(!showDropdown)} />
                </div>
            </div>
            <div className={`flex flex-col ml-3 mt-2 gap-2 ${!collapsed || (collapsed && showDropdown)?'':'hidden'}`}>
                {
                    folders.map(folder => (
                        <div key={folder} className="flex" onClick={()=>window.open(`/blog?folder=${folder}`, '_self')}> 
                            <FontAwesomeIcon icon={faArrowTurnUp} className="text-blue-400 dark:text-purple-500 mr-1.5 mt-1.5 transform rotate-90 "/> 
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