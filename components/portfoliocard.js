import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function PortfolioCard({ data }){

    const imgSrc = `/images/${data.image}`
    
    return (
        <div className="flex flex-col max-w-sm border rounded-md p-4 shadow bg-white dark:bg-[#2e2e2e] dark:border-0">
            <img className="rounded-md mb-3" src={imgSrc}></img>
            <div className="flex flex-wrap mt-1">
                {data.tags.map(
                    tag =>
                    <div key={tag} className="bg-blue-400 text-white text-xs font-bold py-0.5 px-2 rounded m-1 dark:bg-purple-700 dark:text-purple-200">
                        {tag}
                    </div>
                )}
            </div>
            <div className="flex justify-between mt-2 mb-1">
                <div className="font-bold text-2xl">
                    {data.title}
                </div>
                <div className="flex">

                    {
                        data.githubLink != "none" &&
                        <button className="mr-3" onClick={()=>window.open(data.githubLink, '_blank')}>
                            <FontAwesomeIcon icon={faGithub} size="lg"/>
                        </button>
                    }

                    {
                        data.link != "none" &&
                        <button className="mr-3" onClick={()=>window.open(data.link, '_blank')} target="_blank">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                        </button>
                    }

                </div>
            </div>
            <div className="mt-2 text-gray-400">
                {data.description}
            </div>

        </div>
    )
}