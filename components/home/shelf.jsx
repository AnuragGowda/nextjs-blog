import Link from 'next/link'
import data from '../../data/data.json'
import BlogCard from '../blog_components/blogcard'

export default function Blog(){
    return (
        <div className="flex flex-col w-[90vw] mx-auto min-h-screen mt-20">
            <h1 className="text-center ">
                My Shelf
            </h1>
            <h6 className="text-center text-slate-600">
                Some stuff I've written about recently
            </h6>
            <div className="flex flex-col justify-between w-full pt-10">
                <div className="gap-4 flex flex-col sm:flex-row mx-auto items-center w-full justify-between max-w-4xl">
                    <div className="flex flex-col">
                        <div className="text-lg text-center mb-2">
                            Recent Web Post
                        </div>
                        <BlogCard data={data["blogs"][0]} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg text-center mb-2">
                            Recent ML Post
                        </div>
                        <div className="text-sm">
                            <BlogCard data={data["blogs"][5]} />
                        </div>
                    </div>
                </div>
                <Link href="/shelf" className="text-center mx-auto mt-10 rounded p-2 bg-blue-400 hover:bg-blue-500 text-white md:w-1/3 max-w-sm">
                    View Shelf
                </Link>
            </div>
        </div>
    )
}