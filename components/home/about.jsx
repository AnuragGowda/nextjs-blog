import {TbBrandNodejs, TbBrandReactNative, TbSql, TbBrandReact, TbBrandCpp, TbBrandNextjs, TbBrandFirebase, TbBrandTailwind, TbBrandVercel, TbGitBranch, TbBrandPython, cplus, TbBrandJavascript} from 'react-icons/tb'
import {FaJava} from 'react-icons/fa6'
import {SiGit, SiJupyter, SiGnubash, SiLatex, SiSupabase, SiHtml5, SiOcaml, SiJquery, SiBootstrap, SiFlask, SiPytorch, SiNumpy, SiRuby, SiPython} from 'react-icons/si'
import HackaPrompt from '../../public/images/hackaprompt.png'
import Image from 'next/image'
import Link from 'next/link'

export default function About(){
    return (
        <div className="flex flex-col w-[90vw] mx-auto min-h-screen">
            <h1 id="about" className="text-center ">
                About Me
            </h1>
            <h6 className="text-center text-slate-600">
                Heres a little bit about myself as a Developer
            </h6>
            <div className="flex flex-col xl:flex-row h-full">
                <div className="flex flex-col xl:w-1/2  h-[fit-content] my-auto space-y-4 ">
                    <div>
                        <h4 className="text-center">
                            Tech Stack
                        </h4>
                        <h6 className="text-center text-slate-600">
                            My current tech stack for projects
                        </h6>
                    </div>
                    <div className="flex gap-2 mx-auto pt-2 pb-4 flex-wrap w-full justify-center">
                        <div className="flex flex-col aspect-square w-24 justify-center items-center text-4xl border-2 rounded-xl bg-white ">
                            <TbBrandReact />
                            <p className="text-xs m-0 mt-2">ReactJS</p>
                        </div>
                        <div className="flex flex-col w-24 justify-center items-center aspect-square text-4xl border-2 rounded-xl bg-white ">
                            <TbBrandNextjs />
                            <p className="text-xs m-0 mt-2">NextJS</p>
                        </div>
                        <div className="flex flex-col w-24 justify-center items-center aspect-square text-4xl border-2 rounded-xl bg-white ">
                            <TbBrandTailwind />
                            <p className="text-xs m-0 mt-2">TailwindCSS</p>
                        </div>
                        <div className="flex flex-col w-24 justify-center items-center aspect-square text-4xl border-2 rounded-xl bg-white ">
                            <TbBrandFirebase />
                            <p className="text-xs m-0 mt-2">Firebase</p>
                        </div>

                        <div className="flex flex-col w-24 justify-center items-center aspect-square text-4xl border-2 rounded-xl bg-white ">
                            <TbBrandVercel />
                            <p className="text-xs m-0 mt-2">Vercel</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <h4 className="text-center pt-2">Most Recent Project</h4>
                        <h6 className="text-center text-slate-600">
                            HackaPrompt2
                        </h6>
                        <Image
                            className="rounded-xl border-2 mt-4 cursor-pointer sm:w-4/5 mx-auto"
                            src={HackaPrompt}
                            onClick={()=>window.open('https://www.hackaprompt.com/')}
                        />
                        <Link href="/portfolio" className="text-center mx-auto mt-6 rounded p-2 bg-blue-400 hover:bg-blue-500 text-white min-w-[180px] ">
                            View all Projects
                        </Link>
                    </div>
                </div>
                <div className="text-xs sm:text-lg xl:ml-5 flex flex-col xl:w-1/2 xl:pt-0 pt-6 xl:px-6 h-[fit-content] my-auto space-y-4">
                    <div>
                        <h4 className="text-center">
                            Other Technologies
                        </h4>
                        <p className="text-base text-center text-slate-600">
                            Other tools I have experience with
                        </p>
                    </div>
                    <div className="xl:px-5 flex mx-auto py-6 border rounded-xl bg-white w-full break-words">
                        <div className="flex flex-col w-1/3 border-r items-center">
                            <span className="font-bold sm:font-normal text-center mb-6">
                                Languages
                            </span>
                            <div className="flex flex-col space-y-6 text-slate-500">
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <TbBrandPython />
                                    </div>
                                    Python
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <TbBrandJavascript />
                                    </div>
                                    Vanilla JS
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <FaJava />
                                    </div>
                                    Java
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <TbBrandCpp />
                                    </div>
                                    C and C++
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiOcaml />
                                    </div>
                                    OCaml
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiRuby />
                                    </div>
                                    Ruby
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <TbSql />
                                    </div>
                                    SQL
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3">
                            <span className="font-bold sm:font-normal text-center mb-6">
                                Frameworks
                            </span>
                            <div className="flex flex-col space-y-6 text-slate-500">
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <TbBrandReactNative />
                                    </div>
                                    React-Native+Expo
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiJquery />
                                    </div>
                                    JQuery
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiBootstrap />
                                    </div>
                                    Bootstrap/MUI/etc
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiFlask />
                                    </div>
                                    Flask
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiNumpy />
                                    </div>
                                    NumPY+PuLP
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiPytorch />
                                    </div>
                                    Pytorch+TF/Keras
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiPython />
                                    </div>
                                    PyGame
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3 border-l">
                            <span className="font-bold sm:font-normal text-center mb-6">
                                Other tools
                            </span>
                            <div className="flex flex-col space-y-6 text-slate-500">
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <TbBrandNodejs />
                                    </div>
                                    Node.js
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiGit />
                                    </div>
                                    Git/Github/Gitlab
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiLatex />
                                    </div>
                                    LaTeX/Markdown
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiGnubash />
                                    </div>
                                    Bash/Shell/Linux
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiSupabase />
                                    </div>
                                    Supabase
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiHtml5 />
                                    </div>
                                    HTML5+CSS3
                                </div>
                                <div className="text-xs text-center">
                                    <div className="mx-auto text-3xl w-[fit-content] mb-1">
                                        <SiJupyter />
                                    </div>
                                    Jupyter Notebook
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
