"use client";

import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="41" viewBox="0 0 40 58" fill="none" aria-hidden="true">
      <path
        d="M4 56 L24 2"
        stroke="oklch(0.510 0.155 10)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M16 56 L36 2"
        stroke="oklch(0.510 0.155 10)"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 lg:px-16 pt-4 sm:pt-6 transition-[padding] duration-300">
      <div
        className={`rounded-xl px-4 py-2.5 flex items-center justify-between gap-6 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_var(--shadow-primary)]"
            : "liquid-glass"
        }`}
      >

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0" aria-label="Drive With Nayyer home">
          <span className="flex h-10 w-8 items-center justify-center">
            <LogoMark />
          </span>
          <span className="flex flex-col justify-center leading-none">
            <span
              className={`font-body text-[0.58rem] uppercase tracking-[0.38em] transition-colors duration-300 ${
                scrolled ? "text-ink/45" : "text-white/60"
              }`}
            >
              Drive With
            </span>
            <span
              className={`mt-1 font-display text-[1.05rem] font-black uppercase tracking-[0.18em] transition-colors duration-300 ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              Nayyer
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-body font-semibold transition-colors duration-200 ${
                scrolled
                  ? "text-ink/70 hover:text-primary-deep"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#packages"
          className={`hidden md:inline-flex items-center px-6 py-2 rounded-lg font-display font-semibold text-sm transition-colors duration-200 ${
            scrolled
              ? "bg-accent text-ink hover:bg-accent-deep"
              : "bg-white text-black hover:bg-white/90"
          }`}
        >
          Book a Lesson
        </a>

        {/* Mobile hamburger */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className={`md:hidden p-2 -mr-1 rounded-lg transition-colors ${
                scrolled
                  ? "text-ink hover:bg-primary-pale"
                  : "text-white hover:bg-white/15"
              }`}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden" />
            <Dialog.Content
              className="fixed top-0 right-0 bottom-0 w-72 bg-zinc-900/95 backdrop-blur-xl z-50 flex flex-col shadow-2xl md:hidden"
              aria-describedby={undefined}
            >
              <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>

              <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
                <span className="font-display font-semibold text-white text-sm">Menu</span>
                <Dialog.Close asChild>
                  <button
                    className="p-2 -mr-1 text-white rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <CloseIcon />
                  </button>
                </Dialog.Close>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Dialog.Close asChild key={link.href}>
                    <a
                      href={link.href}
                      className="px-4 py-3 rounded-xl font-body font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </Dialog.Close>
                ))}
              </nav>

              <div className="p-5 border-t border-white/10">
                <Dialog.Close asChild>
                  <a
                    href="#packages"
                    className="flex items-center justify-center w-full py-3.5 rounded-lg bg-white text-black font-display font-semibold text-sm hover:bg-white/90 transition-colors"
                  >
                    Book a Lesson
                  </a>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </div>
    </header>
  );
}
