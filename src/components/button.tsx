"use client";
import { useFormStatus } from "react-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none bg-green-700 hover:bg-green-600 focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-green-600 py-3 px-7 text-sm rounded-lg aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

export function FormButton({ children, className, ...rest }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button {...rest} className={`w-full ${className}`} aria-disabled={pending}>
      {children}
    </Button>
  );
}
