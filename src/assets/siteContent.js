import {
  Activity,
  BarChart3,
  Binary,
  Bot,
  BrainCircuit,
  CircuitBoard,
  Cpu,
  Factory,
  FileSearch,
  Microchip,
  Package,
  Radio,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "ZordexAI", href: "#product" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
];

export const heroHighlights = [
  {
    title: "Automated Review",
    value: "PCB checks",
    icon: Bot,
  },
  {
    title: "Fault Insights",
    value: "AI diagnostics",
    icon: Activity,
  },
  {
    title: "Build Velocity",
    value: "Faster launches",
    icon: Zap,
  },
  {
    title: "Design Signals",
    value: "Actionable analytics",
    icon: BarChart3,
  },
];

export const services = [
  {
    title: "PCB Design",
    description: "Single-layer to advanced multi-layer layout design with manufacturability in mind.",
    icon: CircuitBoard,
  },
  {
    title: "PCB Fabrication",
    description: "Reliable prototype and production fabrication workflows for precision boards.",
    icon: Factory,
  },
  {
    title: "PCB Assembly",
    description: "SMT and through-hole assembly services with quality-focused process control.",
    icon: Cpu,
  },
  {
    title: "PCB Repair & Bulk Services",
    description: "Rapid diagnostics, repair, and volume support for industrial electronics.",
    icon: Wrench,
  },
  {
    title: "IoT Product Development",
    description: "Connected device engineering from hardware architecture to deployment readiness.",
    icon: Radio,
  },
  {
    title: "Embedded Systems Design",
    description: "Firmware-aware electronics design for robust embedded products and controllers.",
    icon: Microchip,
  },
  {
    title: "Reverse Engineering",
    description: "Board-level analysis and recreation support for legacy or undocumented hardware.",
    icon: Binary,
  },
  {
    title: "Electronic Component Supply",
    description: "Component sourcing support to keep your builds moving with dependable procurement.",
    icon: Package,
  },
];

export const productFeatures = [
  {
    title: "PCB Design Review Automation",
    description: "Analyze layouts, identify design rule concerns, and surface review-ready recommendations.",
    icon: ShieldCheck,
  },
  {
    title: "Hardware Fault Detection",
    description: "Spot signal, component, and assembly issues earlier with contextual AI diagnostics.",
    icon: Activity,
  },
  {
    title: "Embedded Debug Assistance",
    description: "Correlate firmware symptoms with board behavior to speed up root-cause analysis.",
    icon: BrainCircuit,
  },
  {
    title: "Log Analysis Engine",
    description: "Transform noisy debug logs into structured summaries, anomalies, and next actions.",
    icon: FileSearch,
  },
  {
    title: "Smart Recommendations",
    description: "Generate practical fixes, optimization ideas, and production-focused improvement paths.",
    icon: Sparkles,
  },
];

export const expertise = [
  "Hardware & Software Design (IoT & Automation)",
  "PCB Design - Single to Multi-Layer",
  "PCB Repair - All Types & Bulk Repair",
  "Electronic Components Supply",
  "PCB Assembly - SMT & Through-Hole",
  "PCB Fabrication - Single & Double Layer",
];

export const footerLinks = {
  quickLinks: navLinks,
  services: services.slice(0, 4).map((service) => ({
    label: service.title,
    href: "#services",
  })),
  about: [
    { label: "About ZordexAI", href: "#about" },
    { label: "Domain Expertise", href: "#expertise" },
    { label: "Contact CTA", href: "#contact" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Email", href: "mailto:ziggcoder@zordexai.com" },
  ],
};
