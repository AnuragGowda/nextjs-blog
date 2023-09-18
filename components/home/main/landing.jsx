import Socials from "./socials"
import MainContent from "./content"
import FloatingImage from "./image"


export default function Landing(){
    return (
    <div className="flex w-screen min-h-screen">
        <div className="hidden lg:flex justify-between my-auto w-[80vw] h-[fit-content] mx-auto">
          <Socials />
          <MainContent />
          <FloatingImage />
        </div>
        <div className="flex flex-col lg:hidden my-auto w-[95vw] md:w-[80vw] mx-auto h-[fit-content]">
           <div className="flex w-full h-full justify-center"> 
            <Socials />
            <FloatingImage />
          </div>
          <MainContent />
        </div>
      </div>
    )
}