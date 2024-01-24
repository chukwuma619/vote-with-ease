import PositionForm from "@/components/position/edit-form";
import { fetchElectionByUniqueCodeAndPositionTitle } from "@/lib/data/positions";

export default async function PositionEditPage({ params }: { params: { code: string, position: string } }) {
    const PositionData = await fetchElectionByUniqueCodeAndPositionTitle({unique_code: params.code, title:params.position})
    
    return (
        <>

            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
                <h1 className="text-gray-900 text-2xl font-bold leading-none">Edit Position</h1>
                <PositionForm data={PositionData} unique_code={params.code} />
            </div>
        </>
    )
}