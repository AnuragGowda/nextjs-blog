import tocbot from "tocbot";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineBars } from "react-icons/ai"

export default function Toc(){

    useEffect(() => {
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: '.blog',
            headingSelector: 'h1, h2, h3, h4, h5, h6',
        });
    
        return () => {
            tocbot.destroy();
        };
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            tocbot.refresh()
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className="mb-5 border rounded-lg p-4 max-w-[275px] bg-white dark:bg-[#2e2e2e] dark:border-[#2e2e2e] mr-10">
            <div className="flex gap-2">
                <AiOutlineBars className="mt-2"/>
                <div className="text-xl font-bold mb-1">
                    Table of Contents
                </div>
            </div>
            <div className="toc text-md">

            </div>
        </div>
    )
}