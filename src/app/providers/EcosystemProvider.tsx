import type { ReactNode } from "react";
import { QueryProvider } from "./query-client";
import { ThemeProvider } from "./theme";

export function EcosystemProvider({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
}
