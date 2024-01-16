'use client';

import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import DefaultNavbar from "@/components/navbar";
export default function ResultLayout({ children,
}: {
    children: React.ReactNode
}) {

    const router = useRouter()

    return (
        <>
           <DefaultNavbar />
            <div className="container mx-auto mt-8 px-4 relative">
                <button onClick={() => { router.back() }} aria-label="Go back" className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-gary-800/5 ring-1 ring-gray-900/5 transition">
                    <IoArrowBackOutline className="h-4 w-4 stroke-gray-500 transition group-hover:stroke-gray-700" />
                </button>

                {children}

            </div>
        </>
    )
}