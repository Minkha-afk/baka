"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { navLinks, profile } from "../lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-4 z-50"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Floating glass pill */}
        <div
          className={[
            "flex items-center justify-between gap-4 rounded-full px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:px-4",
            scrolled
              ? "border border-white/15 bg-surface/80 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.85)]"
              : "border border-white/10 bg-surface/50",
          ].join(" ")}
        >
          {/* Left — logo / monogram */}
          <a
            href="#top"
            aria-label="Home"
            className="group flex items-center gap-2.5 cursor-pointer"
          >
            <span className="grid size-9 place-items-center rounded-xl border border-accent/30 bg-accent/15 font-mono text-[0.7rem] font-semibold tracking-tight text-accent transition-colors duration-200 group-hover:border-accent/50">
              MIC
            </span>
            <span className="font-mono text-sm font-medium text-fg">
              minhazul<span className="text-faint">.dev</span>
            </span>
          </a>

          {/* Center — desktop nav links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="cursor-pointer rounded-full px-3 py-2 font-mono text-sm text-muted transition-colors duration-200 hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right — desktop socials + résumé */}
          <div className="hidden items-center gap-1.5 lg:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid size-9 cursor-pointer place-items-center rounded-full text-muted transition-colors duration-200 hover:bg-white/5 hover:text-fg"
            >
              <Icon name="github" size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid size-9 cursor-pointer place-items-center rounded-full text-muted transition-colors duration-200 hover:bg-white/5 hover:text-fg"
            >
              <Icon name="linkedin" size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn-primary ml-1.5 !px-4 !py-2 !text-sm"
            >
              <Icon name="download" size={16} />
              Résumé
            </a>
          </div>

          {/* Mobile — hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-white/10 text-fg transition-colors duration-200 hover:bg-white/5 lg:hidden"
          >
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>

        {/* Mobile — dropdown panel */}
        {open && (
          <div className="card mt-2 p-3 lg:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-[44px] cursor-pointer items-center rounded-xl px-4 font-mono text-base text-muted transition-colors duration-200 hover:bg-white/5 hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="divider my-3" />

            <div className="flex items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  onClick={closeMenu}
                  className="grid size-11 cursor-pointer place-items-center rounded-xl border border-white/10 text-muted transition-colors duration-200 hover:bg-white/5 hover:text-fg"
                >
                  <Icon name="github" size={18} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  onClick={closeMenu}
                  className="grid size-11 cursor-pointer place-items-center rounded-xl border border-white/10 text-muted transition-colors duration-200 hover:bg-white/5 hover:text-fg"
                >
                  <Icon name="linkedin" size={18} />
                </a>
              </div>
              <a
                href={profile.resumeUrl}
                download
                onClick={closeMenu}
                className="btn-primary flex-1 !py-2.5 !text-sm"
              >
                <Icon name="download" size={16} />
                Résumé
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
