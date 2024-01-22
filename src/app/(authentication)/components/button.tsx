'use client'
import { Button } from "@/components/button";
import { useFormStatus } from "react-dom";

export default function AuthButton({children}:{children: React.ReactNode}) {
    const { pending } = useFormStatus();
    return (
        <Button className="w-full" aria-disabled={pending} >
            {children}
        </Button>
    )

}