import Link from "next/link";
import Image from "next/image";
import { isEligible } from "@/data/election";
import { fetchCandidates } from "@/data/candidate";
import { FormButton } from "@/components/button";
import VoteForm from "@/components/vote/form";
export default async function VotingPage({
  params,
}: {
  params: { code: string; position: string };
}) {
  const isVal = await isEligible({ code: params.code });
  const data = await fetchCandidates(params.code, params.position);
  return (
    <>
      <div className="h-full w-full flex flex-col  gap-3 justify-start items-start">
        <h1 className="text-gray-900 text-2xl font-bold leading-none">
          {`Choose your ${params.position}`}
        </h1>
        <VoteForm data={data} />
      </div>
    </>
  );
}
