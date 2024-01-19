
export default function CandidateCreatePage() {


    return (
        <>

            <div className="h-full w-full flex flex-col p-4 gap-3 justify-start items-start">
                <h1 className="text-gray-900 text-2xl mt-4 font-bold leading-none">Create Candidate</h1>

                <form className="space-y-5 w-full shadow max-w-[60%] rounded-lg border p-4">
                    <div className="space-y-2">
                        <label htmlFor="candidate-name" className="block text-sm font-medium leading-6 text-gray-900">Candidate name</label>
                        <div className="relative shadow-sm">
                            <input type="text" name="candidate-name" id="candidate-name" autoFocus className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter candidate name" />
                        </div>

                    </div>

                    <div className="space-y-2">
                        <label htmlFor="candidate-dept" className="block text-sm font-medium leading-6 text-gray-900">Candidate Dept.</label>
                        <div className="relative shadow-sm">
                            <input type="text" name="candidate-dept" id="candidate-dept" className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter candidate dept." />
                        </div>

                    </div>

                    <div className="space-y-2">
                        <label htmlFor="candidate-level" className="block text-sm font-medium leading-6 text-gray-900">Candidate Level</label>
                        <div className="relative shadow-sm">
                            <input type="text" name="candidate-level" id="candidate-level" className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter candidate level" />
                        </div>

                    </div>

                    <div className="space-y-2">
                        <label htmlFor="candidate-photo" className="block text-sm font-medium leading-6 text-gray-900">Candidate Photo</label>
                        <div className="relative shadow-sm">
                            <input type="file" name="candidate-photo" id="candidate-photo" accept="image/png, image/jpeg" className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" />
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