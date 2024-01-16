import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
export default function Search() {

    return (
        <>
            <h1 className="text-gray-900 text-3xl font-bold leading-none">Check Result</h1>
            <div className="flex flex-col mt-8 space-y-6">
                <form action="" method="get" className="flex gap-1.5">
                    <div className="relative rounded-lg border border-gray-300 has-[:focus]:border-green-600 has-[:focus]:border-2">
                        <input aria-label="Search for an election" type="search" name="query" id="query" className="block w-full rounded-lg border-0 pl-12 pr-4 py-3 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter code here" />
                        <div className="inset-y-0 absolute rounded-s-lg flex items-center justify-center h-full p-4 bg-gray-100">
                            <p className="text-base font-medium">#</p>
                        </div>
                    </div>
                    <button type="submit" className="py-2.5 px-5 rounded-lg inline-flex items-center justify-center text-white gap-3 font-medium bg-green-700 hover:bg-green-600">Search</button>
                </form>

                <div className="flex p-4 shadow-md gap-3 bg-gray-50 rounded-lg justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold">2022/2023 SUG Election</h2>
                        <p className="text-sm font-medium text-gray-600">Total Position(s): <span className="font-normal">4</span></p>
                    </div>
                    <Link href={'#'} className="py-2 px-3 text-xs inline-flex shrink-0 items-center justify-center rounded font-medium bg-green-700 hover:bg-green-600 text-white">View result</Link>
                </div>
            </div>
        </>
    )
}