import EditElectionForm from "@/components/election/edit-form";
import { fetchSingleElection } from "@/data/election";
import { ElectionType } from "@/types/database-subtype";

export default async function EditElection({
  params,
}: {
  params: { code: string; email: string };
}) {
  const electionData = await fetchSingleElection({
    unique_code: params.code,
  });

  return (
    <>
      <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
        <h1 className="text-gray-900 text-2xl font-bold leading-none">
          Edit Election
        </h1>
        {electionData && <EditElectionForm data={electionData} />}
      </div>
    </>
  );
}
