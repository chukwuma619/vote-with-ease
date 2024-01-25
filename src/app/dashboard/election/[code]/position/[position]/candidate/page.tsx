
import Header from "@/app/dashboard/components/header";
import CandidateTable from "@/components/candidate/table";
import { fetchCandidate } from "@/lib/data/candidate";

export default async function CandidataePage({params}:{params:{code:string, position:string}}) {
    console.log(params.code, params.position);

    
    const data = await fetchCandidate(params.code, params.position)
    
    return (
        <>
            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">

                <Header heading_text="Candidate" buttton_text="Create" href={`/dashboard/election/${params.code}/position/${params.position}/candidate/create`} />

                <div className="w-full">
                   <CandidateTable position_name={params.position} data={data} election_unique_code={params.code} />
                </div>

            </div>
        </>
    )
}