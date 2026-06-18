import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { profile } from "../lib/data";

const focusCards = [
  {
    icon: "workflow" as const,
    accent: "accent",
    title: "Automate deployments",
    desc: "Zero-touch CI/CD across multi-node clusters with Docker Swarm, Nginx & PM2.",
    delay: 0,
  },
  {
    icon: "server" as const,
    accent: "cyan",
    title: "Scale backends",
    desc: "GraphQL & REST APIs on Node.js / Express, with MongoDB and PostgreSQL.",
    delay: 90,
  },
  {
    icon: "code" as const,
    accent: "violet",
    title: "Craft frontends",
    desc: "Fast, animated React & Next.js interfaces with clean, intuitive UX.",
    delay: 180,
  },
];

const accentClasses: Record<string, { text: string; box: string }> = {
  accent: { text: "text-accent", box: "bg-accent/10 border border-accent/25" },
  cyan: { text: "text-cyan", box: "bg-cyan/10 border border-cyan/25" },
  violet: { text: "text-violet", box: "bg-violet/10 border border-violet/25" },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 sm:px-8 py-20 sm:py-28"
    >
      <Reveal>
        <span className="eyebrow">{"// about"}</span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold grad-text">
          Bridging infrastructure and product
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-8 mt-10">
        <div className="lg:col-span-7">
          <Reveal delay={60}>
            <div className="space-y-5">
              <p className="text-muted leading-relaxed">
                I live where commits become production. I build CI/CD pipelines
                that turn a single git push into a zero-touch release across
                multi-node VPS fleets — containerizing services with Docker and
                Docker Swarm, fronting them with Nginx reverse proxies, and
                keeping processes alive through PM2 and systemd on Linux and GCP.
              </p>
              <p className="text-muted leading-relaxed">
                That automation is backed by full-stack product work: I design
                GraphQL and REST APIs on Node.js / Express, and craft fast,
                animated React and Next.js frontends on top of them. The result
                is reliable, automated systems that scale — built end to end, so
                what I deploy is also what I&apos;ve shipped.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-7">
              <span className="chip">
                <Icon name="terminal" size={14} />
                {profile.role}
              </span>
              <span className="chip">
                <Icon name="mapPin" size={14} />
                {profile.location}
              </span>
              <span className="chip">
                <Icon name="zap" size={14} />
                Open to roles
              </span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <div className="flex flex-col gap-4">
            {focusCards.map((c) => {
              const a = accentClasses[c.accent];
              return (
                <Reveal key={c.title} delay={c.delay}>
                  <div className="card card-hover p-5 flex gap-4 items-start">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${a.box} ${a.text}`}
                    >
                      <Icon name={c.icon} size={20} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-fg">
                        {c.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
