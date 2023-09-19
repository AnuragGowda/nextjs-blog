import { FaChevronRight } from 'react-icons/fa6'

export default function Breadcrumbs({ folder, name }){

    return (
        <div className="flex items-center gap-1 text-gray-400 font-medium">
            <div className="cursor-pointer hover:text-gray-300" onClick={()=>window.open("/", "_self")}> Home </div> 
                <FaChevronRight />
            <div className="cursor-pointer hover:text-gray-300" onClick={()=>window.open("/shelf", "_self")}> Shelf </div>
                <FaChevronRight />
            <div className="cursor-pointer hover:text-gray-300" onClick={()=>window.open(`/blog?folder=${folder}`, '_self')}> {folder} </div>
                <FaChevronRight />
            <div className="font-normal"> {name} </div>
        </div>
    )
}