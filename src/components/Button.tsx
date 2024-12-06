import { HTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";

export type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const buttonCVA = cva(
  "text-sx tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary:
          "border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-500),var(--color-fuchsia-500),var(--color-amber-400),var(--color-teal-400),var(--color-violet-500))_border-box]",
        secondary: "",
        tertiary: "bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button className={buttonCVA({ ...rest, className, variant })}>
      {children}
    </button>
  );
};

export default Button;
