import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { NAV_ITEMS } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Nav");

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label={t("mainLabel")} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map(({ id, labelKey }) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden h-10 px-4 text-sm sm:inline-flex",
            )}
          >
            {t("getStarted")}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
