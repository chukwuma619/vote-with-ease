
export default function PositionCreatePage() {

    
    return (
        <>

            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
                <h1 className="text-gray-900 text-2xl font-bold leading-none">Create Position</h1>

                <form className="space-y-5 w-full shadow md:max-w-[60%] rounded-lg border p-4">
                    <div className="space-y-2">
                        <label htmlFor="election-position" className="block text-sm font-medium leading-6 text-gray-900">Position name</label>
                        <div className="relative shadow-sm">
                            <input type="text" name="election-posotion" id="election-posotion" autoFocus className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter election title" />
                        </div>

                    </div>

                    <div className="w-full flex justify-end items-center">
                        <button type="submit" className="inline-flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none bg-green-700 hover:bg-green-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-green-600 py-2.5 px-7 text-sm rounded-lg">
                            Create
                        </button>
                    </div>

                </form>



            </div>
        </>
    )
}