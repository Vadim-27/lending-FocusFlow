"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/carousel";

export function TestimonialControls() {
  const t = useTranslations("Testimonials");
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  if (!canScrollPrev && !canScrollNext) return null;

  return (
    <div className="mt-8 flex justify-center gap-3">
      <Button
        variant="outline"
        size="icon-lg"
        className="rounded-full"
        aria-label={t("previous")}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="outline"
        size="icon-lg"
        className="rounded-full"
        aria-label={t("next")}
        disabled={!canScrollNext}
        onClick={scrollNext}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
