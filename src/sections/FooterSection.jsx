import { footerLinks } from "../assets/siteContent";

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-white">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <a
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-white/5 pb-10 pt-16">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-md">
          <p className="font-display text-xl tracking-[0.16em] text-white">
            ZordexAI
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            A futuristic AI platform for PCB review, diagnostics, and electronics
            delivery, built for teams that need AI-guided hardware execution at scale.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Quick Links" links={footerLinks.quickLinks} />
          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="About" links={footerLinks.about} />
          <FooterColumn title="Social Links" links={footerLinks.social} />
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-white/5 pt-6">
        <p className="text-sm text-slate-500">
          © 2026 ZordexAI. Designed for scalable AI + electronics product growth.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
