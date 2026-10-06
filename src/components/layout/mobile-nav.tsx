"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className="lg:hidden"
            aria-label={t("openMenu")}
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle>{t("menuTitle")}</SheetTitle>
          <SheetDescription className="sr-only">
            {t("menuDescription")}
          </SheetDescription>
        </SheetHeader>
        <nav aria-label={t("mainLabel")} className="flex flex-col px-4">
          {NAV_ITEMS.map(({ id, labelKey }) => (
            <Link
              key={id}
              href={`/#${id}`}
              onClick={close}
              className="rounded-lg px-3 py-3 text-lg font-medium transition-colors hover:bg-muted"
            >
              {t(labelKey)}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <Link
            href="/#contact"
            onClick={close}
            className={cn(buttonVariants({ size: "xl" }), "w-full")}
          >
            {t("getStarted")}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
