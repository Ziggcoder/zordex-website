import { motion } from "framer-motion";
import GlassPanel from "../components/GlassPanel";
import SectionHeading from "../components/SectionHeading";

const aboutStats = [
  { label: "Experience", value: "20+ Years" },
  { label: "Delivery Model", value: "Design to Manufacturing" },
  { label: "Positioning", value: "AI + Electronics" },
];

function AboutSection() {
  return (
    <section id="about" className="section-shell py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="About ZordexAI"
            title="Electronics depth powering a next-generation AI platform"
            description="ZordexAI is an advanced electronics design and manufacturing brand offering PCB Design, IoT Product Development, Embedded Systems, Firmware, and contract manufacturing services. With over 20 years of experience, we transform ideas into reliable electronic products."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid gap-5"
        >
          {aboutStats.map((item) => (
            <GlassPanel key={item.label} className="flex items-center justify-between gap-4 p-6">
              <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
                {item.label}
              </span>
              <span className="text-lg font-medium text-white">{item.value}</span>
            </GlassPanel>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
