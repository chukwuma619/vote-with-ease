import { isEligible } from "@/data/election";
import { fetchPositions } from "@/data/positions";
import Link from "next/link";

export default async function VotePositions({
  params,
}: {
  params: { code: string };
}) {
  const isVal = await isEligible({ code: params.code });
  const data = await fetchPositions({ unique_code: params.code });

  return (
    <>
      <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
        <h1 className="text-gray-900 text-2xl font-bold leading-none">
          Available Position(s)
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap w-full items-center mt-4 gap-6">
          {data.map((position, index) => {
            return (
              <div
                key={index}
                className="flex p-4 shadow-md bg-gray-50 shrink-0 justify-between w-full rounded-lg md:min-w-96 items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold">{position.title}</h2>
                </div>
                <Link
                  href={`/dashboard/vote/${params.code}/${position.title}`}
                  className="py-2 px-3 md:px-5 md:py-2.5 text-xs rounded font-medium bg-green-700 hover:bg-green-600 text-white"
                >
                  Select
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
