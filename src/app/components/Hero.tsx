import { Icon } from "./Icons";
import Reveal from "./Reveal";
import SparkleButton from "./SparkleButton";
import { profile, stats } from "../lib/data";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7">
          {profile.available ? (
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-bg raise-sm px-3.5 py-1.5 font-mono text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to opportunities
              </span>
            </Reveal>
          ) : null}

          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-[1.05] text-fg">
              {profile.firstName}{" "}
              <span className="grad-text">
                {profile.name.slice(profile.firstName.length).trim()}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-4 font-mono text-accent text-base sm:text-lg">
              <span className="text-faint">$ </span>
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={210}>
            <p className="mt-6 text-fg text-lg">{profile.tagline}</p>
            <p className="mt-3 text-muted max-w-xl">
              {profile.summary.split(".")[0]}.
            </p>
          </Reveal>

          <Reveal delay={270}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#work" className="btn-primary">
                View my work
                <Icon name="arrowRight" size={18} />
              </a>
              <SparkleButton
                href={profile.resumeUrl}
                label="Résumé"
                download
              />
            </div>
          </Reveal>

          <Reveal delay={330}>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-bg raise-sm text-muted transition hover:inset-sm hover:text-accent"
              >
                <Icon name="github" size={19} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-bg raise-sm text-muted transition hover:inset-sm hover:text-accent"
              >
                <Icon name="linkedin" size={19} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-bg raise-sm text-muted transition hover:inset-sm hover:text-accent"
              >
                <Icon name="mail" size={19} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — neumorphic CI/CD console */}
        <div className="lg:col-span-5">
          <Reveal delay={240}>
            <div className="card-inset overflow-hidden rounded-2xl">
              {/* Top strip */}
              <div className="flex items-center px-5 pt-4 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-bg inset-sm text-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-bg inset-sm text-cyan" />
                  <span className="h-2.5 w-2.5 rounded-full bg-bg inset-sm text-faint" />
                </div>
                <span className="flex-1 text-center font-mono text-xs text-faint">
                  deploy.sh
                </span>
                <span className="w-[46px]" aria-hidden="true" />
              </div>

              <div className="px-5">
                <div className="divider" />
              </div>

              {/* Body */}
              <div className="font-mono text-[13px] leading-relaxed p-5">
                <p className="text-fg">$ git push origin main</p>
                <p className="text-muted">
                  <span className="text-muted">&#45;&gt;</span> webhook received - pulling on 5 VPS
                </p>
                <p className="mt-1 text-fg">
                  <span className="text-accent">ok</span> docker compose build
                </p>
                <p className="text-fg">
                  <span className="text-accent">ok</span> swarm rolling update (multi-node)
                </p>
                <p className="text-cyan">
                  <span className="text-accent">ok</span> nginx reverse proxy - reload
                </p>
                <p className="text-fg">
                  <span className="text-accent">ok</span> pm2 zero-downtime restart
                </p>
                <p className="mt-2 font-semibold text-fg">
                  deployed in 14s - 0 downtime
                  <span className="ml-0.5 animate-blink text-accent">&#9612;</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* STATS strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={360 + i * 80}
            className={i % 2 === 1 ? "sm:translate-y-3" : ""}
          >
            <div className="card p-4">
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-bg inset-sm ${
                  i % 2 === 0 ? "text-accent" : "text-cyan"
                }`}
              >
                <Icon name={stat.icon} size={20} />
              </span>
              <p className="mt-3 font-display text-2xl text-fg">{stat.value}</p>
              <p className="text-muted text-sm">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </header>
  );
}
