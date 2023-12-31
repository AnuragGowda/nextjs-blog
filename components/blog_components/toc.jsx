import tocbot from "tocbot";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineBars } from "react-icons/ai"
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { MdRefresh } from 'react-icons/md'

export default function Toc({ setReset }){

    useEffect(() => {
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: '.blog',
            headingSelector: 'h1, h2, h3, h4, h5, h6',
        });

        setReset(()=>tocbot)
    
        return () => {
            tocbot.destroy();
        };
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            tocbot.refresh()
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    useEffect(() => {
        const timer2 = setTimeout(() => {
            tocbot.refresh()
        }, 1000)
    
        return () => {
            clearTimeout(timer2)
        }
    }, [])

    return (
        <div className="mb-5 border rounded-lg p-4 max-w-[275px] bg-white dark:bg-[#2e2e2e] dark:border-[#2e2e2e] mr-10">
            <div className="flex gap-2 justify-between">
                <AiOutlineBars className="mt-2"/>
                <div className="text-xl font-bold mb-1">
                    Contents
                </div>
                <div className="my-auto text-2xl cursor-pointer mr-2 text-blue-500 dark:text-purple-500" onClick={()=>{tocbot.refresh()}} >
                    <MdRefresh />
                </div>
            </div>
            <div className="toc text-md">

            </div>
        </div>
    )
}