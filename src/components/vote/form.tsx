import { FormButton } from "../button";
import Image from "next/image";
import { CandidateType } from "@/types/database-subtype";
export default function VoteForm({ data }: { data: CandidateType[] }) {
  return (
    <form className="flex flex-col md:flex-row flex-wrap w-full mt-4 gap-6">
      {data.map((cand, index) => {
        return (
          <label
            key={index}
            htmlFor={cand.id}
            className="flex p-4 bg-gray-50 border border-gray-200 md:min-w-96 shadow rounded-lg justify-between items-center"
          >
            <div className="flex gap-2 items-center">
              <div className="inline-flex items-center justify-center text-center relative rounded">
                <Image
                  src={"/Images/profile-image.jpeg"}
                  alt="profile-image"
                  className="rounded"
                  height={80}
                  width={80}
                />
              </div>
              <div>
                <h2 className="text-base font-semibold">{cand.full_name}</h2>
                <p className="text-sm text-gray-500">{cand.department}</p>
                <p className="text-sm text-gray-500">{cand.level}</p>
              </div>
            </div>
            <input
              type="radio"
              name="position"
              id={cand.id}
              value={cand.id}
              className="w w-6 h-6 accent-green-700"
            />
          </label>
        );
      })}

      <div className="w-full flex justify-end items-center">
        <FormButton className="!inline-flex !w-fit">Vote Candidate</FormButton>
      </div>
    </form>
  );
}
