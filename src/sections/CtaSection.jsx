import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import GlassPanel from "../components/GlassPanel";

function CtaSection() {
  return (
    <section id="contact" className="section-shell py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <GlassPanel className="relative overflow-hidden px-6 py-10 text-center md:px-10 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,255,0.15),transparent_30%)]" />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-electric-300/20 bg-electric-400/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-electric-100">
              Build Smarter Electronics with ZordexAI
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
              Move from design uncertainty to AI-guided electronics execution.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              Use ZordexAI to tighten PCB review cycles, accelerate troubleshooting,
              and support product teams with engineering services that scale.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlowButton href="#hero">Try ZordexAI</GlowButton>
              <GlowButton href="mailto:ziggcoder@zordexai.com" variant="secondary">
                Contact Us
              </GlowButton>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </section>
  );
}

export default CtaSection;
