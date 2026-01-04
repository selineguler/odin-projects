import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

// GET /api/cofs → list all COFs for the logged-in user
export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
  const userId = decoded.userId;

  const cofs = await prisma.cof.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });

  return Response.json(cofs);
}

// POST /api/cofs → create new COF
export async function POST(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
  const userId = decoded.userId;

  const body = await req.json();
  const { name, linker1, linker2, topology, a, b, c } = body;

  const newCof = await prisma.cof.create({
    data: {
      name,
      linker1,
      linker2,
      topology,
      a,
      b,
      c,
      userId,
    },
  });

  return Response.json(newCof);
}
