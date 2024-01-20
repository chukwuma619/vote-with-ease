import Link from "next/link";
export default function DefaultNavbar(){

    return (

        <header className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
            <Link href={'/'} className="font-semibold text-2xl">Vote<span className="text-green-700">Ease</span></Link>

            <ul className="flex gap-0.5 text-gray-900 text-base">
                <li><Link href={'/result'} className="py-2 px-3 inline-flex justify-center items-center rounded hover:text-green-700">Results</Link></li>
                {/* <li><Link href={'/login'} className="py-2 px-3 inline-flex justify-center items-center rounded hover:text-green-700">Login</Link></li>
                <li><Link href={'/register'} className="py-2 px-3 inline-flex justify-center items-center rounded bg-green-700 text-white hover:bg-green-600">Register</Link></li> */}
            </ul>
        </nav>

    </header>
    )
}