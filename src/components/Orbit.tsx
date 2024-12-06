import { cn } from "@/utils/classname.util";
import { HTMLAttributes } from "react";

type OrbitProps = { className?: string } & HTMLAttributes<HTMLDivElement>;

const Orbit = ({ className }: OrbitProps) => {
  return (
    <div
      className={cn(
        "size-[200px] rounded-full border border-gray-200/30",
        className,
      )}
    />
  );
};

export default Orbit;
