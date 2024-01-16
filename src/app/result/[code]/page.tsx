import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

export default function Positions() {

    return (

        <>
            <h1 className="text-gray-900 text-3xl font-bold leading-none">Positions</h1>

            <div className="flex flex-col mt-8 gap-5">
                <div className="flex p-4 shadow-md bg-gray-50 rounded-lg justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">President</h2>
                        <p className="text-sm font-medium text-gray-600">Total votes: <span className="font-normal">3000</span></p>
                    </div>
                    <Link href={'#'} className="py-2 px-3 text-xs rounded font-medium bg-green-700 hover:bg-green-600 text-white">View result</Link>
                </div>

                <div className="flex p-4 shadow-md bg-gray-50 rounded-lg justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Vice President</h2>
                        <p className="text-sm font-medium text-gray-600">Total votes: <span className="font-normal">3000</span></p>
                    </div>
                    <Link href={'#'} className="py-2 px-3 text-xs rounded font-medium bg-green-700 hover:bg-green-600 text-white">View result</Link>
                </div>

                <div className="flex p-4 shadow-md bg-gray-50 rounded-lg justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Secretary</h2>
                        <p className="text-sm font-medium text-gray-600">Total votes: <span className="font-normal">3000</span></p>
                    </div>
                    <Link href={'#'} className="py-2 px-3 text-xs rounded font-medium bg-green-700 hover:bg-green-600 text-white">View result</Link>
                </div>

                <div className="flex p-4 shadow-md bg-gray-50 rounded-lg justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Tresurer</h2>
                        <p className="text-sm font-medium text-gray-600">Total votes: <span className="font-normal">3000</span></p>
                    </div>
                    <Link href={'#'} className="py-2 px-3 text-xs rounded font-medium bg-green-700 hover:bg-green-600 text-white">View result</Link>
                </div>


            </div>
        </>
    )
}