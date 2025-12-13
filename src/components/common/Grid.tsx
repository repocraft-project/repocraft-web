import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  mdCols?: 1 | 2 | 3 | 4 | 6 | 12;
  lgCols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: string;
}

export function Grid({ children, className, cols, mdCols, lgCols, gap = "4" }: GridProps) {
  const gridClasses = cn(
    "grid-gap",
    cols && `grid-cols-${cols}`,
    mdCols && `md:grid-cols-${mdCols}`,
    lgCols && `lg:grid-cols-${lgCols}`,
    gap && `gap-${gap}`,
    className
  );

  return <div className={gridClasses}>{children}</div>;
}