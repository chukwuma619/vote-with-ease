"use client";

import Link from "next/link";
import { FaPencil, FaTrash, FaEye, FaUser } from "react-icons/fa6";
import { VoterType } from "@/types/database-subtype";
import { deleteVoter } from "@/actions/voter";
export default function VoteTable({ data }: { data: VoterType[] | undefined }) {
  return (
    <table className="min-w-full divide-y">
      <thead>
        <tr className="font-medium text-sm text-left">
          <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">
            Email
          </th>
          <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
            <span className="sr-only">Edit</span>
          </th>
          <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
            <span className="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {data?.map((value, index) => {
          return (
            <tr key={index} className="text-left">
              <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">
                {value.email}
              </td>

              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <Link
                  href={`/dashboard/election/${value.election_unique_code}/voters/${value.id}/edit`}
                  className="text-blue-700"
                >
                  <span className="sr-only">Edit</span>
                  <FaPencil />
                </Link>
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <button
                  onClick={() => {
                    deleteVoter({
                      unique_code: value.election_unique_code!,
                      uuid: value.id,
                    });
                  }}
                  className="text-red-500"
                >
                  <span className="sr-only">Delete</span>
                  <FaTrash />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
