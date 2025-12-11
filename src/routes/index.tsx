import { Route, Routes } from "react-router-dom";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import HomePage from "@/pages/Home/HomePage";
import OrganizationDetailPage from "@/pages/OrganizationDetail/OrganizationDetailPage";
import OrganizationsPage from "@/pages/Organizations/OrganizationsPage";
import RepoDetailPage from "@/pages/RepositoryDetail/RepositoryDetailPage";
import RepositoriesPage from "@/pages/Repositories/RepositoriesPage";
import UserProfilePage from "@/pages/UserProfile/UserProfilePage";

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
