import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { skillGroups, type SkillGroup } from "../lib/data";

// per-index bento layout (lg only) — fills the 6-col track with no gaps
const layout = [
  "lg:col-span-3 lg:row-span-2", // 0 · DevOps — tall feature
  "lg:col-span-3", // 1 · Cloud
  "lg:col-span-3", // 2 · Backend
  "lg:col-span-2", // 3 · Frontend
  "lg:col-span-2", // 4 · Databases
  "lg:col-span-2", // 5 · Practices
];

// accent token map — color via text token only (neumorphism: depth from shadow)
const accentText: Record<SkillGroup["accent"], string> = {
  accent: "text-accent",
  cyan: "text-cyan",
  violet: "text-violet",
};

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 sm:px-8 py-20 sm:py-28"
    >
      {/* header */}
      <Reveal className="max-w-2xl">
        <span className="eyebrow">{" stack"}</span>
        <h2 className="grad-text mt-5 text-3xl sm:text-4xl md:text-5xl font-display">
          The tools I ship with
        </h2>
        <p className="mt-4 text-muted text-base sm:text-lg">
          A pragmatic, production-tested toolkit spanning the full path from
          commit to production: containers and clusters, cloud and CI/CD, APIs
          and interfaces.
        </p>
      </Reveal>

      {/* bento — raised soft-UI tiles on the flat base */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(180px,auto)]">
        {skillGroups.map((group, i) => {
          const tone = accentText[group.accent];
          return (
            <Reveal key={group.title} delay={i * 70} className={`${layout[i]} h-full`}>
              <article className="card card-hover p-6 flex flex-col h-full">
                {/* icon well (engraved) + title */}
                <div className="flex items-center gap-4">
                  <span className="inset-sm flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg">
                    <Icon name={group.icon} className={tone} size={22} />
                  </span>
                  <h3 className="font-display text-lg text-fg leading-tight">
                    {group.title}
                  </h3>
                </div>

                {/* blurb */}
                <p className="text-muted text-sm mt-3">{group.blurb}</p>

                {/* items — soft chips pinned to the bottom */}
                <ul className="flex flex-wrap gap-2 mt-auto pt-5">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
