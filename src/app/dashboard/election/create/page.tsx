export default function CreateElection() {
    return (
        <>
            <div className="h-full w-full flex flex-col p-4 gap-3 justify-start items-start">
                <h1 className="text-gray-900 text-2xl mt-4 font-bold leading-none">Create an election</h1>
                <form className="space-y-5 w-full  max-w-[60%] rounded-lg border p-4 h-full">
                    <div className="space-y-2">
                        <label htmlFor="election-title" className="block text-sm font-medium leading-6 text-gray-900">Election title</label>
                        <div className="relative shadow-sm">
                            <input type="text" name="election-title" id="election-title" autoFocus className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter election title" />
                        </div>

                    </div>

                    <div className="space-y-2">
                        <label htmlFor="start-date" className="block text-sm font-medium leading-6 text-gray-900">Start date/time</label>
                        <div className="relative shadow-sm">
                            <input type="datetime-local" name="start-date" id="start-date" className="block accent-green-600 rounded-lg w-full border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="end-date" className="block text-sm font-medium leading-6 text-gray-900">End date/time</label>
                        <div className="relative shadow-sm">
                            <input type="datetime-local" name="end-date" id="end-date" className="block rounded-lg w-full border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" />
                        </div>
                    </div>



                    <button className="flex w-full items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none bg-green-700 hover:bg-green-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-green-600 py-2.5 px-5 text-sm rounded-lg">
                        Create
                    </button>

                </form>
            </div>
        </>
    )
}