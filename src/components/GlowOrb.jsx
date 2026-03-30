import { motion } from "framer-motion";
import { heroHighlights } from "../assets/siteContent";
import GlassPanel from "./GlassPanel";

function HighlightCard({ item, className }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      <GlassPanel className="w-full p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric-300/25 bg-electric-400/10 text-electric-200">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm text-slate-400">{item.title}</p>
            <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  );
}

function GlowOrb() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl px-4 pb-10 md:mt-20">
      <div className="absolute inset-x-12 top-24 h-72 rounded-full bg-electric-500/20 blur-3xl" />
      <div className="relative hidden min-h-[25rem] items-center justify-center md:flex">
        <HighlightCard
          item={heroHighlights[0]}
          className="absolute left-0 top-10 w-56 animate-float"
        />
        <HighlightCard
          item={heroHighlights[1]}
          className="absolute right-0 top-8 w-60"
        />
        <HighlightCard
          item={heroHighlights[2]}
          className="absolute bottom-12 left-8 w-56"
        />
        <HighlightCard
          item={heroHighlights[3]}
          className="absolute bottom-6 right-10 w-60 animate-float"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[1px] w-[68%] bg-gradient-to-r from-transparent via-electric-300/35 to-transparent" />
          <div className="absolute h-[68%] w-[1px] bg-gradient-to-b from-transparent via-electric-300/35 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex h-80 w-80 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-electric-300/20 bg-electric-500/10 blur-2xl" />
          <div className="absolute inset-3 animate-orbit rounded-full border border-electric-300/25" />
          <div className="absolute inset-8 animate-orbit rounded-full border border-cyan-300/20 [animation-direction:reverse]" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(113,226,255,0.95),rgba(0,119,255,0.48)_24%,rgba(6,11,32,0.02)_62%)] opacity-80 blur-xl" />
          <div className="orb-shell flex h-56 w-56 items-center justify-center rounded-full">
            <div className="orb-core flex h-44 w-44 items-center justify-center rounded-full">
              <div className="h-24 w-24 rounded-full border border-white/10 bg-white/10 blur-sm" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-4 md:hidden">
        <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-electric-500/20 blur-3xl" />
          <div className="absolute inset-4 animate-orbit rounded-full border border-electric-300/20" />
          <div className="absolute inset-10 animate-orbit rounded-full border border-cyan-300/20 [animation-direction:reverse]" />
          <div className="orb-shell flex h-48 w-48 items-center justify-center rounded-full">
            <div className="orb-core h-36 w-36 rounded-full" />
          </div>
        </div>
        {heroHighlights.map((item) => (
          <HighlightCard key={item.title} item={item} className="w-full" />
        ))}
      </div>
    </div>
  );
}

export default GlowOrb;
