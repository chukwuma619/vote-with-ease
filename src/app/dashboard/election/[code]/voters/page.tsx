import Link from "next/link"
import { FaPencil, FaTrash, FaEye, FaUser } from "react-icons/fa6";

export default function AllVotersPage() {
    return (
        <>
            <div className="h-full w-full flex flex-col p-4 gap-3 justify-start items-start">
                <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-gray-900 text-2xl mt-4 font-bold leading-none">Eligible Voters</h1>
                        <Link href={'/dashboard/election/123456/voters/create'} className="py-2 px-5 rounded-lg inline-flex text-sm items-center justify-center text-white gap-3 font-medium bg-green-700 hover:bg-green-600">Add</Link>
                    </div>
                    <hr className="mt-2" />
                </div>

                <table className="min-w-full divide-y">
                    <thead>
                        <tr className="font-medium text-sm text-left">
                            <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">Email</th>
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
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">chukwuma@email.com</td>

                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <Link href="/dashboard/election/123456/voters/123/edit" className="text-blue-700">
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
        </>
    )
}