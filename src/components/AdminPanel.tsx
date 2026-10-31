"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { AdminProject, ProjectStatus } from "../data/admin-projects";
import { statusLabel } from "../data/admin-projects";
import { adminLogoFiles, logoGroupLabel, type LogoGroup } from "../data/admin-logos";
import { BrandLogo } from "./BrandLogo";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Wrong password");
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Login failed");
      setLoading(false);
    }
  }

  return (
    <div className="admin-login">
      <BrandLogo variant="lockup" tone="dark" size="md" />
      <h1>Project registry</h1>
      <p>Internal reference — hosting, mail, GitHub, live vs not.</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="admin-pass">Password</label>
        <input
          id="admin-pass"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error ? <p className="admin-error">{error}</p> : null}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Checking…" : "Enter"}
        </button>
      </form>
    </div>
  );
}

export function AdminDashboard({ projects }: { projects: AdminProject[] }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | ProjectStatus>("all");
  const [onlySite, setOnlySite] = useState(false);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return projects.filter((p) => {
      if (status !== "all" && p.status !== status) return false;
      if (onlySite && !p.shownOnSite) return false;
      if (!needle) return true;
      const blob = [p.name, p.description, p.hosting, p.mail, p.domain, p.github, p.stack, p.notes]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return blob.includes(needle);
    });
  }, [projects, q, status, onlySite]);

  const live = filtered.filter((p) => p.status === "live");
  const rest = filtered.filter((p) => p.status !== "live");

  async function logout() {
    await fetch("/api/admin-login", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="admin-dash">
      <header className="admin-top">
        <div>
          <BrandLogo variant="lockup" tone="dark" size="sm" />
          <h1>Hapyzo · project registry</h1>
          <p>Private notes for hosting, domains, mail, and GitHub repos.</p>
        </div>
        <button type="button" className="btn btn-ghost" onClick={logout}>
          Log out
        </button>
      </header>

      <LogoDownloads />

      <div className="admin-filters">
        <input
          type="search"
          placeholder="Search name, host, mail, repo…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value as "all" | ProjectStatus)}>
          <option value="all">All statuses</option>
          <option value="live">Live</option>
          <option value="demo">Demo</option>
          <option value="internal">Internal</option>
          <option value="archived">Archived</option>
        </select>
        <label className="admin-check">
          <input type="checkbox" checked={onlySite} onChange={(e) => setOnlySite(e.target.checked)} />
          Shown on hapyzo.com only
        </label>
      </div>

      <p className="admin-count">
        Showing {filtered.length} · Live {live.length} · Other {rest.length}
      </p>

      <section className="admin-section">
        <h2>Live</h2>
        <div className="admin-grid">
          {live.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
          {!live.length ? <p className="admin-empty">No live matches.</p> : null}
        </div>
      </section>

      <section className="admin-section">
        <h2>Not live / internal / archived</h2>
        <div className="admin-grid">
          {rest.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
          {!rest.length ? <p className="admin-empty">No other matches.</p> : null}
        </div>
      </section>
    </div>
  );
}

function LogoDownloads() {
  const groups: LogoGroup[] = ["lockup", "icon"];

  return (
    <section className="admin-section admin-logos">
      <div className="admin-card-head">
        <h2>Logo downloads</h2>
        <a className="btn btn-primary" href="/api/admin-logos?group=all">
          Download all types
        </a>
      </div>
      <p>Latest pack from the Logo folder. Newest file is the site lockup, 24 Aug 2026 15:36.</p>
      <div className="admin-grid">
        {groups.map((group) => {
          const files = adminLogoFiles.filter((item) => item.group === group);
          return (
            <article key={group} className="admin-card">
              <div className="admin-card-head">
                <h3>{logoGroupLabel[group]}</h3>
                <a className="btn btn-ghost" href={`/api/admin-logos?group=${group}`}>
                  Download {logoGroupLabel[group].toLowerCase()}
                </a>
              </div>
              <ul className="admin-logo-list">
                {files.map((item) => (
                  <li key={item.file}>
                    <a href={`/Logo/${item.file}`} download={item.file}>
                      {item.file}
                    </a>
                    <span>
                      {item.note} · {item.updated}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: AdminProject }) {
  return (
    <article className={`admin-card status-${p.status}`}>
      <div className="admin-card-head">
        <h3>{p.name}</h3>
        <span className={`admin-badge status-${p.status}`}>{statusLabel[p.status]}</span>
      </div>
      <p className="admin-cat">{p.category}{p.shownOnSite ? " · on website" : ""}</p>
      <p>{p.description}</p>
      <dl className="admin-dl">
        <div>
          <dt>Hosting</dt>
          <dd>{p.hosting}</dd>
        </div>
        {p.domain ? (
          <div>
            <dt>Domain</dt>
            <dd>{p.domain}</dd>
          </div>
        ) : null}
        {p.mail ? (
          <div>
            <dt>Mail</dt>
            <dd>{p.mail}</dd>
          </div>
        ) : null}
        {p.stack ? (
          <div>
            <dt>Stack</dt>
            <dd>{p.stack}</dd>
          </div>
        ) : null}
        {p.github ? (
          <div>
            <dt>GitHub</dt>
            <dd>{p.github}</dd>
          </div>
        ) : null}
        {p.notes ? (
          <div>
            <dt>Notes</dt>
            <dd>{p.notes}</dd>
          </div>
        ) : null}
      </dl>
      {p.url ? (
        <a className="product-link" href={p.url} target="_blank" rel="noreferrer">
          Open live →
        </a>
      ) : null}
    </article>
  );
}
