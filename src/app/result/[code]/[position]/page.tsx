import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";

export default function Result() {
    return (
        <>
            <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
                <h1 className="text-gray-900 text-2xl mt-4 font-bold leading-none">President</h1>

                <div className="flex flex-col md:flex-row flex-wrap w-full items-center mt-4 gap-6">
                    <div className="flex p-4 shadow-md w-full bg-gray-50 shrink-0 justify-between rounded-lg md:min-w-96 max-w-96 items-center">
                        <div className="flex gap-2 items-center">
                            <div className="inline-flex items-center justify-center text-center relative rounded">
                                <Image src={'/Images/profile-image.jpeg'} alt="profile-image" className="rounded" height={80} width={80} />
                                <div className="size-5  bg-green-500  text-white rounded-full absolute left-0 top-0 border-2 border-gray-50 text-xs -ml-[11px] -mt-[11px] flex items-center justify-center">
                                    1
                                </div>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold">Chukwuma Ebube</h2>
                                <p className="text-sm text-gray-500">Computer Science</p>
                            </div>
                        </div>
                        <p className="text-sm font-medium">34,000</p>
                    </div>

                    <div className="flex p-4 shadow-md w-full bg-gray-50 shrink-0 justify-between rounded-lg md:min-w-96 max-w-96 items-center">
                        <div className="flex gap-2 items-center">
                            <div className="inline-flex items-center justify-center text-center relative rounded">
                                <Image src={'/Images/profile-image.jpeg'} alt="profile-image" className="rounded" height={80} width={80} />
                                <div className="size-5  bg-green-500  text-white rounded-full absolute left-0 top-0 border-2 border-gray-50 text-xs -ml-[11px] -mt-[11px] flex items-center justify-center">
                                    2
                                </div>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold">Chukwuma Ebube</h2>
                                <p className="text-sm text-gray-500">Computer Science</p>
                            </div>
                        </div>
                        <p className="text-sm font-medium">4,000</p>
                    </div>

                    <div className="flex p-4 shadow-md w-full bg-gray-50 shrink-0 justify-between rounded-lg md:min-w-96 max-w-96 items-center">
                        <div className="flex gap-2 items-center">
                            <div className="inline-flex items-center justify-center text-center relative rounded">
                                <Image src={'/Images/profile-image.jpeg'} alt="profile-image" className="rounded" height={80} width={80} />
                                <div className="size-5  bg-green-500  text-white rounded-full absolute left-0 top-0 border-2 border-gray-50 text-xs -ml-[11px] -mt-[11px] flex items-center justify-center">
                                    3
                                </div>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold">Chukwuma Ebube</h2>
                                <p className="text-sm text-gray-500">Computer Science</p>
                            </div>
                        </div>
                        <p className="text-sm font-medium">5000</p>
                    </div>

                </div>
            </div>
        </>
    )
}