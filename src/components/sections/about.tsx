import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT_STATS, ABOUT_VALUES } from "@/data/site";

export function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 sm:py-24"
    >
      <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            titleId="about-title"
            align="left"
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
          <Reveal delay={100} className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>{t("paragraphOne")}</p>
            <p>{t("paragraphTwo")}</p>
          </Reveal>

          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              {ABOUT_STATS.map((key) => (
                <div
                  key={key}
                  className="rounded-2xl border border-border bg-card p-4 text-center"
                >
                  <dt className="text-xs text-muted-foreground sm:text-sm">
                    {t(`stats.${key}.label`)}
                  </dt>
                  <dd className="mt-1 font-heading text-2xl font-extrabold text-primary sm:text-3xl">
                    {t(`stats.${key}.value`)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ul className="grid gap-4">
          {ABOUT_VALUES.map(({ id, icon: Icon }, index) => (
            <li key={id}>
              <Reveal
                delay={index * 100}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">
                    {t(`values.${id}.title`)}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {t(`values.${id}.description`)}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
