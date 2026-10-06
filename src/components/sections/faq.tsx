import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { FAQ_ITEMS } from "@/data/site";

export function Faq() {
  const t = useTranslations("Faq");

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-muted/50 py-20 sm:py-24"
    >
      <div className="container-page max-w-3xl">
        <SectionHeading
          titleId="faq-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
        />

        <Reveal className="mt-12 rounded-2xl border border-border bg-card px-5 sm:px-8">
          <Accordion defaultValue={[FAQ_ITEMS[0]]}>
            {FAQ_ITEMS.map((id) => (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger className="py-5 text-base">
                  {t(`items.${id}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {t(`items.${id}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
