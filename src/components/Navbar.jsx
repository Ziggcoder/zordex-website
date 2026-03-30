import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../assets/siteContent";
import GlowButton from "./GlowButton";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 text-white">
          <span className="logo-badge flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-electric-400/30 bg-electric-400/10 shadow-neon">
            <img
              src="/assets/zordex-logo.png"
              alt="ZordexAI logo"
              className="logo-mark h-12 w-12 object-contain"
            />
          </span>
          <span>
            <span className="block font-display text-lg tracking-[0.18em] text-white">
              ZordexAI
            </span>
            <span className="block text-xs text-slate-400">
              PCB Intelligence Platform
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GlowButton href="#contact">Get Started</GlowButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="section-shell flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                >
                  {link.label}
                </a>
              ))}
              <GlowButton href="#contact" className="w-full" icon="arrow">
                Get Started
              </GlowButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
