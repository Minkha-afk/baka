import { Icon } from "./Icons";
import Reveal from "./Reveal";
import SparkleButton from "./SparkleButton";
import Clock from "./Clock";
import { education, profile, type EducationItem } from "../lib/data";

export default function Closing() {
  return (
    <>
      {/* ============================ EDUCATION ============================ */}
      <section
        id="education"
        className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 sm:px-8 py-20 sm:py-28"
      >
        <Reveal>
          <span className="eyebrow">{" education"}</span>
          <h2 className="grad-text mt-5 text-3xl sm:text-5xl font-display">
            Education
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-5">
          {education.map((item: EducationItem, i: number) => (
            <Reveal key={item.degree} delay={i * 80}>
              <article className="card card-hover p-6 flex gap-4 items-start">
                <span className="inset-sm grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-bg">
                  <Icon name="graduationCap" className="text-accent" size={22} />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg sm:text-xl text-fg">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-accent">{item.school}</p>
                  <time className="mt-1 block font-mono text-faint text-sm">
                    {item.period}
                  </time>
                  <span className="chip mt-4">
                    <Icon name="sparkles" className="text-accent" size={14} />
                    {item.detail}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ CONTACT ============================ */}
      <section
        id="contact"
        className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 sm:px-8 py-20 sm:py-28"
      >
        <Reveal>
          <div className="card p-8 sm:p-12 rounded-3xl">
            <span className="eyebrow">{" contact"}</span>
            <h2 className="grad-text mt-5 text-3xl sm:text-5xl font-display">
              Let&apos;s build something reliable
            </h2>
            <p className="mt-5 max-w-xl text-muted">
              Open to DevOps and full-stack roles. I reply fast — let&apos;s talk
              about shipping your next system.
            </p>

            {/* primary actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary"
                aria-label="Email me"
              >
                Email me
                <Icon name="mail" size={18} />
              </a>
              <SparkleButton
                href={profile.resumeUrl}
                label="Download resume"
                download
              />
            </div>

            {/* contact grid */}
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.email}`}
                className="card card-hover cursor-pointer rounded-xl p-3 flex items-center gap-3"
              >
                <Icon name="mail" className="text-accent shrink-0" size={20} />
                <span className="flex min-w-0 flex-col">
                  <span className="mono-label">Email</span>
                  <span className="text-fg truncate">{profile.email}</span>
                </span>
              </a>

              <a
                href={`tel:${profile.phoneHref}`}
                aria-label={`Call ${profile.phone}`}
                className="card card-hover cursor-pointer rounded-xl p-3 flex items-center gap-3"
              >
                <Icon name="phone" className="text-accent shrink-0" size={20} />
                <span className="flex min-w-0 flex-col">
                  <span className="mono-label">Phone</span>
                  <span className="text-fg truncate">{profile.phone}</span>
                </span>
              </a>

              <div className="card rounded-xl p-3 flex items-center gap-3">
                <Icon name="mapPin" className="text-accent shrink-0" size={20} />
                <span className="flex min-w-0 flex-col">
                  <span className="mono-label">Location</span>
                  <span className="text-fg truncate">{profile.location}</span>
                </span>
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="card card-hover cursor-pointer rounded-xl p-3 flex items-center gap-3"
              >
                <Icon name="github" className="text-accent shrink-0" size={20} />
                <span className="flex min-w-0 flex-col">
                  <span className="mono-label">GitHub</span>
                  <span className="text-fg truncate">@Minkha-afk</span>
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="card card-hover cursor-pointer rounded-xl p-3 flex items-center gap-3"
              >
                <Icon name="linkedin" className="text-accent shrink-0" size={20} />
                <span className="flex min-w-0 flex-col">
                  <span className="mono-label">LinkedIn</span>
                  <span className="text-fg truncate">in/minhazul-i-choudhury</span>
                </span>
              </a>
            </div>

            {/* Decorative live clock */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <Clock />
              <span className="mono-label">{" always on the clock"}</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="mx-auto w-full max-w-6xl px-5 sm:px-8 pb-12">
        <div className="divider" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 font-mono text-sm text-faint">
          <p>&copy; 2026 Minhazul Islam Choudhury</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            Back to top
            <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}
