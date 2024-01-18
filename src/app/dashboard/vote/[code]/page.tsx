import Link from "next/link"

export default function ElectionPage() {
    return (
        <>

            <div className="h-full w-full flex flex-col gap-8 justify-start items-center">
                <h1 className="text-gray-900 text-3xl mt-4 font-bold leading-none">Available Position(s)</h1>
                <div className="flex flex-col md:flex-row flex-wrap w-full items-center justify-center gap-6">
                    <div className="flex p-4 shadow-md bg-gray-50 shrink-0 justify-between rounded-lg md:min-w-96 items-center">
                        <div>
                            <h2 className="text-2xl font-semibold">President</h2>
                        </div>
                        <Link href={'#'} className="py-2 px-3 md:px-5 md:py-2.5 text-xs rounded font-medium bg-green-700 hover:bg-green-600 text-white">Select</Link>
                    </div>

                    <div className="flex p-4 shadow-md bg-gray-50 shrink-0 justify-between rounded-lg md:min-w-96 items-center">
                        <div>
                            <h2 className="text-2xl font-semibold">Secretary</h2>
                        </div>
                        <Link href={'#'} className="py-2 px-3 md:px-5 md:py-2.5 text-xs rounded font-medium bg-green-700 hover:bg-green-600 text-white">Select</Link>
                    </div>

                    <div className="flex p-4 shadow-md bg-gray-50 shrink-0 justify-between rounded-lg md:min-w-96 items-center">
                        <div>
                            <h2 className="text-2xl font-semibold">Vice President</h2>
                        </div>
                        <Link href={'#'} className="py-2 px-3 md:px-5 md:py-2.5 text-xs rounded font-medium bg-green-700 hover:bg-green-600 text-white">Select</Link>
                    </div>

                    
                </div>
            </div>
        </>
    )
}