import { motion } from "framer-motion";
import { services } from "../assets/siteContent";
import GlassPanel from "../components/GlassPanel";
import SectionHeading from "../components/SectionHeading";

function ServicesSection() {
  return (
    <section id="services" className="section-shell py-24">
      <SectionHeading
        eyebrow="Our Electronics Services"
        title="End-to-end electronics execution for modern hardware teams"
        description="From PCB architecture to assembly, repair, and sourcing, ZordexAI is backed by the engineering services needed to ship reliable electronics at speed."
        align="center"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <GlassPanel className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-electric-300/30 hover:bg-white/[0.08]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-electric-300/25 bg-electric-400/10 text-electric-100 shadow-neon">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
              </GlassPanel>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
