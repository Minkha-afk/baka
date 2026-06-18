import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { projects, type Project, profile } from "../lib/data";

type AccentStyle = {
  text: string;
  chipBg: string;
  ring: string;
  glow: string;
};

/* Accent -> token-class map. Same convention used across the site. */
const accentMap: Record<Project["accent"], AccentStyle> = {
  accent: {
    text: "text-accent",
    chipBg: "bg-accent/10",
    ring: "ring-1 ring-accent/30",
    glow: "bg-accent/20",
  },
  cyan: {
    text: "text-cyan",
    chipBg: "bg-cyan/10",
    ring: "ring-1 ring-cyan/30",
    glow: "bg-cyan/20",
  },
  violet: {
    text: "text-violet",
    chipBg: "bg-violet/10",
    ring: "ring-1 ring-violet/30",
    glow: "bg-violet/20",
  },
};

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const map = accentMap[p.accent];
  const featured = p.featured;

  return (
    <Reveal
      delay={i * 100}
      className={featured ? "lg:col-span-3" : "lg:col-span-6"}
    >
      <article className="card card-hover relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
        {/* Decorative corner glow */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -right-16 -top-16 z-0 h-44 w-44 rounded-full blur-3xl ${map.glow}`}
        />

        <div className="relative z-10 flex h-full flex-col">
          {/* Top row */}
          <div className="flex items-center justify-between gap-3">
            <div
              className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl ${map.ring} ${map.chipBg}`}
            >
              <Icon name={p.icon} className={map.text} size={22} />
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
              <span className="chip">{p.tag}</span>
              <span className="font-mono text-xs text-faint">
                {"@ " + p.org}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3
            className={`mt-4 font-display ${
              featured ? "text-xl sm:text-2xl" : "text-xl"
            }`}
          >
            {p.name}
          </h3>

          {/* Description */}
          <p className="mt-2 leading-relaxed text-muted">{p.description}</p>

          {/* Highlights */}
          <ul className="mt-4 space-y-1.5">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <Icon
                  name="check"
                  className={`mt-1 shrink-0 ${map.text}`}
                  size={15}
                />
                <span className="text-sm text-muted">{h}</span>
              </li>
            ))}
          </ul>

          {/* Stack chips */}
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {p.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  void profile;

  return (
    <section
      id="work"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* Header */}
      <Reveal>
        <div className="max-w-2xl">
          <span className="eyebrow">{"// selected work"}</span>
          <h2 className="grad-text mt-4 text-3xl sm:text-4xl">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 text-muted">
            A look at the systems I&apos;ve shipped end to end — from automated
            deployment pipelines to scalable full-stack platforms.
          </p>
          <p className="mono-label mt-3 flex items-start gap-2">
            <Icon name="shield" className="mt-1 shrink-0 text-faint" size={14} />
            <span>
              {"// some of this was built under NDA in private repos — details paraphrased, no public links."}
            </span>
          </p>
        </div>
      </Reveal>

      {/* Bento grid */}
      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
