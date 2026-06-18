import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { experiences, type Experience } from "../lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 sm:px-8 py-20 sm:py-28"
    >
      {/* Header */}
      <Reveal>
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">{"// experience"}</span>
          <h2 className="grad-text mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            Where I&apos;ve shipped
          </h2>
          <p className="mono-label mt-4 max-w-2xl">
            From commit to production — the roles where I built, automated, and deployed.
          </p>
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical rail */}
        <div
          aria-hidden="true"
          className="absolute top-1 bottom-1 left-4 sm:left-6 w-px bg-gradient-to-b from-border-strong via-border to-transparent"
        />

        <ol className="space-y-10 sm:space-y-12">
          {experiences.map((exp: Experience, i: number) => (
            <li key={exp.company} className="relative pl-10 sm:pl-14">
              {/* Node marker on the rail */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-4 sm:left-6 -translate-x-1/2 flex h-3.5 w-3.5 items-center justify-center"
              >
                {exp.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                )}
                <span
                  className={`relative inline-flex h-3.5 w-3.5 rounded-full ring-4 ring-bg ${
                    exp.current ? "bg-accent" : "bg-cyan"
                  }`}
                />
              </span>

              <Reveal delay={i * 120}>
                <article className="card card-hover p-6">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-semibold text-fg">
                        {exp.role}
                      </h3>
                      <p className="mt-1 font-medium text-accent">{exp.company}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/15 px-2.5 py-1 font-mono text-xs font-medium text-accent">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                          </span>
                          Current
                        </span>
                      )}
                      <span className="chip">
                        <time className="font-mono text-sm text-faint">
                          {exp.period}
                        </time>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-muted">{exp.summary}</p>

                  {/* Points */}
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Icon
                          name="check"
                          size={16}
                          className="mt-1 shrink-0 text-accent"
                        />
                        <span className="text-[15px] leading-relaxed text-muted">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
