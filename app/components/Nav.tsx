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

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_oklch(0.38_0.15_200/0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <span
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-display font-black select-none"
            aria-hidden="true"
          >
            N
          </span>
          <span className="font-display font-semibold text-ink text-[15px] leading-tight">
            Driving With<br />
            <span className="text-primary">Nayyer</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-semibold text-ink/70 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#packages"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-ink font-display font-semibold text-sm hover:bg-accent-deep transition-colors duration-200"
        >
          Book a Lesson
        </a>

        {/* Mobile hamburger */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className="md:hidden p-2 -mr-1 text-ink rounded-lg hover:bg-primary-pale transition-colors"
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-ink/30 backdrop-blur-sm z-50 md:hidden" />
            <Dialog.Content
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 flex flex-col shadow-2xl md:hidden"
              aria-describedby={undefined}
            >
              <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>

              <div className="flex items-center justify-between px-5 h-16 border-b border-surface">
                <span className="font-display font-semibold text-ink text-sm">Menu</span>
                <Dialog.Close asChild>
                  <button
                    className="p-2 -mr-1 text-ink rounded-lg hover:bg-primary-pale transition-colors"
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
                      className="px-4 py-3 rounded-xl font-body font-semibold text-ink hover:bg-primary-pale hover:text-primary transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </Dialog.Close>
                ))}
              </nav>

              <div className="p-5 border-t border-surface">
                <Dialog.Close asChild>
                  <a
                    href="#packages"
                    className="flex items-center justify-center w-full py-3.5 rounded-full bg-accent text-ink font-display font-semibold text-sm hover:bg-accent-deep transition-colors"
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
