export type LogoGroup = "lockup" | "icon";

export type AdminLogoFile = {
  group: LogoGroup;
  file: string;
  note: string;
  updated: string;
};

/** Site working copies in public/Logo, newest commit first within each type. */
export const adminLogoFiles: AdminLogoFile[] = [
  { group: "lockup", file: "hapyzo-logo-on-dark.png", note: "site lockup", updated: "2026-08-24 15:36" },
  { group: "lockup", file: "hapyzo-logo-reference-match.png", note: "reference match", updated: "2026-08-24 15:18" },
  { group: "lockup", file: "hapyzo-logo.png", note: "full PNG", updated: "2026-08-24 14:47" },
  { group: "lockup", file: "hapyzoLogopng.png", note: "PNG export", updated: "2026-08-24 14:47" },
  { group: "lockup", file: "hapyzo-logo-original.png", note: "original", updated: "2026-08-24 14:47" },
  { group: "lockup", file: "hapyzo-logo-reference.png", note: "reference", updated: "2026-08-24 14:47" },
  { group: "lockup", file: "hapyzo-logo.svg", note: "color SVG", updated: "2026-08-24 14:47" },
  { group: "lockup", file: "hapyzo-logo-white.svg", note: "white", updated: "2026-08-24 14:47" },
  { group: "lockup", file: "hapyzo-logo-black.svg", note: "black", updated: "2026-08-24 14:29" },
  { group: "lockup", file: "hapyzo-logo-dark.svg", note: "dark", updated: "2026-08-24 14:29" },
  { group: "icon", file: "hapyzo-icon-on-dark.svg", note: "dark UI", updated: "2026-08-24 15:25" },
  { group: "icon", file: "hapyzo-icon.svg", note: "color", updated: "2026-08-24 14:47" },
  { group: "icon", file: "hapyzo-icon-white.svg", note: "white", updated: "2026-08-24 14:47" },
  { group: "icon", file: "hapyzo-icon-black.svg", note: "black", updated: "2026-08-24 14:29" },
  { group: "icon", file: "hapyzo-icon-dark.svg", note: "dark", updated: "2026-08-24 14:29" },
];

export const logoGroupLabel: Record<LogoGroup, string> = {
  lockup: "Lockup",
  icon: "Icon",
};

export function logosInGroup(group: LogoGroup | "all") {
  if (group === "all") return adminLogoFiles;
  return adminLogoFiles.filter((item) => item.group === group);
}
