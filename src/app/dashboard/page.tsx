import Link from "next/link"
import { IoMenu } from "react-icons/io5";

export default function DashboardHome() {

    return (
        <>

            <div className="h-full w-full flex flex-col gap-12 justify-center items-center">
                <h1 className="text-gray-900 text-3xl mt-4 font-bold leading-none">Where do you want to start?</h1>
                <div className="flex flex-col w-full items-center justify-center md:flex-row gap-5">
                    <button className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg w-80 h-44">
                        <h2 className="text-lg font-bold">Create an Election</h2>
                        <p className="text-base text-gray-500 font-light">Use VoteEase to host an election</p>
                    </button>

                    <button className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg w-80 h-44">
                        <h2 className="text-lg font-bold">Cast your Vote</h2>
                        <p className="text-base text-gray-500 font-light">Select your prefered candidate</p>
                    </button>
                </div>
            </div>

        </>
    )
}