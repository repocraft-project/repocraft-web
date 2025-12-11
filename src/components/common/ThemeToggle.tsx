import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/providers/theme";
import { Button } from "@/components/common/Button";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Button variant="ghost" size="sm" aria-label="Toggle theme" onClick={toggle}>
      {theme === "dark" ? (
        <>
          <Sun size={16} />
          Light
        </>
      ) : (
        <>
          <Moon size={16} />
          Dark
        </>
      )}
    </Button>
  );
}
