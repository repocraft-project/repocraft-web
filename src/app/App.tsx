import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryProvider } from "./providers/query-client";
import { ThemeProvider } from "./providers/theme";
import AppShell from "../components/layout/AppShell";
import HomePage from "../pages/Home";
import OrganizationDetailPage from "../pages/OrganizationDetail";
import OrganizationsPage from "../pages/Organizations";
import RepoDetailPage from "../pages/RepositoryDetail";
import RepositoriesPage from "../pages/Repositories";
import UserProfilePage from "../pages/UserProfile";

export default function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AppShell>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/repos" element={<RepositoriesPage />} />
              <Route path="/repos/:owner/:name" element={<RepoDetailPage />} />
              <Route path="/orgs" element={<OrganizationsPage />} />
              <Route path="/orgs/:handle" element={<OrganizationDetailPage />} />
              <Route path="/users/:username" element={<UserProfilePage />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </ThemeProvider>
    </QueryProvider>
  );
}
