import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import GlowOrb from "../components/GlowOrb";

function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12">
      <div className="hero-grid-lines absolute inset-0 opacity-40" />
      <div className="hero-spotlight absolute inset-x-0 top-0 h-[42rem]" />

      <div className="section-shell relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-6 inline-flex items-center rounded-full border border-electric-300/20 bg-electric-400/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-electric-100">
            AI-Powered PCB Intelligence
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
            ZordexAI{" "}
            <span className="text-gradient">
              Your AI Assistant for PCB Review & Electronics Innovation
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Automate PCB review, detect faults, and accelerate electronics
            product development with AI-powered precision.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GlowButton href="#contact">Get Started</GlowButton>
            <GlowButton href="#product" variant="secondary" icon="play">
              See Demo
            </GlowButton>
          </div>
        </motion.div>

        <GlowOrb />
      </div>
    </section>
  );
}

export default HeroSection;
