"use client"

import { Sun, Moon, Monitor } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-secondary/80 backdrop-blur-sm border border-border/50">
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "p-1.5 rounded-md transition-all duration-200",
          theme === "light" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
        )}
        title="Modo Claro"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "p-1.5 rounded-md transition-all duration-200",
          theme === "dark" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
        )}
        title="Modo Escuro"
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={cn(
          "p-1.5 rounded-md transition-all duration-200",
          theme === "system"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
        title="Sistema"
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  )
}
