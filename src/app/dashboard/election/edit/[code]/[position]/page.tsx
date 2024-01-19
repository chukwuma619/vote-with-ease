'use client';
import Link from "next/link";
import { useRef, MouseEvent } from "react";
import Image from "next/image";

export default function EditPositionPage() {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    function handleOpenDialog() {
        dialogRef.current?.showModal()
    }

    function handleSubmitDialog(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        dialogRef.current?.close()
    }
    return (
        <>
            <div className="h-full w-full flex flex-col p-4 gap-3 justify-start items-start">
                <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-gray-900 text-2xl mt-4 font-bold leading-none">Candidate</h1>


                        <button onClick={handleOpenDialog} className="py-2 px-3 rounded-lg inline-flex text-sm items-center justify-center text-white gap-3 font-medium bg-green-700 hover:bg-green-600">Add</button>
                    </div>
                    <hr className="mt-2" />
                </div>

                <dialog ref={dialogRef} className="w-full max-w-[28rem] p-4 md:p-8 bg-white rounded-lg shadow space-y-5">
                    <form className="space-y-5 w-full rounded-lg border p-4 h-full">
                        <div className="space-y-2">
                            <label htmlFor="candidate-name" className="block text-sm font-medium leading-6 text-gray-900">Candidate name</label>
                            <div className="relative shadow-sm">
                                <input type="text" name="candidate-name" id="candidate-name" autoFocus className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter candidate name" />
                            </div>

                        </div>

                        <div className="space-y-2">
                            <label htmlFor="candidate-dept" className="block text-sm font-medium leading-6 text-gray-900">Candidate Dept.</label>
                            <div className="relative shadow-sm">
                                <input type="text" name="candidate-dept" id="candidate-dept" className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Ente candidate dept." />
                            </div>

                        </div>

                        <div className="space-y-2">
                            <label htmlFor="candidate-photo" className="block text-sm font-medium leading-6 text-gray-900">Candidate Photo</label>
                            <div className="relative shadow-sm">
                                <input type="file" name="candidate-photo" id="candidate-photo" accept="image/png, image/jpeg" className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" />
                            </div>

                        </div>

                        <div className="w-full flex gap-5">
                            <button type="submit" onClick={(event) => { handleSubmitDialog(event) }} className="inline-flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none bg-green-700 hover:bg-green-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-green-600 w-20 h-10 text-sm rounded-lg">
                                Add
                            </button>

                            <button value="cancel" formMethod="dialog" className="inline-flex text-green-700 border-green-700 items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 w-20 h-10 text-sm rounded-lg">
                                Cancel
                            </button>
                        </div>


                    </form>

                </dialog>


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
                                <Link href="#" className="py-2 px-3.5 bg-green-700 hover:bg-green-600 rounded-lg text-white">Edit
                                    <span className="sr-only">, Lindsay Walton</span>
                                </Link>
                            </td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <Link href="#" className="text-red-700">Delete
                                    <span className="sr-only">, Lindsay Walton</span>
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}