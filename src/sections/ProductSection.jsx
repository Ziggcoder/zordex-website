import { motion } from "framer-motion";
import { productFeatures } from "../assets/siteContent";
import GlassPanel from "../components/GlassPanel";
import SectionHeading from "../components/SectionHeading";

function ProductSection() {
  return (
    <section id="product" className="section-shell py-24">
      <div className="grid items-center gap-12 xl:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow="Introducing ZordexAI"
            title="AI analysis built for PCB design review, debug cycles, and electronics reliability"
            description="ZordexAI is an intelligent AI assistant designed to analyze PCB designs, detect faults, suggest improvements, and help engineers build reliable electronics faster."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {productFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <GlassPanel className="h-full p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-electric-300/25 bg-electric-400/10 text-electric-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-medium text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {feature.description}
                    </p>
                  </GlassPanel>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-8 rounded-full bg-electric-500/15 blur-3xl" />
          <GlassPanel className="relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,255,0.12),transparent_35%)]" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-electric-200">
                    AI Review Flow
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Upload PCB / Logs -&gt; AI Analysis -&gt; Insights
                  </h3>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Live pipeline
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Upload Inputs",
                    text: "Gerbers, schematics, BOMs, test reports, and embedded logs are pulled into one review surface.",
                  },
                  {
                    step: "02",
                    title: "AI Analysis",
                    text: "Context-aware checks map layout, manufacturing, and debug signals into a structured diagnostics layer.",
                  },
                  {
                    step: "03",
                    title: "Actionable Insights",
                    text: "Your team gets prioritized issues, explanation trails, and recommendations for the next design pass.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="rounded-3xl border border-white/10 bg-slate-950/50 p-5"
                  >
                    <span className="text-sm font-medium text-electric-200">
                      {item.step}
                    </span>
                    <h4 className="mt-3 text-lg font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-electric-300/15 bg-slate-950/60 p-5">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Design rule flags
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Fault clusters
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Debug timelines
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Manufacturing suggestions
                  </span>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductSection;
