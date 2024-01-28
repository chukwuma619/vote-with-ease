'use client'
import { FormButton } from "../button";
import { useFormState } from "react-dom";
import { FaCircleExclamation } from "react-icons/fa6";
import { PositionType } from "@/types/database-subtype";
import { updatePosition } from "@/actions/position";

export default function PositionForm({ data }: { data: PositionType }) {
    const updatePositionByElectionId = updatePosition.bind(null, data.election_unique_code, data.title);
    const initialState = { message: undefined, errors: {} };
    const [errorMessage, dispatch] = useFormState(updatePositionByElectionId, initialState)
    return (
        <>

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
                        <input type="text" name="title" defaultValue={data?.title!} id="title" autoFocus className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none" placeholder="Enter election title" />
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
                        Edit
                    </FormButton>
                </div>

            </form>
        </>
    )
}