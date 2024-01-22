import Link from "next/link";

export default function LoginPage() {
    return (
        <>
            <h1 className="text-gray-900 text-2xl font-bold">Log in</h1>
            <form className="space-y-5">
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="relative shadow-sm">
                        <input type="email" name="email" id="email" autoComplete="email" autoFocus className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="name@example.com" />
                    </div>
                    {/* <p className="text-gray-500 text-sm">We&apos;ll never share your details. See our Privacy Policy.</p> */}
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Paswword</label>
                    <div className="relative shadow-sm">
                        <input type="password" name="password" id="password" autoComplete="current-password" className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="••••••••••" />
                    </div>
                    {/* <p className="text-gray-500 text-sm">We&apos;ll never share your details. See our Privacy Policy.</p> */}
                </div>

                <div className="flex justify-end">
                    <Link href={'#'} className="font-medium text-sm text-blue-600" >Forgot password?</Link>
                </div>

                <button className="flex w-full items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none bg-blue-700 hover:bg-blue-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-blue-600 py-2.5 px-5 text-sm rounded-lg">
                    Sign in
                </button>

                <p className="text-gray-900 text-sm font-medium">Already have an account? <Link href={"#"} className="text-blue-600">Sign up</Link></p>
            </form>
        </>
    )
}