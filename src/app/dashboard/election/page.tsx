import ElectionTable from "@/components/election/election-table";
import Header from "../components/header";
import { fetchElectionbyUser } from "@/lib/data/election";

export default async function AllElectionPage() {

    const allUserElections = await fetchElectionbyUser()

    return (
        <>
            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
                <Header heading_text="Elections" buttton_text="Create" href={'/dashboard/election/create'} />

                <div className=" overflow-x-auto relative w-full">
                    <ElectionTable data={allUserElections} />
                </div>

            </div>
        </>
    )
}