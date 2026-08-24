import { cookies } from "next/headers";
import { AdminDashboard, AdminLoginForm } from "../../components/AdminPanel";
import { ADMIN_COOKIE, isValidAdminToken } from "../../lib/admin-auth";
import { adminProjects } from "../../data/admin-projects";

export const metadata = {
  title: "Admin · Project registry",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const jar = await cookies();
  const token = jar.get(ADMIN_COOKIE)?.value;
  const authed = isValidAdminToken(token);

  if (!authed) {
    return (
      <main className="admin-shell">
        <AdminLoginForm />
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <AdminDashboard projects={adminProjects} />
    </main>
  );
}
