import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
            <FontAwesomeIcon className="mt-1 text-lg mr-2 text-blue-400 dark:text-purple-500" icon={faSearch} />
            <input value={inputContent} placeholder="Search for a post" onChange={handleChange} className="pl-2 overflow-hidden bg-gray-100 dark:bg-[#3b3b3b] dark:focus:border-purple-400 flex-grow rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-400"></input>
        </div>
    )
}