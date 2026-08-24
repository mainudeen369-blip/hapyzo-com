import Image from "next/image";

type BrandLogoProps = {
  variant?: "icon" | "lockup";
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  priority?: boolean;
};

const iconPx = { sm: 30, md: 44, lg: 72, hero: 110 } as const;

export function BrandLogo({
  variant = "lockup",
  tone = "dark",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const px = iconPx[size];
  // Dark-site icon keeps the bright gradient mark readable on dark UI
  const iconSrc = tone === "dark" ? "/Logo/hapyzo-icon-on-dark.svg" : "/Logo/hapyzo-icon.svg";

  if (variant === "icon") {
    return (
      <span className={`brand-logo brand-logo--icon brand-logo--${size} ${className}`.trim()}>
        <span className="brand-logo__glow" aria-hidden />
        <Image
          src={iconSrc}
          alt="Hapyzo"
          width={px}
          height={px}
          priority={priority}
          className="brand-logo__img"
        />
      </span>
    );
  }

  // Lockup = mark + crisp white wordmark (no PNG plate / no white box)
  return (
    <span
      className={`brand-logo brand-logo--lockup brand-logo--${size} brand-logo--${tone} ${className}`.trim()}
    >
      <span className="brand-logo__glow" aria-hidden />
      <Image
        src={iconSrc}
        alt=""
        width={px}
        height={px}
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
