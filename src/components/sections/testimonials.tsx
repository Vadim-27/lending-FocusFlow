import { Quote, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { TestimonialControls } from "@/components/sections/testimonial-controls";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-20 sm:py-24"
    >
      <div className="container-page">
        <SectionHeading
          titleId="testimonials-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Reveal className="mt-14">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {TESTIMONIALS.map(({ id, initials }) => (
                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full py-0">
                    <CardContent className="flex h-full flex-col gap-5 p-6">
                      <div className="flex items-center justify-between">
                        <Quote
                          className="size-8 text-primary/40"
                          aria-hidden="true"
                        />
                        <span className="flex" aria-hidden="true">
                          {Array.from({ length: 5 }, (_, index) => (
                            <Star
                              key={index}
                              className="size-4 fill-highlight text-highlight"
                            />
                          ))}
                        </span>
                      </div>
                      <blockquote className="flex-1 text-base text-pretty">
                        {t(`items.${id}.quote`)}
                      </blockquote>
                      <figcaption className="flex items-center gap-3">
                        <span
                          className="grid size-11 place-items-center rounded-full bg-primary font-heading font-bold text-primary-foreground"
                          aria-hidden="true"
                        >
                          {initials}
                        </span>
                        <span>
                          <span className="block font-semibold">
                            {t(`items.${id}.name`)}
                          </span>
                          <span className="block text-sm text-muted-foreground">
                            {t(`items.${id}.role`)}
                          </span>
                        </span>
                      </figcaption>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <TestimonialControls />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
