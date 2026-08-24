import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Final Logo Pack",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Lockup",
    files: [
      { name: "hapyzo-logo-master.png", note: "posters / print" },
      { name: "hapyzo-logo-on-dark.png", note: "dark backgrounds" },
    ],
  },
  {
    title: "Icon",
    files: [
      { name: "hapyzo-icon.svg", note: "color" },
      { name: "hapyzo-icon-on-dark.svg", note: "dark UI" },
      { name: "hapyzo-icon-white.svg", note: "white" },
      { name: "hapyzo-icon-black.svg", note: "black" },
      { name: "hapyzo-icon-512.png", note: "512×512" },
    ],
  },
  {
    title: "Favicon",
    files: [
      { name: "favicon.ico", note: "classic" },
      { name: "favicon-48.png", note: "48×48" },
      { name: "apple-touch-icon.png", note: "180×180" },
      { name: "icon-192.png", note: "192×192" },
    ],
  },
] as const;

export default function FinalLogoPage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "48px 20px 80px",
        color: "#e2e8f0",
      }}
    >
      <Link href="/" style={{ color: "#38bdf8", textDecoration: "none", fontSize: 14 }}>
        ← hapyzo.com
      </Link>
      <h1 style={{ margin: "16px 0 8px", fontSize: 28 }}>Final Logo Pack</h1>
      <p style={{ color: "#94a3b8", marginBottom: 32, lineHeight: 1.5 }}>
        Official assets for posters, print, and other projects. Open a file, then save.
      </p>

      {sections.map((section) => (
        <section key={section.title} style={{ marginBottom: 28 }}>
          <h2
            style={{
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#94a3b8",
              margin: "0 0 12px",
            }}
          >
            {section.title}
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              border: "1px solid rgba(148,163,184,0.2)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {section.files.map((file, i) => (
              <li
                key={file.name}
                style={{
                  borderTop: i === 0 ? undefined : "1px solid rgba(148,163,184,0.2)",
                }}
              >
                <a
                  href={`/FINAL-LOGO/${file.name}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "14px 16px",
                    color: "#e2e8f0",
                    textDecoration: "none",
                    background: "#0f172a",
                  }}
                >
                  <span>{file.name}</span>
                  <span style={{ color: "#94a3b8", fontSize: 14 }}>{file.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
