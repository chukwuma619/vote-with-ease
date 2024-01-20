import Link from "next/link"
import { FaPencil, FaTrash, FaEye, FaUser } from "react-icons/fa6";
import Header from "../components/header";

export default function AllElectionPage() {
    return (
        <>
            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
                <Header heading_text="Elections" buttton_text="Create" href={'/dashboard/election/create'} />

                <div className=" overflow-x-auto relative w-full">
                    <table className="min-w-full divide-y w-full ">
                        <thead>
                            <tr className="font-medium text-sm text-left">
                                <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">Name</th>
                                <th scope="col" className="py-3.5 px-3 md:pl-0 md:table-cell">Code</th>
                                <th scope="col" className="py-3.5 px-3 md:pl-0 md:table-cell">Status</th>
                                <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
                                    <span className="sr-only">Positions</span>
                                </th>
                                <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
                                    <span className="sr-only">Eligible Voters</span>
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
                                <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">2021/2022 SUG Elections</td>
                                <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">0SE346</td>
                                <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">Pending</td>
                                <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                    <Link href="/dashboard/election/123456/voters" className="text-green-700">
                                        <span className="sr-only">View Position</span>
                                        <FaUser />
                                    </Link>
                                </td>
                                <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                    <Link href="/dashboard/election/123456/position" className="text-green-700">
                                        <span className="sr-only">View Position</span>
                                        <FaEye />
                                    </Link>
                                </td>
                                <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                    <Link href="/dashboard/election/123456/edit" className="text-blue-700">
                                        <span className="sr-only">Edit</span>
                                        <FaPencil />
                                    </Link>
                                </td>
                                <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                    <Link href="#" className="text-red-500">
                                        <span className="sr-only">Delete</span>
                                        <FaTrash />
                                    </Link>
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}