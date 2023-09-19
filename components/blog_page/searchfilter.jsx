import { FaSearch } from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Search({setter}){

    const [inputContent, setInputContent] = useState('');

    const handleChange = (e) => {
        const content = e.target.value
        setInputContent(content)
        setter(content)
    }

    return (
        <div className="flex p-5 border rounded-lg bg-white dark:bg-[#2e2e2e] dark:border-[#2e2e2e]">
            <div className="my-auto text-2xl mr-4 text-blue-400 dark:text-purple-500">
                <FaSearch />
            </div>
            <input value={inputContent} placeholder="Search for a post" onChange={handleChange} className="pl-3.5 py-2 overflow-hidden bg-gray-100 dark:bg-[#3b3b3b] dark:focus:border-purple-400 flex-grow rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-400"></input>
        </div>
    )
}