"use client";

import { Check } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useId, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Switch } from "@/components/ui/switch";
import { PLANS } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const MONTHS_IN_YEAR = 12;

export function Pricing() {
  const t = useTranslations("Pricing");
  const format = useFormatter();
  const [yearly, setYearly] = useState(true);
  const switchId = useId();

  const money = (value: number) => `$${format.number(value)}`;

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-muted/50 py-20 sm:py-24"
    >
      <div className="container-page">
        <SectionHeading
          titleId="pricing-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span
            className={cn(
              "text-sm font-semibold",
              yearly && "text-muted-foreground",
            )}
          >
            {t("monthly")}
          </span>
          <Switch
            id={switchId}
            checked={yearly}
            onCheckedChange={setYearly}
            aria-label={t("billingToggle")}
          />
          <label
            htmlFor={switchId}
            className={cn(
              "cursor-pointer text-sm font-semibold",
              !yearly && "text-muted-foreground",
            )}
          >
            {t("yearly")}
          </label>
          <Badge variant="default" className="bg-highlight text-highlight-foreground">
            {t("save")}
          </Badge>
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-md gap-6 lg:max-w-none lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, index) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const features = t.raw(`plans.${plan.id}.features`) as string[];

            return (
              <li key={plan.id} className="flex">
                <Reveal delay={index * 100} className="flex w-full">
                  <Card
                    className={cn(
                      "relative w-full overflow-visible py-0",
                      plan.popular &&
                        "bg-card ring-2 ring-primary shadow-soft lg:-my-4",
                    )}
                  >
                    <CardContent className="flex h-full flex-col p-6 sm:p-8">
                      {plan.popular ? (
                        <Badge className="absolute -top-3 left-1/2 h-6 -translate-x-1/2 bg-highlight px-3 text-highlight-foreground">
                          {t("popular")}
                        </Badge>
                      ) : null}

                      <h3 className="text-xl font-bold">
                        {t(`plans.${plan.id}.name`)}
                      </h3>
                      <p className="mt-2 min-h-12 text-muted-foreground">
                        {t(`plans.${plan.id}.description`)}
                      </p>

                      <p className="mt-6 flex items-baseline gap-1">
                        <span className="font-heading text-5xl font-extrabold">
                          {money(price)}
                        </span>
                        <span className="text-muted-foreground">
                          {t("perMonth")}
                        </span>
                      </p>
                      <p className="mt-1 min-h-5 text-sm text-muted-foreground">
                        {yearly && price > 0
                          ? t("billedYearly", {
                              total: money(price * MONTHS_IN_YEAR),
                            })
                          : null}
                      </p>

                      <ul className="mt-6 flex-1 space-y-3">
                        {features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check
                              className="mt-0.5 size-5 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/#contact"
                        className={cn(
                          buttonVariants({
                            variant: plan.popular ? "default" : "outline",
                            size: "xl",
                          }),
                          "mt-8 w-full",
                        )}
                      >
                        {t(`plans.${plan.id}.cta`)}
                      </Link>
                    </CardContent>
                  </Card>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
