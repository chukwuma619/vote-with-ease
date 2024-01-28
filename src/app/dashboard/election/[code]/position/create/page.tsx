'use client';

import { useFormState } from "react-dom";
import { createPosition } from "@/actions/position";
import { FaCircleExclamation } from "react-icons/fa6";
import { FormButton } from "@/components/button";

export default function PositionCreatePage({ params }: { params: { code: string } }) {
    const createPositionWithUniqueCode = createPosition.bind(null, params.code)
    const initialState = { message: undefined, errors: {} };
    const [errorMessage, dispatch] = useFormState(createPositionWithUniqueCode, initialState)


    return (
        <>
            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
                <h1 className="text-gray-900 text-2xl font-bold leading-none">Create Position</h1>
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
                <form action={dispatch} className="space-y-5 w-full shadow md:max-w-[60%] rounded-lg border p-4">
                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Position name</label>
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