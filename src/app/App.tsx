import { BrowserRouter } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import { AppRoutes } from "@/routes";
import { EcosystemProvider } from "./providers/EcosystemProvider";

export default function App() {
  return (
    <EcosystemProvider>
      <BrowserRouter>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </BrowserRouter>
    </EcosystemProvider>
  );
}
