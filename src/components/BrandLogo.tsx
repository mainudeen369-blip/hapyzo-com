import Image from "next/image";

type BrandLogoProps = {
  variant?: "icon" | "lockup";
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { icon: 28, lockupW: 140, lockupH: 35 },
  md: { icon: 40, lockupW: 168, lockupH: 42 },
  lg: { icon: 72, lockupW: 240, lockupH: 60 },
  hero: { icon: 112, lockupW: 320, lockupH: 80 },
} as const;

export function BrandLogo({
  variant = "icon",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const dim = sizes[size];

  if (variant === "lockup") {
    return (
      <span className={`brand-logo brand-logo--lockup brand-logo--${size} ${className}`.trim()}>
        <Image
          src="/Logo/hapyzo-logo-white.svg"
          alt="Hapyzo Technologies"
          width={dim.lockupW}
          height={dim.lockupH}
          priority={priority}
          className="brand-logo__img"
        />
      </span>
    );
  }

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
