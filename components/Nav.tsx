"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#050505]/95 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-[#22c55e] flex items-center justify-center">
            <span className="text-black font-bold text-xs font-mono">N</span>
          </div>
          <span className="font-display font-bold text-lg tracking-wide text-white">
            Nexus
            <span className="text-[#22c55e]">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-white/40">
          <li>
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200"
            >
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-white transition-colors duration-200"
            >
              {t("nav.features")}
            </a>
          </li>
          <li>
            <a
              href="#method"
              className="hover:text-white transition-colors duration-200"
            >
              {t("nav.how")}
            </a>
          </li>
          <li>
            <a
              href="#why"
              className="hover:text-white transition-colors duration-200"
            >
              {t("nav.proof")}
            </a>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-white transition-colors duration-200"
            >
              {t("nav.blog")}
            </Link>
          </li>
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="font-mono text-xs text-white/40 hover:text-[#22c55e] transition-colors border border-white/10 hover:border-[#22c55e]/40 px-3 py-1.5"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <a
            href="#offer"
            className="hidden md:block btn-primary px-5 py-2 text-xs uppercase tracking-widest"
          >
            {t("nav.cta")}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block w-5 h-px bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#050505] border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {[
            { href: "/", label: t("nav.home") },
            { href: "#services", label: t("nav.features") },
            { href: "#method", label: t("nav.how") },
            { href: "#why", label: t("nav.proof") },
            { href: "/blog", label: t("nav.blog") },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 hover:text-white uppercase tracking-widest"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#offer"
            className="btn-primary px-5 py-3 text-xs uppercase tracking-widest text-center mt-2"
          >
            {t("nav.cta")}
          </a>
        </div>
      )}
    </nav>
  );
}
