"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("Language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const nextLocale: Locale =
    routing.locales.find((item) => item !== locale) ?? routing.defaultLocale;

  function switchLocale() {
    const { hash } = window.location;
    startTransition(() => {
      router.replace(`${pathname}${hash}`, { locale: nextLocale });
    });
  }

  return (
    <Button
      variant="ghost"
      size="lg"
      className="h-10 gap-1.5 px-2.5 font-semibold"
      aria-label={`${t("label")}: ${t(nextLocale)}`}
      lang={nextLocale}
      disabled={isPending}
      onClick={switchLocale}
    >
      <Languages className="size-4" />
      <span aria-hidden="true">{nextLocale.toUpperCase()}</span>
    </Button>
  );
}
