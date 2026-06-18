"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import SparkleButton from "./SparkleButton";
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
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto max-w-5xl px-4">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between gap-3 rounded-full bg-bg px-3 py-2 transition-shadow duration-300 sm:px-4 ${
            scrolled ? "raise-lg" : "raise"
          }`}
        >
          {/* Left — monogram + wordmark */}
          <a
            href="#top"
            aria-label="Home"
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="grid h-[38px] w-[38px] place-items-center rounded-2xl bg-bg inset-sm font-mono text-[0.72rem] font-bold tracking-tight text-accent">
              MIC
            </span>
            <span className="hidden font-mono text-sm font-semibold text-fg sm:inline">
              Minkha<span className="text-faint">.dev</span>
            </span>
          </a>

          {/* Center — desktop nav links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 font-mono text-sm text-muted transition-colors duration-200 hover:text-accent cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right — desktop socials + résumé */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              aria-label="GitHub profile"
              className="grid h-[38px] w-[38px] place-items-center rounded-full bg-bg raise-sm text-muted transition-all duration-200 hover:text-accent hover:inset-sm cursor-pointer"
            >
              <Icon name="github" size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn profile"
              className="grid h-[38px] w-[38px] place-items-center rounded-full bg-bg raise-sm text-muted transition-all duration-200 hover:text-accent hover:inset-sm cursor-pointer"
            >
              <Icon name="linkedin" size={18} />
            </a>
            <SparkleButton
              href={profile.resumeUrl}
              label="Résumé"
              download
              size="compact"
            />
          </div>

          {/* Mobile — hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-[42px] w-[42px] place-items-center rounded-2xl bg-bg raise-sm text-fg transition-all duration-200 hover:text-accent lg:hidden cursor-pointer"
          >
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </nav>

        {/* Mobile — dropdown panel */}
        {open && (
          <div className="card mt-2 p-3 lg:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-[44px] items-center rounded-2xl px-3 font-mono text-base text-muted transition-colors duration-200 hover:text-accent cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="divider my-3" />

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener"
                aria-label="GitHub profile"
                onClick={closeMenu}
                className="grid h-[42px] w-[42px] place-items-center rounded-full bg-bg raise-sm text-muted transition-all duration-200 hover:text-accent hover:inset-sm cursor-pointer"
              >
                <Icon name="github" size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn profile"
                onClick={closeMenu}
                className="grid h-[42px] w-[42px] place-items-center rounded-full bg-bg raise-sm text-muted transition-all duration-200 hover:text-accent hover:inset-sm cursor-pointer"
              >
                <Icon name="linkedin" size={18} />
              </a>
              <SparkleButton
                href={profile.resumeUrl}
                label="Résumé"
                download
                onClick={closeMenu}
                className="ml-auto"
                size="compact"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
