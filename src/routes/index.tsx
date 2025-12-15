import { Route, Routes } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import HomePage from "@/pages/HomePage";
import OrganizationDetailPage from "@/pages/OrganizationDetailPage";
import OrganizationsPage from "@/pages/OrganizationsPage";
import RepoDetailPage from "@/pages/RepositoryDetailPage";
import RepositoriesPage from "@/pages/RepositoriesPage";
import UserProfilePage from "@/pages/UserProfilePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/repos" element={<RepositoriesPage />} />
      <Route path="/repos/:owner/:name" element={<RepoDetailPage />} />
      <Route path="/orgs" element={<OrganizationsPage />} />
      <Route path="/orgs/:handle" element={<OrganizationDetailPage />} />
      <Route path="/users/:username" element={<UserProfilePage />} />
    </Routes>
  );
}
