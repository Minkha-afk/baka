import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { projects, type Project } from "../lib/data";

/* Accent -> token text-class only (neumorphism: no tinted bg/border). */
const accentMap: Record<Project["accent"], { text: string }> = {
  accent: { text: "text-accent" },
  cyan: { text: "text-cyan" },
  violet: { text: "text-violet" },
};

const prettyUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const map = accentMap[p.accent];

  return (
    <Reveal
      delay={i * 100}
      className={p.featured ? "lg:col-span-3" : "lg:col-span-6"}
    >
      <article className="card card-hover flex h-full flex-col p-6 sm:p-7">
        {/* Top row */}
        <div className="flex items-center justify-between gap-3">
          <div className="inset-sm grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-bg">
            <Icon name={p.icon} className={map.text} size={22} />
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2.5">
            <span className="chip">{p.tag}</span>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.name} live demo (opens in a new tab)`}
              className="inline-flex items-center gap-1 font-mono text-xs text-faint transition-colors hover:text-accent"
            >
              {prettyUrl(p.url)}
              <Icon name="externalLink" size={13} />
            </a>
          </div>
        </div>

        {/* Title — links to the live demo */}
        <h3
          className={`mt-4 font-display text-fg ${
            p.featured ? "text-xl sm:text-2xl" : "text-xl"
          }`}
        >
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {p.name}
          </a>
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
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* Header */}
      <Reveal>
        <div className="max-w-2xl">
          <span className="eyebrow">{" selected work"}</span>
          <h2 className="grad-text mt-4 font-display text-3xl sm:text-4xl">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Full-stack and AI products I&apos;ve designed, built, and deployed end
            to end — all live in production. Click any title to try it.
          </p>
        </div>
      </Reveal>

      {/* Bento grid — two featured (col-span-3) on row 1, one wide (col-span-6) on row 2 */}
      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
