"use client";

import { useEffect, useRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type RevealProps = ComponentProps<"div"> & {
  delay?: number;
};

/**
 * Fades and lifts its children into view once they enter the viewport.
 * Content stays fully visible without JS, above the fold, and for users who
 * prefer reduced motion — the hidden state is only applied on the client.
 */
export function Reveal({
  className,
  delay = 0,
  style,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { top, bottom } = node.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) return;

    node.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.reveal = "shown";
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "data-[reveal]:transition-[opacity,translate] data-[reveal]:duration-700 data-[reveal]:ease-out data-[reveal=hidden]:translate-y-6 data-[reveal=hidden]:opacity-0",
        className,
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
