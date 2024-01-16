import Link from "next/link"
import { IoMenu } from "react-icons/io5";

export default function DashboardHome() {

    return (
        <>
            <header className="shadow py-2 lg:hidden">
                <nav className="flex justify-between items-center container mx-auto px-4">
                    <Link href={'/'} className="font-semibold text-2xl">Vote<span className="text-green-700">Ease</span></Link>

                    <button className="p-2.5">
                        <span className="sr-only">Open Sidebar</span>
                        <IoMenu className="w-6 h-6" />
                    </button>
                </nav>
            </header>

            <div>
                <aside className=" w-72 flex flex-col bg-white z-50 justify-between inset-y-0 fixed min-h-svh border p-6">
                    <nav className="space-y-8">
                        <Link href={'/'} className="font-semibold text-2xl">Vote<span className="text-green-700">Ease</span></Link>
                        <ul className="flex flex-col gap-3">
                            <li><Link href={'#'} className="text-sm font-medium rounded-md p-2 flex hover:bg-gray-100 bg-gray-100">Home</Link></li>
                            <li><Link href={'#'} className="text-sm font-medium rounded-md p-2 flex hover:bg-gray-100">Analytics</Link></li>
                            <li><Link href={'#'} className="text-sm font-medium rounded-md p-2 flex hover:bg-gray-100">Election</Link></li>
                            <li><Link href={'#'} className="text-sm font-medium rounded-md p-2 flex hover:bg-gray-100">Vote</Link></li>
                            <li><Link href={'#'} className="text-sm font-medium rounded-md p-2 flex hover:bg-gray-100">Result</Link></li>
                        </ul>
                    </nav>
                    <button className="text-sm font-medium rounded-md p-2 flex hover:bg-gray-100">
                        Logout
                    </button>

                </aside>
                <main className="pl-72 p-10 bg-gray-50 h-full relative">
                    <div className="md:p-6 lg:p-8">
                        <div className="rounded-md border min-h-96 h-full">

                            <div className="h-full w-full flex justify-center items-center">
                                <h1 className="text-gray-900 text-3xl font-bold leading-none">Where do you want to start?</h1>
                                <div className="flex gap-5">
                                    <button>
                                        <span className="sr-only">Create an Election</span>
                                    </button>

                                    <button>
                                        <span className="sr-only">Vote</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>

        </>
    )
}