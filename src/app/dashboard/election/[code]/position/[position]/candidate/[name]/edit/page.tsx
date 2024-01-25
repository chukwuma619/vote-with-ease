import CandidateEditForm from "@/components/candidate/edit-form";
import { fetchSingleCandidate } from "@/lib/data/candidate";
import { decodeText } from "@/lib/utils";


export default async function CandidateEditPage({
  params,
}: {
  params: { code: string; position: string; name: string };
}) {


  const data = await fetchSingleCandidate({
    unique_code: params.code,
    pos_title: decodeText(params.position),
    cand_name: decodeText(params.name),
  });

  return (
    <>
      <div className="h-full w-full flex flex-col p-4 gap-3 justify-start items-start">
        <h1 className="text-gray-900 text-2xl font-bold leading-none">
          Edit Candidate
        </h1>

        <CandidateEditForm
          data={data}
          unique_code={params.code}
          pos_title={decodeText(params.position)}
          cand_name={decodeText(params.name)}
        />
      </div>
    </>
  );
}
