import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { profile } from "../lib/data";

const focuses = [
  {
    icon: "workflow" as const,
    tone: "text-accent",
    title: "Automate deployments",
    desc: "Zero-touch CI/CD across multi-node clusters with Docker Swarm, Nginx & PM2.",
    offset: "",
    delay: 0,
  },
  {
    icon: "server" as const,
    tone: "text-cyan",
    title: "Scale backends",
    desc: "GraphQL & REST APIs on Node.js / Express with MongoDB & PostgreSQL.",
    offset: "lg:ml-6",
    delay: 90,
  },
  {
    icon: "code" as const,
    tone: "text-violet",
    title: "Craft frontends",
    desc: "Fast, animated React & Next.js interfaces with clean, intuitive UX.",
    offset: "lg:-ml-2",
    delay: 180,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 sm:px-8 py-20 sm:py-28"
    >
      <Reveal>
        <span className="eyebrow">{"about"}</span>
        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold">
          <span className="grad-text">Bridging infrastructure and product</span>
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-8 mt-12">
        {/* LEFT — narrative */}
        <Reveal className="lg:col-span-7" delay={60}>
          <div className="card-inset p-6 sm:p-8 rounded-3xl h-full">
            <p className="text-muted leading-relaxed">
              I live where infrastructure meets delivery. I build CI/CD
              pull-and-deploy pipelines that ship zero-touch releases across
              fleets of Linux VPS instances, containerize and orchestrate
              services with Docker, Docker Compose & Docker Swarm, and tune
              Nginx reverse proxies, PM2 and systemd so traffic routes cleanly
              and processes restart without downtime — on Contabo and GCP alike.
            </p>
            <p className="mt-5 text-muted leading-relaxed">
              On the product side I engineer the whole stack: GraphQL & REST
              APIs on Node.js and Express, paired with dynamic React and Next.js
              frontends. I care about systems that hold up in production —
              automated, observable, and reliable from the first commit through
              to the live deploy.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="chip">
                <Icon name="terminal" size={15} />
                {profile.role}
              </span>
              <span className="chip">
                <Icon name="mapPin" size={15} />
                {profile.location}
              </span>
              <span className="chip">
                <Icon name="zap" size={15} />
                Open to roles
              </span>
            </div>
          </div>
        </Reveal>

        {/* RIGHT — what I do */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {focuses.map((f) => (
            <Reveal key={f.title} delay={f.delay} className={f.offset}>
              <div className="card card-hover p-5 rounded-2xl">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-bg inset-sm">
                    <span className={f.tone}>
                      <Icon name={f.icon} size={20} />
                    </span>
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-fg text-lg">{f.title}</h3>
                    <p className="mt-1.5 text-muted text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
