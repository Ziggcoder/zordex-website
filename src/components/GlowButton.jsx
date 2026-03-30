import { ArrowRight, Play } from "lucide-react";

function GlowButton({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className = "",
}) {
  const Icon = icon === "play" ? Play : ArrowRight;

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4" />
    </a>
  );
}

export default GlowButton;
