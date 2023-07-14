import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink  } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useTheme } from 'next-themes';


export default function Share({ title, location }){

    const { theme } = useTheme()

    return (
        <div className="flex gap-3">
            <button
                onClick={()=>window.open(`https://www.linkedin.com/sharing/share-offsite/?url=https://anuraggowda.com${location}`, "_blank")}
            >
                <FontAwesomeIcon icon={faLinkedin} size="xl" color={theme=="light"?"#0077B5":"#94a3b8"}/>
            </button>
            <button
                onClick={()=>window.open(`https://reddit.com/submit?url=https://anuraggowda.com${location}&title=${title}`, "_blank")}
            >
                <FontAwesomeIcon icon={faReddit} size="xl" color={theme=="light"?"#FF4500":"#94a3b8"}/>
            </button>
            <button
                onClick={()=>window.open(`https://twitter.com/intent/tweet?text=Check out this blog "${title}": https://anuraggowda.com${location}`, "_blank")}
            >
                <FontAwesomeIcon icon={faTwitter} size="xl" color={theme=="light"?"#1DA1F2":"#94a3b8"}/>
            </button>
        </div>
    )
}