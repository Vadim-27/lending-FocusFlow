import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  titleId?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleId,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="text-sm font-semibold tracking-wider text-primary uppercase">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-3 text-3xl font-extrabold text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-pretty text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
