'use client';
import Link from "next/link";
import { FaPencil, FaTrash, FaEye } from "react-icons/fa6";
import Header from "@/app/dashboard/components/header";
export default function PositionPage() {

    return (
        <>

            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
                
                <Header heading_text="Positions" buttton_text="Create" href={'/dashboard/election/123456/position/create'} />
                <table className="min-w-full divide-y">
                    <thead>
                        <tr className="font-medium text-sm text-left">
                            <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">Name</th>
                            <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
                                <span className="sr-only">Position</span>
                            </th>
                            <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        
                        <tr className="text-left">
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">Director of Humanitarian affairs</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <Link href="/dashboard/election/123456/position/Director of Humanitarian affairs/candidate" className="text-green-700">
                                    <span className="sr-only">View Position</span>
                                    <FaEye />
                                </Link>
                            </td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <Link href="/dashboard/election/123456/position/Director of Humanitarian affairs/edit" className="text-blue-700">
                                    <span className="sr-only">Edit</span>
                                    <FaPencil />
                                </Link>
                            </td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <Link href="#" className="text-red-500">
                                    <span className="sr-only">Delete</span>
                                    <FaTrash  />
                                </Link>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </>
    )
}