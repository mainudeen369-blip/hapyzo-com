"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/#work", label: "Work" },
  { href: "/speaklo", label: "Speaklo" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav">
        <Link href="/" className="brand">
          <Image src="/logo.svg" alt="Hapyzo" width={36} height={36} priority />
          Hapyzo
        </Link>
        <ul className="nav-links">
          {links.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/#contact" className="btn btn-primary nav-cta">
          Start a project
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <p>© {new Date().getFullYear()} Hapyzo Technologies. All rights reserved.</p>
        <nav>
          <Link href="/speaklo">Speaklo</Link>
          <a href="https://propertymanager.hapyzo.com" target="_blank" rel="noreferrer">
            Property Manager
          </a>
          <a href="mailto:hapyzotechnologies@gmail.com">Email</a>
          <a href="https://wa.me/918610159248" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  );
}
