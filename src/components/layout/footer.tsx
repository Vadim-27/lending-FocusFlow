import { useTranslations } from "next-intl";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons/social-icons";
import { Logo } from "@/components/layout/logo";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/data/site";
import { Link } from "@/i18n/navigation";

const SOCIALS = [
  { id: "GitHub", href: SOCIAL_LINKS.github, Icon: GithubIcon },
  { id: "X", href: SOCIAL_LINKS.x, Icon: XIcon },
  { id: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: LinkedinIcon },
] as const;

const PRODUCT_LINKS = NAV_ITEMS.filter(({ id }) =>
  ["features", "how-it-works", "pricing"].includes(id),
);

const LEGAL_LINKS = ["privacy", "terms", "cookies"] as const;

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container-page py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">{t("tagline")}</p>
            <p className="mt-6 text-sm font-semibold">{t("followUs")}</p>
            <ul className="mt-3 flex gap-2">
              {SOCIALS.map(({ id, href, Icon }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={id}
                    className="grid size-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={t("product")}>
            <h2 className="text-sm font-semibold">{t("product")}</h2>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map(({ id, labelKey }) => (
                <li key={id}>
                  <Link href={`/#${id}`} className={linkClass}>
                    {nav(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("company")}>
            <h2 className="text-sm font-semibold">{t("company")}</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/#about" className={linkClass}>
                  {nav("about")}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={linkClass}>
                  {nav("contact")}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={t("legal")}>
            <h2 className="text-sm font-semibold">{t("legal")}</h2>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((key) => (
                <li key={key}>
                  <Link href="/" className={linkClass}>
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} FocusFlow. {t("rights")}
          </p>
          <p>{t("madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
