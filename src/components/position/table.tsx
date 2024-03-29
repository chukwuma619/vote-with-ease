"use client";
import Link from "next/link";
import { FaEye, FaPencil, FaTrash } from "react-icons/fa6";
import { PositionType } from "@/types/database-subtype";
import { deletePosition } from "@/actions/position";

export default function PositionTable({
  data,
  unique_code,
}: {
  data: PositionType[];
  unique_code: string;
}) {
  function handleDelete(unique_code: string, title: string) {
    deletePosition(unique_code, title);
  }
  return (
    <table className="min-w-full divide-y">
      <thead>
        <tr className="font-medium text-sm text-left">
          <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">
            Name
          </th>
          <th scope="col" className="pr-4 md:ml-0 pl-3 py-3.5">
            <span className="sr-only">View Candidate</span>
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
        {data?.map((position, index) => {
          return (
            <tr key={index} className="text-left">
              <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">
                {position.title}
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <Link
                  href={`/dashboard/election/${unique_code}/position/${position.title}/candidate`}
                  className="text-green-700"
                >
                  <span className="sr-only">View Position</span>
                  <FaEye />
                </Link>
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <Link
                  href={`/dashboard/election/${unique_code}/position/${position.title}/edit`}
                  className="text-blue-700"
                >
                  <span className="sr-only">Edit</span>
                  <FaPencil />
                </Link>
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <button
                  onClick={() => {
                    handleDelete(position.election_unique_code, position.title);
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
