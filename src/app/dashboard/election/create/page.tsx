'use client'
import { FaCircleExclamation } from "react-icons/fa6"
import { useFormState } from "react-dom"
import { creatElection } from "@/lib/actions/election"
import { FormButton } from "@/components/button";
import { convertDateFormat } from "@/lib/utils";
export default function CreateElection() {
    const initialState = { message: undefined, errors: {} };
    const [errorMessage, dispatch] = useFormState(creatElection, initialState)

    const now = convertDateFormat(new Date().toISOString()) 
    
    return (
        <>
            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
                <h1 className="text-gray-900 text-2xl font-bold leading-none">Create an election</h1>

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
                <form className="space-y-5 w-full shadow md:max-w-[60%] rounded-lg border p-4" action={dispatch}>
                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Election title</label>
                        <div className="relative shadow-sm">
                            <input type="text" name="title" id="title" autoFocus className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter election title" />
                        </div>
                        <div aria-live="polite" aria-atomic="true" className="space-y-2">
                            {errorMessage?.errors?.title && errorMessage.errors.title.map((msg, index) => {
                                return (
                                    <p key={index} className="text-red-500 text-sm">{msg}</p>
                                )
                            })}
                        </div>

                    </div>

                    <div className="space-y-2">
                        <label htmlFor="start_date" className="block text-sm font-medium leading-6 text-gray-900">Start date/time</label>
                        <div className="relative shadow-sm">
                            <input type="datetime-local" name="start_date" min={now} id="start_date" className="block accent-green-600 rounded-lg w-full border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" />
                        </div>
                        <div aria-live="polite" aria-atomic="true" className="space-y-2">
                            {errorMessage?.errors?.start_date && errorMessage.errors.start_date.map((msg, index) => {
                                return (
                                    <p key={index} className="text-red-500 text-sm">{msg}</p>
                                )
                            })}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="end_date" className="block text-sm font-medium leading-6 text-gray-900">End date/time</label>
                        <div className="relative shadow-sm">
                            <input type="datetime-local" min={now} name="end_date" id="end_date" className="block rounded-lg w-full border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" />
                        </div>
                        <div aria-live="polite" aria-atomic="true" className="space-y-2">
                            {errorMessage?.errors?.end_date && errorMessage.errors.end_date.map((msg, index) => {
                                return (
                                    <p key={index} className="text-red-500 text-sm">{msg}</p>
                                )
                            })}
                        </div>
                    </div>



                    <div className="w-full flex justify-end items-center">
                        <FormButton>
                            Create
                        </FormButton>

                    </div>

                </form>
            </div>
        </>
    )
}