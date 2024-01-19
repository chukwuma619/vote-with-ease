'use client';
import Link from "next/link";
import Image from "next/image";
import { FaPencil, FaTrash } from "react-icons/fa6";

export default function CandidataePage() {
    
    return (
        <>
            <div className="h-full w-full flex flex-col p-4 gap-3 justify-start items-start">
            <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-gray-900 text-2xl mt-4 font-bold leading-none">Candidates</h1>
                        <Link href={'/dashboard/election/123456/position/Director of Humanitarian affairs/candidate/create'}  className="py-2 px-5 rounded-lg inline-flex text-sm items-center justify-center text-white gap-3 font-medium bg-green-700 hover:bg-green-600">Create</Link>
                    </div>
                    <hr className="mt-2" />
                </div>

                
                <table className="min-w-full divide-y">
                    <thead>
                        <tr className="font-medium text-sm text-left">
                            <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">Photo</th>
                            <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">Name</th>
                            <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">Dept</th>
                            <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">Level</th>
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
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">
                                <Image src={'/Images/profile-image.jpeg'} width={48} height={48} className="rounded-md" alt="profile-iamge" />
                            </td>
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">President</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">Computer Science</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">100L</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <Link href="/dashboard/election/123456/position/Director of Humanitarian affairs/candidate/1/edit" className="text-blue-700">
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