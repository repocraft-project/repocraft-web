import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface TwoColumnLayoutProps {
  main: ReactNode;
  sidebar: ReactNode;
  className?: string;
  mainWidth?: string;
  sidebarWidth?: string;
}

export function TwoColumnLayout({ 
  main, 
  sidebar, 
  className,
  mainWidth = "8fr",
  sidebarWidth = "4fr"
}: TwoColumnLayoutProps) {
  return (
    <div 
      className={cn(
        "grid gap-4 lg:grid items-start",
        className
      )}
      style={{
        gridTemplateColumns: `${mainWidth} ${sidebarWidth}`
      }}
    >
      {main}
      {sidebar}
    </div>
  );
}