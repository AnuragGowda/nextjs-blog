import Socials from "./main/socialsHoriz"

export default function Contact(){
    return (
        <div className="flex flex-col w-[70vw] mx-auto">
            <h1 id="contact" className="text-center ">
                Contact
            </h1>
            <h6 className="text-center text-slate-600">
                Get in touch using the links below
            </h6>
            <div className="cursor-pointer flex justify-center text-2xl text-blue-400 mt-16 mb-6" onClick={()=>window.open("mailto:gowdaanuragr@gmail.com")}>
                <span>
                    gowdaanuragr
                </span>
                <span className="hidden">
                    scrape protection
                </span>
                <span>
                    @
                </span>
                <span>
                    gma
                </span>
                <span className="hidden">
                    scrape protection
                </span>
                <span>
                    il
                </span>
                <span>
                    .
                </span>
                <span className="hidden">
                    scrape protection
                </span>
                <span>
                    com
                </span>
            </div>
            <div>
                <Socials />
            </div>
        </div>    
    )
}