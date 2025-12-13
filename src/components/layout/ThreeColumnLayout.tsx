import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface ThreeColumnLayoutProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
  className?: string;
  leftWidth?: string;
  rightWidth?: string;
}

export function ThreeColumnLayout({ 
  left, 
  center, 
  right, 
  className,
  leftWidth = "280px",
  rightWidth = "280px"
}: ThreeColumnLayoutProps) {
  return (
    <div 
      className={cn(
        "grid gap-4 items-stretch",
        `lg:grid-cols-[${leftWidth}_minmax(0,1fr)_${rightWidth}]`,
        className
      )}
      style={{
        gridTemplateColumns: `${leftWidth} minmax(0, 1fr) ${rightWidth}`
      }}
    >
      {left}
      {center}
      {right}
    </div>
  );
}