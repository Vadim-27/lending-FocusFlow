import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="9" className="fill-primary" />
      <circle
        cx="16"
        cy="16"
        r="8"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="38 12"
        className="stroke-primary-foreground"
      />
      <circle cx="16" cy="16" r="3" className="fill-highlight" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  const t = useTranslations("Common");

  return (
    <Link
      href="/"
      aria-label={t("logoLabel")}
      className={cn(
        "inline-flex items-center gap-2 rounded-md font-heading text-xl font-extrabold tracking-tight outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
    >
      <LogoMark />
      <span>
        Focus<span className="text-primary">Flow</span>
      </span>
    </Link>
  );
}
