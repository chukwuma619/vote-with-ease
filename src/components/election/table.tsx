'use client'

import { Database } from "@/types/database.types";
import Link from "next/link";
import { FaPencil, FaTrash, FaEye, FaUser } from "react-icons/fa6";
import { ElectionType } from "@/types/database-subtype";
import { deleteElection } from "@/actions/election";

export default function ElectionTable({
  data,
}: {
  data: ElectionType[] | undefined;
}) {
  function handleDelete(unique_code: string) {
    deleteElection(unique_code);
  }
  return (
    <table className="min-w-full divide-y w-full ">
      <thead>
        <tr className="font-medium text-sm text-left">
          <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">
            Name
          </th>
          <th scope="col" className="py-3.5 px-3 md:pl-0 md:table-cell">
            Code
          </th>
          <th scope="col" className="py-3.5 px-3 md:pl-0 md:table-cell">
            Status
          </th>
          <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
            <span className="sr-only">Positions</span>
          </th>
          <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
            <span className="sr-only">Eligible Voters</span>
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
        {data?.map((election, index) => {
          return (
            <tr key={index} className="text-left">
              <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">
                {election.title}
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">
                {election.unique_code}
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">
                {election.status}
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <Link
                  href={`/dashboard/election/${election.unique_code}/voters`}
                  className="text-green-700"
                >
                  <span className="sr-only">View Eligble voters</span>
                  <FaUser />
                </Link>
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <Link
                  href={`/dashboard/election/${election.unique_code}/position`}
                  className="text-green-700"
                >
                  <span className="sr-only">View Position</span>
                  <FaEye />
                </Link>
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <Link
                  href={`/dashboard/election/${election.unique_code}/edit`}
                  className="text-blue-700"
                >
                  <span className="sr-only">Edit</span>
                  <FaPencil />
                </Link>
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <button
                 onClick={()=>{handleDelete(election.unique_code)}}
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
