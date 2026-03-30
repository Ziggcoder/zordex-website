import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`max-w-3xl ${alignment}`}
    >
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-electric-400/25 bg-electric-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-electric-200">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;
