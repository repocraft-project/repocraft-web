import { useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { useParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/common/Button";
import { Text } from "@/components/common/Text";
import { PageLayout } from "@/components/layout/PageLayout";
import { TwoColumnLayout } from "@/components/layout/TwoColumnLayout";
import {
  RepositoryAbout,
  RepositoryActions,
  RepositoryFileList,
  RepositoryHeader,
  RepositoryTabs,
} from "@/features/repositories";
import { repos } from "@/data/mock";

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
    return <Text>Repository not found.</Text>;
  }

  return (
    <PageLayout>
      <RepositoryHeader 
        owner={repo.owner}
        name={repo.name}
        actions={<RepositoryActions repo={repo} />}
      />

      <RepositoryTabs repo={repo} />

      <TwoColumnLayout
        main={
          <div className="space-y-4">
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
            <RepositoryFileList files={repo.files} />

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
        }
        sidebar={<RepositoryAbout repo={repo} />}
      />
    </PageLayout>
  );
}
