'use client';
import Link from "next/link"
import { IoArrowBackOutline, IoMenu } from "react-icons/io5";
import { useRouter } from "next/navigation";
export default function ResultLayout({ children,
}: {
    children: React.ReactNode
}) {

    const router = useRouter()

    return (
        <><header className="shadow py-2 lg:hidden">
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
                    <button className="text-sm font-medium text-red-500 rounded-md p-2 flex hover:bg-gray-100">
                        Logout
                    </button>

                </aside>
                <main className="pl-72 p-10 bg-gray-50  min-h-svh relative">
                    <button onClick={() => { router.back() }} aria-label="Go back" className="group ml-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-gary-800/5 ring-1 ring-gray-900/5 transition">
                        <IoArrowBackOutline className="h-4 w-4 stroke-gray-500 transition group-hover:stroke-gray-700" />
                    </button>
                    <div className="md:p-6 lg:p-8">
                        <div className="rounded-md border min-h-[65svh] flex py-4 h-full">

                            {children}
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}