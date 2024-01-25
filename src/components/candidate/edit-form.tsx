"use client";
import { FormButton } from "@/components/button";
import { updateCandidate } from "@/lib/actions/candidate";
import { CandidateType } from "@/types/database-subtype";
import { useFormState } from "react-dom";
import { FaCircleExclamation } from "react-icons/fa6";
export default function CandidateEditForm({
  data,
  unique_code,
  pos_title,
  cand_name,
}: {
  data: CandidateType | undefined;
  unique_code: string;
  pos_title: string;
  cand_name: string;
}) {
  const initialState = { message: undefined, errors: {} };
  const updateCandidateWithDetails = updateCandidate.bind(
    null,
    unique_code,
    pos_title,
    cand_name
  );
  const [errorMessage, dispatch] = useFormState(
    updateCandidateWithDetails,
    initialState
  );

  return (
    <>
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
        className="space-y-5 w-full shadow max-w-[60%] rounded-lg border p-4"
        action={dispatch}
      >
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Candidate name
          </label>
          <div className="relative shadow-sm">
            <input
              type="text"
              name="name"
              id="name"
              autoFocus
              defaultValue={data?.full_name}
              className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
              placeholder="Enter candidate name"
            />
          </div>
          <div aria-live="polite" aria-atomic="true" className="space-y-2">
            {errorMessage?.errors?.name &&
              errorMessage.errors.name.map((msg, index) => {
                return (
                  <p key={index} className="text-red-500 text-sm">
                    {msg}
                  </p>
                );
              })}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="dept"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Candidate Dept.
          </label>
          <div className="relative shadow-sm">
            <input
              type="text"
              name="dept"
              id="dept"
              defaultValue={data?.department}
              className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
              placeholder="Enter candidate dept."
            />
          </div>

          <div aria-live="polite" aria-atomic="true" className="space-y-2">
            {errorMessage?.errors?.dept &&
              errorMessage.errors.dept.map((msg, index) => {
                return (
                  <p key={index} className="text-red-500 text-sm">
                    {msg}
                  </p>
                );
              })}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="level"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Candidate Level
          </label>
          <div className="relative shadow-sm">
            <input
              type="text"
              name="level"
              id="level"
              defaultValue={data?.level}
              className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
              placeholder="Enter candidate level"
            />
          </div>
          <div aria-live="polite" aria-atomic="true" className="space-y-2">
            {errorMessage?.errors?.level &&
              errorMessage.errors.level.map((msg, index) => {
                return (
                  <p key={index} className="text-red-500 text-sm">
                    {msg}
                  </p>
                );
              })}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="avatar"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Candidate Photo
          </label>
          <div className="relative shadow-sm">
            <input
              type="file"
              name="avatar"
              id="avatar"
              accept="image/png, image/jpeg"
              className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
            />
          </div>

          <div aria-live="polite" aria-atomic="true" className="space-y-2">
            {errorMessage?.errors?.avatar &&
              errorMessage.errors.avatar.map((msg, index) => {
                return (
                  <p key={index} className="text-red-500 text-sm">
                    {msg}
                  </p>
                );
              })}
          </div>
        </div>

        <div className="w-full flex justify-end items-center">
          <FormButton>Edit</FormButton>
        </div>
      </form>
    </>
  );
}
