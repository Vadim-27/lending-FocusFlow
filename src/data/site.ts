import {
  BellOff,
  Brain,
  CalendarCheck,
  ChartLine,
  FlaskConical,
  Headphones,
  Lock,
  Play,
  RefreshCw,
  Target,
  Timer,
  type LucideIcon,
} from "lucide-react";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SOCIAL_LINKS = {
  github: "https://github.com/Vadim-27",
  x: "https://x.com",
  linkedin: "https://www.linkedin.com",
} as const;

export type SectionId =
  | "features"
  | "how-it-works"
  | "about"
  | "pricing"
  | "contact";

export const NAV_ITEMS = [
  { id: "features", labelKey: "features" },
  { id: "how-it-works", labelKey: "howItWorks" },
  { id: "about", labelKey: "about" },
  { id: "pricing", labelKey: "pricing" },
  { id: "contact", labelKey: "contact" },
] as const satisfies ReadonlyArray<{
  id: SectionId;
  labelKey: "features" | "howItWorks" | "about" | "pricing" | "contact";
}>;

export const FEATURES: ReadonlyArray<{
  id: "timer" | "blocker" | "planner" | "insights" | "sounds" | "sync";
  icon: LucideIcon;
}> = [
  { id: "timer", icon: Timer },
  { id: "blocker", icon: BellOff },
  { id: "planner", icon: CalendarCheck },
  { id: "insights", icon: ChartLine },
  { id: "sounds", icon: Headphones },
  { id: "sync", icon: RefreshCw },
];

export const STEPS: ReadonlyArray<{
  id: "one" | "two" | "three";
  icon: LucideIcon;
}> = [
  { id: "one", icon: Target },
  { id: "two", icon: Play },
  { id: "three", icon: Brain },
];

export const ABOUT_VALUES: ReadonlyArray<{
  id: "calm" | "privacy" | "science";
  icon: LucideIcon;
}> = [
  { id: "calm", icon: Brain },
  { id: "privacy", icon: Lock },
  { id: "science", icon: FlaskConical },
];

export const ABOUT_STATS = ["founded", "team", "countries"] as const;

export const HERO_STATS = ["users", "hours", "boost"] as const;

export const PLANS: ReadonlyArray<{
  id: "free" | "pro" | "team";
  monthly: number;
  yearly: number;
  popular?: boolean;
}> = [
  { id: "free", monthly: 0, yearly: 0 },
  { id: "pro", monthly: 9, yearly: 7, popular: true },
  { id: "team", monthly: 19, yearly: 15 },
];

export const TESTIMONIALS = [
  { id: "anna", initials: "AK" },
  { id: "marcus", initials: "ML" },
  { id: "sofia", initials: "SM" },
] as const;

export const FAQ_ITEMS = [
  "free",
  "platforms",
  "data",
  "cancel",
  "teams",
] as const;
