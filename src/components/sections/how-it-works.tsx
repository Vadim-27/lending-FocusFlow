import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { STEPS } from "@/data/site";

export function HowItWorks() {
  const t = useTranslations("How");

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="bg-muted/50 py-20 sm:py-24"
    >
      <div className="container-page">
        <SectionHeading
          titleId="how-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute top-8 right-[16.6%] left-[16.6%] hidden border-t-2 border-dashed border-primary/30 md:block"
          />
          {STEPS.map(({ id, icon: Icon }, index) => (
            <li key={id}>
              <Reveal
                delay={index * 120}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative grid size-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                  <Icon className="size-7" aria-hidden="true" />
                  <span className="absolute -top-2 -right-2 grid size-7 place-items-center rounded-full bg-highlight text-sm font-extrabold text-highlight-foreground">
                    {index + 1}
                  </span>
                </span>
                <p className="mt-5 text-sm font-semibold tracking-wider text-primary uppercase">
                  {t("stepLabel")} {index + 1}
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  {t(`steps.${id}.title`)}
                </h3>
                <p className="mt-3 max-w-xs text-muted-foreground">
                  {t(`steps.${id}.description`)}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
