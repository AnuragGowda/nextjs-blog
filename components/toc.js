import tocbot from "tocbot";
import { useEffect } from "react";

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
        <div className="mb-5">
            <div className="text-2xl font-bold mb-1">
                Content
            </div>
            <div className="toc text-xl"></div>
        </div>
    )
}