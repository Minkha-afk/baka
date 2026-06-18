import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { profile, stats } from "../lib/data";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT COLUMN */}
        <div>
          {profile.available && (
            <Reveal delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-xs text-accent">
                  Open to opportunities
                </span>
              </span>
            </Reveal>
          )}

          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-[1.05]">
              Minhazul Islam{" "}
              <span className="grad-text">Choudhury</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-5 font-mono text-accent">
              <span className="text-faint">$ </span>
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={270}>
            <p className="mt-4 text-lg text-fg">{profile.tagline}</p>
            <p className="mt-3 max-w-xl text-muted">
              DevOps-focused full-stack engineer skilled in automating
              multi-server deployments, CI/CD pull-and-deploy pipelines, and
              containerization with Docker, Compose &amp; Swarm. I administer
              Linux VPS fleets and GCP, configure Nginx reverse proxies, and
              orchestrate processes with PM2 and systemd.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary cursor-pointer">
                View my work
                <Icon name="arrowRight" size={18} />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="btn-ghost cursor-pointer"
              >
                Résumé
                <Icon name="download" size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/5 text-muted transition-colors duration-200 hover:text-accent hover:border-border-strong cursor-pointer"
              >
                <Icon name="github" size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/5 text-muted transition-colors duration-200 hover:text-accent hover:border-border-strong cursor-pointer"
              >
                <Icon name="linkedin" size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/5 text-muted transition-colors duration-200 hover:text-accent hover:border-border-strong cursor-pointer"
              >
                <Icon name="mail" size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT COLUMN — terminal / deploy log */}
        <Reveal delay={180} className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl"
          />
          <div className="card overflow-hidden">
            {/* top bar */}
            <div className="flex items-center border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-accent" />
              </div>
              <span className="flex-1 text-center font-mono text-xs text-faint">
                deploy.sh
              </span>
              <span className="w-[54px]" />
            </div>

            {/* body */}
            <div className="p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-fg">$ git push origin main</p>
              <p className="text-muted">
                → webhook received · pulling on 5 VPS
              </p>
              <p className="text-accent">✓ docker compose build</p>
              <p className="text-accent">✓ swarm rolling update (multi-node)</p>
              <p className="text-cyan">✓ nginx reverse proxy · reload</p>
              <p className="text-accent">✓ pm2 zero-downtime restart</p>
              <p className="text-muted">→ health checks passing on all nodes</p>
              <p className="mt-2 text-fg font-semibold">
                deployed in 14s — 0 downtime
                <span className="ml-1 animate-blink text-accent">▋</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* STATS STRIP */}
      <Reveal delay={270}>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="card p-4">
              <Icon
                name={stat.icon}
                size={22}
                className={i % 2 === 0 ? "text-accent" : "text-cyan"}
              />
              <div className="mt-3 font-display text-2xl">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </header>
  );
}
