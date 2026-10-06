import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { PhoneMockup } from "@/components/sections/phone-mockup";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HERO_STATS } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[32rem] w-[56rem] -translate-x-1/2 rounded-full opacity-80 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--hero-glow-1), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -right-32 -z-10 size-[28rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--hero-glow-2), transparent)",
        }}
      />

      <div className="container-page grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="text-center lg:text-left">
          <Reveal>
            <Badge
              variant="secondary"
              className="h-7 gap-1.5 px-3 text-sm font-semibold"
            >
              <Sparkles className="text-primary" />
              {t("badge")}
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-6 text-4xl leading-[1.08] font-extrabold text-balance sm:text-5xl lg:text-6xl"
            >
              {t("titleStart")}{" "}
              <span className="text-gradient">{t("titleHighlight")}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-pretty text-muted-foreground lg:mx-0">
              {t("subtitle")}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ size: "xl" }),
                  "w-full shadow-soft sm:w-auto",
                )}
              >
                {t("primaryCta")}
                <ArrowRight />
              </Link>
              <Link
                href="/#how-it-works"
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "w-full sm:w-auto",
                )}
              >
                {t("secondaryCta")}
              </Link>
            </div>

            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-highlight text-highlight"
                  />
                ))}
              </span>
              {t("rating")}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {HERO_STATS.map((key) => (
                <div key={key} className="flex flex-col">
                  <dt className="order-2 mt-1 text-xs text-muted-foreground sm:text-sm">
                    {t(`stats.${key}.label`)}
                  </dt>
                  <dd className="font-heading text-2xl font-extrabold sm:text-3xl">
                    {t(`stats.${key}.value`)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="px-6 sm:px-0">
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}
