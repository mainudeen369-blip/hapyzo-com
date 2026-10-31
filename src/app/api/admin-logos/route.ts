import { readFile } from "fs/promises";
import path from "path";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { logosInGroup, type LogoGroup } from "../../../data/admin-logos";
import { ADMIN_COOKIE, isValidAdminToken } from "../../../lib/admin-auth";
import { zipStored } from "../../../lib/zip-store";

const groups = new Set(["all", "lockup", "icon"]);

export async function GET(req: Request) {
  const jar = await cookies();
  if (!isValidAdminToken(jar.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const group = new URL(req.url).searchParams.get("group") || "all";
  if (!groups.has(group)) {
    return NextResponse.json({ error: "Unknown logo group" }, { status: 400 });
  }

  const selected = logosInGroup(group as LogoGroup | "all");
  const root = path.join(process.cwd(), "public", "Logo");
  const files = await Promise.all(
    selected.map(async (item) => ({
      name: `${item.group}/${item.file}`,
      data: await readFile(path.join(root, item.file)),
    })),
  );

  const zip = zipStored(files);
  return new NextResponse(new Uint8Array(zip), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="hapyzo-logos-${group}.zip"`,
      "Cache-Control": "no-store",
    },
  });
}
