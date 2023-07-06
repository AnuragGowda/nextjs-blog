import Link from "next/link"

export default function ReadOther({ data }){
    return (
        <div className="border-2 border-gray-100 rounded w-72 mr-1 mt-3 p-3 pl-1 dark:bg-[#2e2e2e] dark:border-0">
            <div className="font-medium p-4 text-lg text-">
                OTHER POSTS:
            </div>
            <div className="flex flex-col gap-4 ml-4 mb-3">
                {data.map(blog => (
                    <div>
                        <div className="font-medium">
                            {blog.title}
                        </div>
                        <div className="dark:text-gray-500 mt-1 mb-1">
                            {blog.description}
                        </div>
                        <Link href={blog.location} className="text-blue-500 font-medium u dark:text-purple-500">
                            Read in {blog.read} minutes
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}