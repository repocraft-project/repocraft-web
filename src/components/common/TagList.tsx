import { Badge } from "./Badge";
import { cn } from "@/utils/utils";

interface TagListProps {
  tags: string[];
  className?: string;
  badgeColor?: "green" | "orange" | "gray" | "blue";
}

export function TagList({ tags, className, badgeColor = "gray" }: TagListProps) {
  if (!tags.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <Badge key={tag} color={badgeColor} className="capitalize">
          {tag}
        </Badge>
      ))}
    </div>
  );
}