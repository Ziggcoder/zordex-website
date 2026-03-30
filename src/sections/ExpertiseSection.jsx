import { motion } from "framer-motion";
import { expertise } from "../assets/siteContent";
import GlassPanel from "../components/GlassPanel";
import SectionHeading from "../components/SectionHeading";

function ExpertiseSection() {
  return (
    <section id="expertise" className="section-shell py-24">
      <SectionHeading
        eyebrow="Domain Expertise"
        title="Built for teams shipping hardware in the real world"
        description="We combine electronics engineering services with AI-assisted review workflows so hardware teams can move from concept to dependable production with more confidence."
        align="center"
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {expertise.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <GlassPanel className="flex h-full items-center gap-4 p-5">
              <span className="h-3 w-3 rounded-full bg-electric-300 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
              <p className="text-sm leading-7 text-slate-200">{item}</p>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExpertiseSection;
