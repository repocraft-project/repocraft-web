import { useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { useParams } from "react-router-dom";
import { BookOpen, ChevronDown, FileText, Folder, GitFork, GitPullRequest, Shield, Star } from "lucide-react";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Card, CardHeader } from "@/components/common/Card";
import { repos } from "@/data/mock";
import { formatRelativeTime } from "@/utils/time";

function CodeBlock({
  inline,
  className,
  children,
}: {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const codeText = String(children ?? "");

  if (inline) {
    return (
      <code className={className}>
        {children}
      </code>
    );
  }

  const lines = codeText.split("\n").filter((line, idx, arr) => !(idx === arr.length - 1 && line === ""));

  return (
    <pre className={className}>
      <button
        className="copy-btn"
        onClick={() => {
          navigator.clipboard.writeText(codeText);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        type="button"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      {lines.map((line, idx) => (
        <div key={idx} className="code-line">
          <span className="code-line-number">{idx + 1}</span>
          <code className={className}>{line || " "}</code>
        </div>
      ))}
    </pre>
  );
}

export default function RepoDetailPage() {
  const { owner, name } = useParams();
  const repo = repos.find((r) => r.owner === owner && r.name === name);

  const markdownComponents: Components = {
    code({ inline, className, children }: { inline?: boolean; className?: string; children?: ReactNode }) {
      return (
        <CodeBlock inline={inline} className={className}>
          {children}
        </CodeBlock>
      );
    },
  };

  if (!repo) {
    return <p>Repository not found.</p>;
  }

  return (
    <div className="grid-gap">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
        <div className="flex flex-col">
          <span className="text-xs tracking-wide text-slate-500 dark:text-slate-400">Repository</span>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
              {repo.owner}/<span className="text-slate-900 dark:text-slate-50">{repo.name}</span>
            </h1>
            <Badge color={repo.visibility === "public" ? "green" : "orange"}>{repo.visibility}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="secondary">
            <Star size={14} />
            Star
            <span className="rounded-md bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {repo.stars}
            </span>
          </Button>
          <Button size="sm" variant="secondary">
            <GitFork size={14} />
            Fork
            <span className="rounded-md bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {repo.forks}
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-2 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-200">
        <span className="flex items-center gap-1 border-b-2 border-sky-500 pb-2 font-semibold">
          <FileText size={14} />
          Code
        </span>
        <span className="flex items-center gap-2 border-b-2 border-transparent pb-2">
          <BookOpen size={14} />
          Issues
          <span className="rounded-full bg-slate-200 px-2 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {repo.issues}
          </span>
        </span>
        <span className="flex items-center gap-2 border-b-2 border-transparent pb-2">
          <GitPullRequest size={14} />
          Pull requests
          <span className="rounded-full bg-slate-200 px-2 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {repo.pulls}
          </span>
        </span>
        <span className="flex items-center gap-2 border-b-2 border-transparent pb-2 text-slate-500 dark:text-slate-400">
          Actions
        </span>
        <span className="flex items-center gap-2 border-b-2 border-transparent pb-2 text-slate-500 dark:text-slate-400">
          Projects
        </span>
        <span className="flex items-center gap-2 border-b-2 border-transparent pb-2 text-slate-500 dark:text-slate-400">
          Wiki
        </span>
      </div>

      <div className="grid-gap lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center gap-1 rounded-md border border-slate-300 bg-white text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                <span>{repo.defaultBranch}</span>
                <ChevronDown size={14} />
              </Button>
              <Button variant="secondary" size="sm">
                Go to file
              </Button>
              <Button variant="secondary" size="sm">
                Add file
              </Button>
            </div>
            <div className="ml-auto">
              <Button size="sm">
                Code
                <ChevronDown size={14} />
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {repo.files.map((file) => (
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

          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="markdown prose max-w-none prose-slate dark:prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {repo.readme}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <Card>
            <CardHeader title="About" />
            <p className="text-sm text-slate-700 dark:text-slate-200">{repo.description}</p>
            {repo.topics.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {repo.topics.map((topic) => (
                  <Badge key={topic}>{topic}</Badge>
                ))}
              </div>
            ) : null}
            <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><Shield size={16} /> License: {repo.license ?? "TBD"}</div>
              <div className="flex items-center gap-2"><BookOpen size={16} /> Default branch: {repo.defaultBranch}</div>
              <div className="flex items-center gap-2"><Star size={16} /> Stars: {repo.stars}</div>
              <div className="flex items-center gap-2"><GitFork size={16} /> Forks: {repo.forks}</div>
              <div className="flex items-center gap-2"><GitPullRequest size={16} /> Open PRs: {repo.pulls}</div>
            </div>
            <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Last updated {formatRelativeTime(repo.updatedAt)}
            </div>
          </Card>
        </div>
      </div>

    </div>
  );
}
