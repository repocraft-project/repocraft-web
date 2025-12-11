import { Link, NavLink, useLocation } from "react-router-dom";
import { Github, Home, Users, Search } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

const navItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "Repositories", to: "/repos", icon: Github },
  { label: "Organizations", to: "/orgs", icon: Users },
];

export default function AppShell({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-[#30363d] bg-[#24292f] px-4 py-3 text-white dark:bg-[#0d1117]">
        <div className="flex w-full items-center gap-4">
          <Link to="/" className="text-lg font-semibold leading-none hover:no-underline">
            Repocraft
          </Link>
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 rounded-md px-2.5 py-2 text-sm transition",
                      "hover:no-underline",
                      isActive ? "bg-[#3c434b] text-white" : "text-gray-200 hover:bg-[#30363d]",
                    )
                  }
                >
                  <Icon size={16} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden items-center md:flex">
              <Search size={14} className="pointer-events-none absolute left-3 text-gray-400" />
              <input
                className="w-72 rounded-md border border-[#30363d] bg-[#0d1117] py-2 pl-9 pr-3 text-sm text-white placeholder:text-gray-400 focus:border-[#4493f8] focus:outline-none focus:ring-2 focus:ring-[#4493f8]/30"
                placeholder="Search or jump to..."
              />
            </div>
            <Link
              to="/users/alice"
              className="hidden rounded-md border border-[#30363d] bg-[#2d333b] px-3 py-1.5 text-sm font-medium text-white hover:border-[#4493f8] hover:no-underline md:inline-block"
            >
              alice
            </Link>
            <div className="md:hidden">
              <small className="text-gray-300">{location.pathname}</small>
            </div>
          </div>
        </div>
        <div className="mt-2 flex w-full items-center justify-end gap-2 md:hidden">
          <div className="relative flex-1">
            <Search size={14} className="pointer-events-none absolute left-3 top-2.5 text-gray-400" />
            <input
              className="w-full rounded-md border border-[#30363d] bg-[#0d1117] py-2 pl-9 pr-3 text-sm text-white placeholder:text-gray-400 focus:border-[#4493f8] focus:outline-none focus:ring-2 focus:ring-[#4493f8]/30"
              placeholder="Search or jump to..."
            />
          </div>
        </div>
      </header>
      <main
        className={cn(
          "w-full",
          location.pathname === "/"
            ? "px-0 pb-0 pt-0"
            : "mx-auto max-w-screen-xl px-4 py-8 sm:py-10",
        )}
      >
        {children}
      </main>
    </div>
  );
}
