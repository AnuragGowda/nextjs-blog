import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Breadcrumbs({ folder, name }){

    return (
        <div className="flex text-gray-400 font-medium">
            <div className="cursor-pointer hover:text-gray-300" onClick={()=>window.open("/", "_self")}> Home </div> 
            <FontAwesomeIcon icon={faChevronRight} size="sm" className="px-2 pt-1.5"/> 
            <div className="cursor-pointer hover:text-gray-300" onClick={()=>window.open("/blog", "_self")}> Blog </div>
            <FontAwesomeIcon icon={faChevronRight} size="sm" className="px-2 pt-1.5"/> 
            <div className="cursor-pointer hover:text-gray-300" onClick={()=>window.open(`/blog?folder=${folder}`, '_self')}> {folder} </div>
            <FontAwesomeIcon icon={faChevronRight} size="sm" className="px-2 pt-1.5"/> 
            <div className="font-normal"> {name} </div>
        </div>
    )
}