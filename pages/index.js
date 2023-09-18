import Landing from "../components/home/main/landing"
import About from "../components/home/about"
import Contact from "../components/home/contact"
import Blog from "../components/home/shelf"
import ScrollToTop from "react-scroll-to-top"
import {FaChevronUp} from "react-icons/fa6"

export default function HomePage() {

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Landing />
      <About />
      <Blog />
      <Contact />
      <ScrollToTop smooth component={<FaChevronUp/>} style={{width:"34px", height:"34px", bottom:"25px", right:"25px", display:"flex", alignItems:"center", justifyContent:"center"}}/>
    </div>
  )
}