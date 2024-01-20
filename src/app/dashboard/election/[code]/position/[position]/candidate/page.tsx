'use client';
import Link from "next/link";
import Image from "next/image";
import { FaPencil, FaTrash } from "react-icons/fa6";
import Header from "@/app/dashboard/components/header";

export default function CandidataePage() {

    return (
        <>
            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">

                <Header heading_text="Candidate" buttton_text="Create" href={'/dashboard/election/123456/position/Director of Humanitarian affairs/candidate/create'} />

                <div className="w-full overflow-x-auto">
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