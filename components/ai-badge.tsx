import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface AiBadgeProps {
  label?: string
  className?: string
}

export function AiBadge({ label = "Con IA", className }: AiBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20",
        className
      )}
    >
      <Sparkles className="w-3 h-3" />
      {label}
    </span>
  )
}
