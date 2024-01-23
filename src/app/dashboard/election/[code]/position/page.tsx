'use client'
import Header from "@/app/dashboard/components/header";
import PositionTable from "@/components/position/table";
export default  function PositionPage({ params }: { params: { code: string } }) {
    
    
    return (
        <>

            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
                
                <Header heading_text="Positions" buttton_text="Create" href={'/dashboard/election/123456/position/create'} />
                <PositionTable />
            </div>

        </>
    )
}