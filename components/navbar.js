import React, {useState} from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faX } from '@fortawesome/free-solid-svg-icons'
import { BiSun, BiMoon } from "react-icons/bi"
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function Navbar() {

    const [mobileOpen, setMobileOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    return (
        <nav className="flex p-6 px-10 max-w-screen-2xl items-center mx-auto">
            <div className="hidden sm:flex justify-between w-full">
                <div>
                    <Link href="/" className="text-4xl font-bold flex">
                        <div className="font-extrabold text-blue-400 dark:text-purple-600">
                            &gt;_
                        </div>
                        agowda
                    </Link>
                </div>
                <div className="flex items-center space-x-8">
                    <div className="flex space-x-6">
                        <div>
                            <Link href="/portfolio" className="text-lg font-medium hover:text-gray-300" onClick={() => setMobileOpen(false)}>Portfolio</Link>
                        </div>
                        <div>
                            <Link href="/blog" className="text-lg font-medium hover:text-gray-300" onClick={() => setMobileOpen(false)}>Blog</Link>
                        </div>
                    </div>
                    {theme == "dark"?
                        <motion.button 
                            whileHover={{ scale:1.1 }}
                            whileTap={{ scale:0.9 }}
                            className="rounded-lg py-1.5 px-2 bg-gray-500" onClick={()=>setTheme('light')}
                        >
                            <BiMoon size={20}/>
                    </motion.button>
                        :
                        <motion.button 
                            whileHover={{ scale:1.1 }}
                            whileTap={{ scale:0.9 }}
                            className="rounded-lg py-1.5 px-2 bg-gray-200 " onClick={()=>setTheme('dark')}
                        >
                            <BiSun size={20}/>
                        </motion.button>
                    }
                </div>
            </div>
            <div className="sm:hidden flex flex-col w-full">
                <div className="flex justify-between w-full">
                    { mobileOpen?
                        <button onClick={() => setMobileOpen(false)}>
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                        </button>
                        :
                        <button onClick={() => setMobileOpen(true)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    }
                    <div>
                        <Link href="/" className="text-2xl font-semibold flex">
                            <div className="font-extrabold text-blue-400 dark:text-purple-600">
                                &gt;_
                            </div>
                            agowda
                        </Link>
                    </div>
                    {theme == "light"?
                            <motion.button 
                                whileTap={{ scale:0.9 }}
                                className="rounded-lg py-1.5 px-2 bg-gray-200 " onClick={()=>setTheme('dark')}
                            >
                                <BiSun size={20}/>
                            </motion.button>
                            :
                            <motion.button 
                                whileTap={{ scale:0.9 }}
                                className="rounded-lg py-1.5 px-2 bg-gray-500" onClick={()=>setTheme('light')}
                            >
                                <BiMoon size={20}/>
                            </motion.button>
                        }
                </div>
                <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
                    <motion.div 
                        className="absolute px-4 pt-2 pb-3 mt-5 bg-[#2e2e2e] w-[calc(100vw-20vw)] rounded-b-lg"
                        initial={{ y:-10 }}
                        whileInView={{ y:0 }}
                        exit={{ y:-10 }}
                    >
                        <div className="space-y-4">
                            <motion.div initial={{ opacity:0, x:10 }} whileInView={{ opacity:1, x:0 }}>
                                <Link href="/portfolio" className="font-semibold hover:text-gray-300" onClick={() => setMobileOpen(false)}>Portfolio</Link>
                            </motion.div>
                            <motion.div initial={{ opacity:0, x:10 }} whileInView={{ opacity:1, x:0 }} transition={{delay:0.1}}>
                                <Link href="/blog" className="font-semibold hover:text-gray-300" onClick={() => setMobileOpen(false)}>Blog</Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}