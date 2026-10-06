import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <section className="container-page grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="font-heading text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">
          {t("title")}
        </h1>
        <p className="mt-3 text-muted-foreground">{t("description")}</p>
        <Link
          href="/"
          className={cn(buttonVariants({ size: "xl" }), "mt-8")}
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
