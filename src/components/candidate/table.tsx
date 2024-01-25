import Link from "next/link";
import Image from "next/image";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { CandidateType } from "@/types/database-subtype";

export default function CandidateTable({
  data,
  position_name,
  election_unique_code,
}: {
  data: CandidateType[] | undefined;
  position_name: string;
  election_unique_code: string;
}) {
  return (
    <table className="min-w-full divide-y">
      <thead>
        <tr className="font-medium text-sm text-left">
          <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">
            Photo
          </th>
          <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">
            Name
          </th>
          <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">
            Dept
          </th>
          <th scope="col" className="pr-3 py-3.5 pl-4 md:pl-0">
            Level
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
        {data?.map((candidate, index) => {
          return (
            <tr key={index} className="text-left">
              <td className="pr-3 text-sm font-medium pl-4 md:pl-0 text-gray-900">
                <div className="w-full">
                  <Image
                    src={candidate.photo_url}
                    width={48}
                    height={124}
                    className="rounded-md object-cover object-center"
                    alt={`${candidate.full_name} profile image`}
                  />
                </div>
              </td>
              <td className="pr-3 py-3.5 text-sm font-medium pl-4 md:pl-0 text-gray-900">
                {candidate.full_name}
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">
                {candidate.department}
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 text-gray-500">
                {candidate.level}
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <Link
                  href={`/dashboard/election/${election_unique_code}/position/${position_name}/candidate/${candidate.full_name}/edit`}
                  className="text-blue-700"
                >
                  <span className="sr-only">Edit</span>
                  <FaPencil />
                </Link>
              </td>
              <td className="text-nowrap text-sm md:table-cell pr-3 py-3.5 pl-4 md:pl-0 ">
                <Link href="#" className="text-red-500">
                  <span className="sr-only">Delete</span>
                  <FaTrash />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
