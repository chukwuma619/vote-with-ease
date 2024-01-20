import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"
type HeaderType = {
    heading_text: string,
    buttton_text: string,
    href: Url,
}
export default function Header({ heading_text, buttton_text, href }: HeaderType) {
    return (
        <>

            <div className="w-full">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-gray-900 text-2xl font-bold leading-none">{heading_text}</h1>
                    <Link href={href} className="py-2 px-5 rounded-lg inline-flex text-sm items-center justify-center text-white gap-3 font-medium bg-green-700 hover:bg-green-600">{buttton_text}</Link>
                </div>
                <hr className="mt-2" />
            </div>

        </>
    )
}