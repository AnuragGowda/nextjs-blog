import { faCaretDown, faCaretRight, faCircleInfo, faBars, faCircleQuestion, faCheck, faWarning, faFire, faPencil } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function Blogbox({type, title, content}){

    const [isOpen, setOpen] = useState(true)

    const iconMap = new Map([
        ["info", faCircleInfo],
        ["example", faBars],
        ["question", faCircleQuestion],
        ["success", faCheck],
        ["warning", faWarning],
        ["tip", faFire],
        ["note", faPencil]
    ])

    return (
        <div className={`rounded border my-3 pb-3 ${type}`}>
            <div className="text-xl font-semibold mt-4 mb-3 ml-4 md:ml-6 title flex" onClick={()=>setOpen(!isOpen)}>
                <FontAwesomeIcon className="mt-1.5 mr-2" icon={iconMap.get(type)} />
                {title}
                <FontAwesomeIcon className="ml-3 mt-1" icon={isOpen?faCaretDown:faCaretRight} />
            </div>
            { isOpen &&
                <div className="px-1 md:ml-5 mx-3 -mb-3"> 
                    {content}
                </div>
            }
        </div>
    )
}