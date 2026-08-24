import Image from "next/image";

type BrandLogoProps = {
  variant?: "icon" | "lockup";
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { icon: 30, lockupW: 190, lockupH: 58 },
  md: { icon: 44, lockupW: 240, lockupH: 74 },
  lg: { icon: 72, lockupW: 320, lockupH: 98 },
  hero: { icon: 110, lockupW: 400, lockupH: 122 },
} as const;

export function BrandLogo({
  variant = "lockup",
  tone = "dark",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const dim = sizes[size];

  // Exact GPT logo lockup (font + mark) as transparent PNG
  if (variant === "lockup" && tone === "dark") {
    return (
      <span className={`brand-logo brand-logo--png brand-logo--${size} ${className}`.trim()}>
        <span className="brand-logo__glow" aria-hidden />
        <Image
          src="/Logo/hapyzo-logo-on-dark.png"
          alt="Hapyzo Technologies"
          width={dim.lockupW}
          height={dim.lockupH}
          priority={priority}
          className="brand-logo__img"
        />
      </span>
    );
  }

  const iconSrc = tone === "dark" ? "/Logo/hapyzo-icon-on-dark.svg" : "/Logo/hapyzo-icon.svg";

  if (variant === "icon") {
    return (
      <span className={`brand-logo brand-logo--icon brand-logo--${size} ${className}`.trim()}>
        <span className="brand-logo__glow" aria-hidden />
        <Image
          src={iconSrc}
          alt="Hapyzo"
          width={dim.icon}
          height={dim.icon}
          priority={priority}
          className="brand-logo__img"
        />
      </span>
    );
  }

  // Light-tone fallback lockup (Montserrat ≈ logo font)
  return (
    <span
      className={`brand-logo brand-logo--lockup brand-logo--${size} brand-logo--${tone} ${className}`.trim()}
    >
      <span className="brand-logo__glow" aria-hidden />
      <Image
        src={iconSrc}
        alt=""
        width={dim.icon}
        height={dim.icon}
        priority={priority}
        className="brand-logo__mark"
        aria-hidden
      />
      <span className="brand-logo__wordmark">
        <span className="brand-logo__name">Hapyzo</span>
        <span className="brand-logo__tag">Technologies</span>
      </span>
    </span>
  );
}
