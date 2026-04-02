import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
};

export function SectionBadge({ children, variant = "light" }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-4 py-1.5 font-[family-name:var(--font-manrope)] text-sm font-medium tracking-wide",
        variant === "light"
          ? "bg-primary-dark/5 text-primary-dark"
          : "bg-white/10 text-white"
      )}
    >
      {children}
    </span>
  );
}
