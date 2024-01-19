import Link from "next/link"
export default function VotePage() {
    return (
        <>

            <div className="h-full w-full flex flex-col p-4 gap-3 justify-start items-start">
                <h1 className="text-gray-900 text-2xl mt-4 font-bold leading-none">Cast your vote</h1>
                <form action="" method="get" className="space-y-5 w-full shadow max-w-[60%] rounded-lg border p-4">
                    <div className="relative rounded-lg border border-gray-300 has-[:focus]:border-green-600 has-[:focus]:border-2">
                        <input aria-label="Search for an election" type="search" name="query" id="query" className="block w-full rounded-lg lg:min-w-96 border-0 pl-12 pr-4 py-3 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter code here" />
                        <div className="inset-y-0 absolute rounded-s-lg flex items-center justify-center h-full p-4 bg-gray-100">
                            <p className="text-base font-medium">#</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-center">
                        <button type="submit" className="inline-flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none bg-green-700 hover:bg-green-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-green-600 py-2.5 px-7 text-sm rounded-lg">
                           Enter
                        </button>
                    </div>

                </form>
            </div>

        </>
    )
}