import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { skillGroups, type SkillGroup } from "../lib/data";

type AccentStyle = {
  text: string;
  chipBg: string;
  ring: string;
  glow: string;
};

/* Accent -> token utility classes (never raw hex). */
const accentMap: Record<SkillGroup["accent"], AccentStyle> = {
  accent: {
    text: "text-accent",
    chipBg: "bg-accent/10",
    ring: "border-accent/25",
    glow: "bg-accent/10",
  },
  cyan: {
    text: "text-cyan",
    chipBg: "bg-cyan/10",
    ring: "border-cyan/25",
    glow: "bg-cyan/10",
  },
  violet: {
    text: "text-violet",
    chipBg: "bg-violet/10",
    ring: "border-violet/25",
    glow: "bg-violet/10",
  },
};

/* Explicit bento layout that fills the 6-col track with no gaps.
   Row 1: DevOps (3, tall) + Cloud (3)
   Row 2: DevOps (cont.) + Backend (3)
   Row 3: Frontend (2) + Databases (2) + Practices (2) */
const layout = [
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 sm:px-8 py-20 sm:py-28"
    >
      {/* Header */}
      <Reveal className="max-w-2xl">
        <span className="eyebrow">{"// stack"}</span>
        <h2 className="grad-text mt-4 text-3xl sm:text-4xl lg:text-5xl font-display">
          The tools I ship with
        </h2>
        <p className="mt-4 text-muted text-base sm:text-lg">
          A pragmatic toolkit spanning the full path from commit to production:
          containers and clusters, cloud and CI/CD, APIs and interfaces.
        </p>
      </Reveal>

      {/* Bento grid */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6 lg:auto-rows-[minmax(180px,auto)]">
        {skillGroups.map((group, i) => {
          const map = accentMap[group.accent];
          return (
            <Reveal
              key={group.title}
              delay={i * 70}
              className={`${layout[i] ?? "lg:col-span-2"} h-full`}
            >
              <article className="card card-hover relative flex h-full flex-col overflow-hidden p-6">
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 -top-10 z-0 h-36 w-36 rounded-full ${map.glow} opacity-60 blur-2xl`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Header row */}
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl border ${map.ring} ${map.chipBg}`}
                    >
                      <Icon name={group.icon} className={map.text} size={22} />
                    </span>
                    <h3 className="font-display text-lg text-fg">{group.title}</h3>
                  </div>

                  {/* Blurb */}
                  <p className="mt-3 text-sm text-muted">{group.blurb}</p>

                  {/* Items */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
