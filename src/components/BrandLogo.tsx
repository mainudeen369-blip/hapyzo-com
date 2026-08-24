import Image from "next/image";

type BrandLogoProps = {
  variant?: "icon" | "lockup";
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { icon: 30, lockupW: 168, lockupH: 52 },
  md: { icon: 44, lockupW: 220, lockupH: 68 },
  lg: { icon: 72, lockupW: 300, lockupH: 92 },
  hero: { icon: 120, lockupW: 380, lockupH: 118 },
} as const;

export function BrandLogo({
  variant = "lockup",
  tone = "dark",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const dim = sizes[size];

  // Full lockup = exact PNG (matches your GPT logo)
  if (variant === "lockup") {
    const src =
      tone === "dark" ? "/Logo/hapyzo-logo-on-dark.png" : "/Logo/hapyzo-logo.png";
    return (
      <span className={`brand-logo brand-logo--lockup brand-logo--${size} ${className}`.trim()}>
        <span className="brand-logo__glow" aria-hidden />
        <Image
          src={src}
          alt="Hapyzo Technologies"
          width={dim.lockupW}
          height={dim.lockupH}
          priority={priority}
          className="brand-logo__img"
        />
      </span>
    );
  }

  // Icon-only fallback (favicon / small marks)
  return (
    <span className={`brand-logo brand-logo--icon brand-logo--${size} ${className}`.trim()}>
      <span className="brand-logo__glow" aria-hidden />
      <Image
        src="/Logo/hapyzo-icon.svg"
        alt="Hapyzo"
        width={dim.icon}
        height={dim.icon}
        priority={priority}
        className="brand-logo__img"
      />
    </span>
  );
}
