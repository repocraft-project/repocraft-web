import { Folder, FileText, GitCommit } from "lucide-react";
import { formatRelativeTime } from "@/utils/time";
import type { Repo } from "@/types";

interface RepositoryFileListProps {
  files: Repo["files"];
  className?: string;
}

export function RepositoryFileList({ files, className }: RepositoryFileListProps) {
  const header = files[0];

  return (
    <div className={`overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className || ""}`}>
      {header ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <GitCommit size={14} className="text-slate-500" />
            <span className="font-semibold text-slate-800 dark:text-slate-100">{header.author}</span>
            <span className="text-slate-500 dark:text-slate-400">{header.message}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-500 dark:text-slate-400">{header.hash ?? "latest"}</span>
            <span className="text-slate-500 dark:text-slate-400">{formatRelativeTime(header.updatedAt)}</span>
            <span className="text-slate-700 dark:text-slate-200 font-semibold">{header.commits} commits</span>
          </div>
        </div>
      ) : null}
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {files.map((file) => (
          <div key={file.path} className="grid grid-cols-[2fr,2fr,1fr,1fr] items-center gap-3 px-4 py-3 text-sm">
            <div className="flex items-center gap-2">
              {file.type === "dir" ? <Folder size={16} /> : <FileText size={16} />}
              <span className="font-medium text-slate-900 dark:text-slate-50">{file.name}</span>
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">{file.author}</span>{" "}
              <span className="text-slate-500 dark:text-slate-400">{file.message}</span>
            </div>
            <span className="text-right text-xs text-slate-500 dark:text-slate-400">
              {formatRelativeTime(file.updatedAt)}
            </span>
            <span className="text-right text-xs font-semibold text-slate-600 dark:text-slate-300">
              {file.commits} commits
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
