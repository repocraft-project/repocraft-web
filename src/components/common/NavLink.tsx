import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { cn } from "@/utils/utils";

interface NavLinkProps extends LinkProps {
  variant?: "default" | "muted" | "primary";
  className?: string;
  children: React.ReactNode;
}

export function NavLink({ variant = "default", className, children, ...props }: NavLinkProps) {
  const variantClasses = {
    default: "text-slate-600 no-underline hover:no-underline",
    muted: "text-slate-600 no-underline hover:no-underline",
    primary: "text-sky-600 dark:text-sky-400",
  };

  return (
    <Link
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}