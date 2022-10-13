import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  clasName?: string;
}

export function Button({ children, asChild, clasName, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-ciano-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-ciano-300 focus:ring-2 ring-white",
        clasName
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
