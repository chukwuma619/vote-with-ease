import Header from "@/app/dashboard/components/header";
import PositionTable from "@/components/position/table";
import { fetchPositionByElectionUniqueCode } from "@/lib/data/positions";
export default async function PositionPage({ params }: { params: { code: string } }) {

    const PositionData = await fetchPositionByElectionUniqueCode({ unique_code: params.code })
    return (
        <>

            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">

                <Header heading_text="Positions" buttton_text="Create" href={`/dashboard/election/${params.code}/position/create`} />
                <PositionTable data={PositionData} unique_code={params.code} />
            </div>

        </>
    )
}