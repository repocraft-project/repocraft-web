import { Search } from "lucide-react";
import { cn } from "@/utils/utils";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBox({ value, onChange, placeholder = "Search...", className }: SearchBoxProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-900 shadow-sm",
          "focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100",
          "dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-sky-900/50",
          className,
        )}
      />
    </div>
  );
}