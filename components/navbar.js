import React, {useState} from 'react'
import Link from 'next/link'

export default function Navbar() {

    return (
        <nav className="top-2 lg:top-10 flex justify-between max-[950px]:justify-center absolute w-full max-w-[80vw] ml-[10vw]">
            <Link className="flex text-2xl font-bold" href="/">
                <div className="text-sky-400">
                    &gt;_
                </div>
                agowda
            </Link>

            <div className="text-base flex space-x-10 my-auto text-lg mr-10 max-[950px]:hidden">
                <Link className="hover:text-sky-300" href="/">Home</Link>
                <Link className="hover:text-sky-300" href="/#about">About</Link>
                <Link className="hover:text-sky-300" href="/portfolio">Portfolio</Link>
                <Link className="hover:text-sky-300" href="/shelf">Shelf</Link>
                <Link className="hover:text-sky-300" href="/#contact">Contact</Link>
            </div>
        </nav>
    )
}