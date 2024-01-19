import Link from "next/link"
export default function ElectionPage() {
    return (
        <>
            <div className="h-full w-full flex flex-col p-4 gap-3 justify-start items-start">
                <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-gray-900 text-2xl mt-4 font-bold leading-none">Positions</h1>
                        <Link href={'#'} className="py-2 px-3 rounded-lg inline-flex text-sm items-center justify-center text-white gap-3 font-medium bg-green-700 hover:bg-green-600">Create</Link>
                    </div>
                    <hr className="mt-2" />
                </div>

                <table className="min-w-full divide-y">
                    <thead>
                        <tr className="font-medium text-sm text-left">
                            <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">Name</th>
                            <th scope="col" className="py-3.5 px-3 md:pl-0 md:table-cell">Code</th>
                            <th scope="col" className="py-3.5 px-3 md:pl-0">No. of Positions</th>
                            <th scope="col" className="py-3.5 px-3 md:pl-0">Start date/time</th>
                            <th scope="col" className="py-3.5 px-3 md:pl-0">End date/time</th>
                            <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr className="text-left">
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">2021/2022 SUG Elections</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">0SE346</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">5</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30AM</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30PM</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <a href="#" className="text-green-700">Edit
                                    <span className="sr-only">, Lindsay Walton</span>
                                </a>
                            </td>
                        </tr>
                        <tr className="text-left">
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">2021/2022 SUG Elections</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">0SE346</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">5</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30AM</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30PM</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <a href="#" className="text-green-700">Edit
                                    <span className="sr-only">, Lindsay Walton</span>
                                </a>
                            </td>
                        </tr>
                        <tr className="text-left">
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">2021/2022 SUG Elections</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">0SE346</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">5</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30AM</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30PM</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <a href="#" className="text-green-700">Edit
                                    <span className="sr-only">, Lindsay Walton</span>
                                </a>
                            </td>
                        </tr>
                        <tr className="text-left">
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">2021/2022 SUG Elections</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">0SE346</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">5</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30AM</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30PM</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <a href="#" className="text-green-700">Edit
                                    <span className="sr-only">, Lindsay Walton</span>
                                </a>
                            </td>
                        </tr>

                        <tr className="text-left">
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">2021/2022 SUG Elections</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">0SE346</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">5</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30AM</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30PM</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <a href="#" className="text-green-700">Edit
                                    <span className="sr-only">, Lindsay Walton</span>
                                </a>
                            </td>
                        </tr>
                        <tr className="text-left">
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">2021/2022 SUG Elections</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">0SE346</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">5</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30AM</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30PM</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <a href="#" className="text-green-700">Edit
                                    <span className="sr-only">, Lindsay Walton</span>
                                </a>
                            </td>
                        </tr>
                        <tr className="text-left">
                            <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">2021/2022 SUG Elections</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">0SE346</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">5</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30AM</td>
                            <td className="text-nowrap text-sm  pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">2021/12/1 12:30PM</td>
                            <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                                <a href="#" className="text-green-700">Edit
                                    <span className="sr-only">, Lindsay Walton</span>
                                </a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}