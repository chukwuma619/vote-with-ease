import EditVoterForm from "@/components/voters/edit-form";
import { fetchSingleVoter } from "@/data/voter";
import { decodeText} from "@/lib/utils";

export default async function EditVoter({
  params,
}: {
  params: { code: string; uuid: string };
}) {
  const data = await fetchSingleVoter({
    unique_code: params.code,
    id: params.uuid,
  });

  return (
    <>
      <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
        <h1 className="text-gray-900 text-2xl mt-4 font-bold leading-none">
          Edit Voter
        </h1>
        <EditVoterForm data={data} />
      </div>
    </>
  );
}
