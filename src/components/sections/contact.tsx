import { ArrowRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Contact() {
  const t = useTranslations("Contact");
  const email = t("email");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 sm:py-24"
    >
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-highlight/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 -z-10 size-72 rounded-full bg-primary-foreground/15 blur-3xl"
          />

          <p className="text-sm font-semibold tracking-wider uppercase opacity-80">
            {t("eyebrow")}
          </p>
          <h2
            id="contact-title"
            className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-pretty opacity-90">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#pricing"
              className={cn(
                buttonVariants({ variant: "highlight", size: "xl" }),
                "w-full sm:w-auto",
              )}
            >
              {t("primaryCta")}
              <ArrowRight />
            </Link>
            <a
              href={`mailto:${email}`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "xl" }),
                "w-full text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground sm:w-auto",
              )}
            >
              <Mail />
              <span className="sr-only">{t("emailLabel")}: </span>
              {email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
