import ElectionTable from "@/components/election/table";
import Header from "../components/header";
import { fetchAuthElections } from "@/data/election";

export default async function AllElectionPage() {
  const data = await fetchAuthElections();

  return (
    <>
      <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
        <Header
          heading_text="Elections"
          buttton_text="Create"
          href={"/dashboard/election/create"}
        />

        <div className=" overflow-x-auto relative w-full">
          <ElectionTable data={data} />
        </div>
      </div>
    </>
  );
}
