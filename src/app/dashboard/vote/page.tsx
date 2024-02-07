"use client";
import { FormButton } from "@/components/button";
import { fetchSingleElection, validatedElection } from "@/data/election";
import Link from "next/link";
import { useFormState } from "react-dom";
import { FaCircleExclamation } from "react-icons/fa6";

export default function VotePage() {
  const initialState = { message: undefined, errors: {} };
  const [errorMessage, dispatch] = useFormState(
    validatedElection,
    initialState
  );
  return (
    <>
      <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
        <h1 className="text-gray-900 text-2xl font-bold leading-none">
          Cast your vote
        </h1>

        {errorMessage?.message && (
          <>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              <FaCircleExclamation className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage.message}</p>
            </div>
          </>
        )}
        <form
          action={dispatch}
          className="space-y-5 w-full shadow md:max-w-[60%] rounded-lg border p-4"
        >
          <div className="relative rounded-lg border border-gray-300 has-[:focus]:border-green-600 has-[:focus]:border-2">
            <input
              aria-label="Search for an election"
              type="search"
              name="title"
              id="title"
              className="block w-full rounded-lg lg:min-w-96 border-0 pl-12 pr-4 py-3 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 focus-visible:outline-none"
              placeholder="Enter code here"
            />

            <div aria-live="polite" aria-atomic="true" className="space-y-2">
              {errorMessage?.errors?.title &&
                errorMessage.errors.title.map((msg, index) => {
                  return (
                    <p key={index} className="text-red-500 text-sm">
                      {msg}
                    </p>
                  );
                })}
            </div>
            <div className="inset-y-0 absolute rounded-s-lg flex items-center justify-center h-full p-4 bg-gray-100">
              <p className="text-base font-medium">#</p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <FormButton className="!w-fit !text-sm font-medium">
              Enter
            </FormButton>
          </div>
        </form>
      </div>
    </>
  );
}
