import Header from "@/app/dashboard/components/header";
import VoteTable from "@/components/voters/table";
import { fetchVoters } from "@/data/voter";
import { deleteVoter } from "@/actions/voter";
export default async function AllVotersPage({
  params,
}: {
  params: { code: string };
}) {
  const data = await fetchVoters({ unique_code: params.code });
  return (
    <>
      <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
        <Header
          heading_text="Eligible Voters"
          buttton_text="Add"
          href={`/dashboard/election/${params.code}/voters/create`}
        />

        <VoteTable data={data} />
      </div>
    </>
  );
}
