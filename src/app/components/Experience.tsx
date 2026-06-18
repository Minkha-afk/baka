import { Icon } from "./Icons";
import Reveal from "./Reveal";
import LoaderRing from "./LoaderRing";
import { experiences, type Experience } from "../lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 sm:px-8 py-20 sm:py-28"
    >
      {/* header */}
      <Reveal>
        <div className="mb-14 sm:mb-20 text-center">
          <span className="eyebrow">{" experience"}</span>
          <h2 className="grad-text mt-5 text-3xl sm:text-4xl md:text-5xl font-bold">
            Where I&apos;ve shipped
          </h2>
          <p className="mono-label mx-auto mt-4 max-w-xl">
            {" from commit to production"}
          </p>
        </div>
      </Reveal>

      {/* timeline */}
      <div className="relative">
        {/* engraved rail — left on mobile, centered on lg */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1 bottom-1 left-[7px] w-[3px] rounded-full inset-sm lg:left-1/2 lg:-translate-x-1/2"
        />

        <ol className="space-y-12 lg:space-y-16">
          {experiences.map((exp: Experience, i: number) => {
            const onLeft = i % 2 === 0;
            return (
              <li
                key={exp.company}
                className="relative pl-10 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-x-14"
              >
                {/* neumorphic node on the rail */}
                <span
                  aria-hidden="true"
                  className="absolute top-6 left-0 z-10 lg:left-1/2 lg:-translate-x-1/2"
                >
                  <span className="relative grid h-4 w-4 place-items-center rounded-full bg-bg raise-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {exp.current ? (
                      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                    ) : null}
                  </span>
                </span>

                {/* card — alternates sides on lg for the zigzag */}
                <div
                  className={
                    onLeft ? "lg:col-start-1 lg:pr-2" : "lg:col-start-2 lg:pl-2"
                  }
                >
                  <Reveal delay={i * 120}>
                    <article className="card card-hover p-6 rounded-[18px]">
                      {/* top row */}
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                        <div className="min-w-0">
                          <h3 className="font-display text-xl text-fg">
                            {exp.role}
                          </h3>
                          <p className="mt-1 font-medium text-accent">
                            {exp.company}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          {exp.current ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-bg inset-sm px-3 py-1 text-xs font-medium text-accent">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
                              Current
                            </span>
                          ) : null}
                          <span className="chip">
                            <time>{exp.period}</time>
                          </span>
                        </div>
                      </div>

                      {/* summary */}
                      <p className="mt-2 text-muted">{exp.summary}</p>

                      {/* points */}
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

                      {/* stack */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                </div>

                {/* decorative spinning ring fills the empty zigzag column */}
                <div
                  aria-hidden="true"
                  className={`hidden lg:flex lg:row-start-1 lg:items-center lg:justify-center ${
                    onLeft ? "lg:col-start-2" : "lg:col-start-1"
                  }`}
                >
                  <LoaderRing />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
