import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface FlexProps {
  children: ReactNode;
  className?: string;
  direction?: "row" | "col";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  wrap?: boolean;
}

export function Flex({ 
  children, 
  className, 
  direction = "row", 
  align = "start", 
  justify = "start",
  wrap = false
}: FlexProps) {
  const flexClasses = cn(
    "flex",
    direction === "row" ? "flex-row" : "flex-col",
    `items-${align}`,
    `justify-${justify}`,
    wrap && "flex-wrap",
    className
  );

  return <div className={flexClasses}>{children}</div>;
}