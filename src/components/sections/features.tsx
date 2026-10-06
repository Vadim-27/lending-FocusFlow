import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { FEATURES } from "@/data/site";

export function Features() {
  const t = useTranslations("Features");

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="py-20 sm:py-24"
    >
      <div className="container-page">
        <SectionHeading
          titleId="features-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ id, icon: Icon }, index) => (
            <li key={id}>
              <Reveal delay={(index % 3) * 100} className="h-full">
                <Card className="group h-full py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold">
                      {t(`items.${id}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`items.${id}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
