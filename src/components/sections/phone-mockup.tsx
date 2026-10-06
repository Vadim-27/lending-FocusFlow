import { Flame, ShieldBan } from "lucide-react";
import { useTranslations } from "next-intl";

const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const PROGRESS = 0.72;

export function PhoneMockup() {
  const t = useTranslations("Hero.mockup");

  return (
    <div className="relative mx-auto w-full max-w-[320px]" aria-hidden="true">
      <div className="animate-float absolute -top-2 -left-2 z-10 flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 text-sm font-semibold shadow-soft sm:-left-10">
        <span className="grid size-8 place-items-center rounded-xl bg-highlight text-highlight-foreground">
          <Flame className="size-4" />
        </span>
        {t("streak")}
      </div>

      <div className="animate-float absolute -right-2 bottom-24 z-10 flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 text-sm font-semibold shadow-soft [animation-delay:-3s] sm:-right-10">
        <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground">
          <ShieldBan className="size-4" />
        </span>
        {t("blocked")}
      </div>

      <div className="rounded-[2.75rem] border border-border bg-foreground/90 p-2.5 shadow-soft dark:bg-card">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-background px-5 pt-10 pb-6">
          <div className="absolute top-3 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/90 dark:bg-muted" />

          <p className="text-xs font-medium text-muted-foreground">
            {t("session")}
          </p>
          <p className="font-heading text-xl font-extrabold">{t("greeting")}</p>

          <div className="relative mx-auto mt-6 grid size-48 place-items-center">
            <svg viewBox="0 0 160 160" className="absolute inset-0 -rotate-90">
              <circle
                cx="80"
                cy="80"
                r={RADIUS}
                fill="none"
                strokeWidth="12"
                className="stroke-muted"
              />
              <circle
                cx="80"
                cy="80"
                r={RADIUS}
                fill="none"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - PROGRESS)}
                className="stroke-primary"
              />
            </svg>
            <div className="text-center">
              <p className="font-heading text-5xl leading-none font-extrabold">
                18
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {t("remaining")}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-secondary p-4">
            <p className="text-xs text-muted-foreground">{t("today")}</p>
            <p className="font-heading text-2xl font-extrabold text-secondary-foreground">
              {t("hoursValue")}
            </p>
            <div className="mt-3 flex h-12 items-end gap-1.5">
              {[40, 65, 50, 80, 60, 95, 72].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-sm bg-primary/70 last:bg-highlight"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
