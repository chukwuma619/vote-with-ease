import Link from "next/link";
import Image from "next/image";
export default function PositionPage() {

    return (

        <>
            <div className="h-full w-full flex flex-col  gap-3 justify-start items-start">
                <h1 className="text-gray-900 text-2xl font-bold leading-none">Choose your President</h1>
                <form className="flex flex-col md:flex-row flex-wrap w-full mt-4 gap-6">
                    <label htmlFor="1" className="flex p-4 bg-gray-50 border border-gray-200 md:min-w-96 shadow rounded-lg justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <div className="inline-flex items-center justify-center text-center relative rounded">
                                <Image src={'/Images/profile-image.jpeg'} alt="profile-image" className="rounded" height={80} width={80} />

                            </div>
                            <div>
                                <h2 className="text-base font-semibold">Chukwuma Ebube</h2>
                                <p className="text-sm text-gray-500">Computer Science</p>
                            </div>
                        </div>
                        <input type="radio" name="pres" id="1" className="w w-6 h-6 accent-green-700" />
                    </label>

                    <label htmlFor="2" className="flex p-4 bg-gray-50 border border-gray-200 md:min-w-96 shadow rounded-lg justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <div className="inline-flex items-center justify-center text-center relative rounded">
                                <Image src={'/Images/profile-image.jpeg'} alt="profile-image" className="rounded" height={80} width={80} />

                            </div>
                            <div>
                                <h2 className="text-base font-semibold">Chukwuma Ebube</h2>
                                <p className="text-sm text-gray-500">Computer Science</p>
                            </div>
                        </div>
                        <input type="radio" name="pres" id="2" className="w w-6 h-6 accent-green-700" />
                    </label>

                    <label htmlFor="3" className="flex p-4 bg-gray-50 border border-gray-200 md:min-w-96 shadow rounded-lg justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <div className="inline-flex items-center justify-center text-center relative rounded">
                                <Image src={'/Images/profile-image.jpeg'} alt="profile-image" className="rounded" height={80} width={80} />

                            </div>
                            <div>
                                <h2 className="text-base font-semibold">Chukwuma Ebube</h2>
                                <p className="text-sm text-gray-500">Computer Science</p>
                            </div>
                        </div>
                        <input type="radio" name="pres" id="3" className="w w-6 h-6 accent-green-700" />
                    </label>

                    <label htmlFor="4" className="flex p-4 bg-gray-50 border border-gray-200 md:min-w-96 shadow rounded-lg justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <div className="inline-flex items-center justify-center text-center relative rounded">
                                <Image src={'/Images/profile-image.jpeg'} alt="profile-image" className="rounded" height={80} width={80} />

                            </div>
                            <div>
                                <h2 className="text-base font-semibold">Chukwuma Ebube</h2>
                                <p className="text-sm text-gray-500">Computer Science</p>
                            </div>
                        </div>
                        <input type="radio" name="pres" id="4" className="w w-6 h-6 accent-green-700" />
                    </label>

                    <div className="w-full flex justify-end items-center">
                        <button type="submit" className="inline-flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none bg-green-700 hover:bg-green-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-green-600 py-2.5 px-7 text-sm rounded-lg">
                            Vote Candidate
                        </button>
                    </div>


                </form>
            </div>
        </>
    )
}