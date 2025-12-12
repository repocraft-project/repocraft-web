import type { ReactNode } from "react";
import { QueryProvider } from "./QueryClient";
import { ThemeProvider } from "./Theme";

export function EcosystemProvider({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
}
