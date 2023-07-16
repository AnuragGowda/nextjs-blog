import { faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import data from "../data/data.json"

export default function NextPost({prev, blogData}){

    return (
        <>
            {blogData &&
                <div className="flex py-5 md:gap-6 cursor-pointer" onClick={()=>window.open(blogData.location, '_self')}>
                    { prev &&
                        <>
                            <FontAwesomeIcon className="hidden md:block text-blue-400 dark:text-purple-500 mt-7 w-2xl" icon={faChevronLeft} size="2xl"/>
                            <div className="md:hidden">
                                <FontAwesomeIcon className="text-blue-400 dark:text-purple-500 mr-3" icon={faArrowLeft} />
                            </div>
                        </>
                    }
                    <div>
                        <div className="font-medium text-blue-400 dark:text-purple-500">
                            {`${prev?'Previous':'Next'}`} Post 
                        </div>
                        <div className="hidden md:block font-bold text-lg">
                            {blogData.title}
                        </div>
                        <div className="hidden md:block max-w-xs">
                            {blogData.description}
                        </div>
                    </div>
                    { !prev &&
                        <>
                            <FontAwesomeIcon className="hidden md:block text-blue-400 dark:text-purple-500 mt-7" icon={faChevronRight} size="2xl"/>
                            <div className="md:hidden">
                                <FontAwesomeIcon className="text-blue-400 dark:text-purple-500 ml-3" icon={faArrowRight} />
                            </div>
                        </>
                    }
                </div>
            }
        </>
    )
}
