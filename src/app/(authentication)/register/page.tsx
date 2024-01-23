'use client'
import Link from "next/link";
import { FaCircleExclamation } from "react-icons/fa6";
import { useFormState } from "react-dom";
import { signUpUser } from "@/lib/actions/auth";
import { FormButton } from "@/components/button";
export default function RegisterPage() {
    const initialState = { message: undefined, errors: {} };
    const [errorMessage, dispatch] = useFormState(signUpUser, initialState);
    return (
        <>
            <h1 className="text-gray-900 text-2xl font-bold">Create your Free Account</h1>

            {errorMessage?.message && (
                <>
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true">
                        <FaCircleExclamation className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{errorMessage.message}</p>

                    </div>
                </>
            )}

            <form className="space-y-5" action={dispatch} >
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div className="relative shadow-sm">
                        <input type="text" name="name" id="name" autoComplete="name" autoFocus className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" required placeholder="John Doe" />
                    </div>
                    <div aria-live="polite" aria-atomic="true" className="space-y-2">
                        {errorMessage?.errors?.name && errorMessage.errors.name.map((msg, index) => {
                            return (
                                <p key={index} className="text-red-500 text-sm">{msg}</p>
                            )
                        })}
                    </div>

                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="relative shadow-sm">
                        <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" required placeholder="name@example.com" />
                    </div>

                    <div aria-live="polite" aria-atomic="true" className="space-y-2">
                        {errorMessage?.errors?.email && errorMessage.errors.email.map((msg, index) => {
                            return (
                                <p key={index} className="text-red-500 text-sm">{msg}</p>
                            )
                        })}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Paswword</label>
                    <div className="relative shadow-sm">
                        <input type="password" name="password" id="password" autoComplete="new-password" className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" required placeholder="••••••••••" />
                    </div>
                    <div aria-live="polite" aria-atomic="true" className="space-y-2">
                        {errorMessage?.errors?.password && errorMessage.errors.password.map((msg, index) => {
                            return (
                                <p key={index} className="text-red-500 text-sm">{msg}</p>
                            )
                        })}
                    </div>
                </div>

                <FormButton>
                    Create account
                </FormButton>

                <p className="text-gray-900 text-sm font-medium">Already have an account? <Link href={"#"} className="text-green-600">Sign in</Link></p>
            </form>
        </>
    )
}