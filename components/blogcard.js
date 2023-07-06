import Link from "next/link"

export default function BlogCard({ data }){

    return (
        <div className={`flex flex-col max-w-sm ml-10 mt-5 mr-10 p-7 bg-gray-50 rounded-md dark:bg-[#2e2e2e]`}>
            <div className="font-bold text-xl mt-3 mb-2">
                {data.title}
            </div>
            <div className="flex flex-wrap mb-2">
                {data.tags.map(
                    tag =>
                    <div className="bg-blue-400 text-white text-sm font-bold py-0.5 px-2 rounded m-1 dark:bg-purple-700 dark:text-purple-200">
                        {tag}
                    </div>
                )}
            </div>
            <div className="dark:text-gray-500">
                {data.description}
            </div>
            <div className="flex justify-between mt-2">
                <div className="text-gray-600 font-medium dark:text-gray-400">
                    {data.read} min - {data.date}
                </div> 
                <Link href={data.location} className="text-blue-500 font-medium mr-5">
                    Read →
                </Link>
            </div>
        </div>
    )
}