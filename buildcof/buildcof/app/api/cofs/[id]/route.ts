import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";


export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const cofId = Number(id);

  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  let decoded: any;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    return new Response("Unauthorized", { status: 401 });
  }

  const userId = decoded.userId;

  const cof = await prisma.cof.findUnique({
    where: { id: cofId },
  });

  if (!cof || cof.userId !== userId) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json(cof);
}






export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;     // ← FIXED
  const cofId = Number(id);                // ← FIXED

  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
  const userId = decoded.userId;

  const cof = await prisma.cof.findUnique({
    where: { id: cofId },
  });

  if (!cof || cof.userId !== userId) {
    return new Response("Not found", { status: 404 });
  }

  await prisma.cof.delete({
    where: { id: cofId },
  });

  return Response.json({ message: "COF deleted" });
}




export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const cofId = Number(id);

  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;

  if (!token) return new Response("Unauthorized", { status: 401 });

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
  const userId = decoded.userId;

  const cof = await prisma.cof.findUnique({
    where: { id: cofId },
  });

  if (!cof || cof.userId !== userId) {
    return new Response("Not found", { status: 404 });
  }

  const body = await req.json();
  const { name, linker1, linker2, topology, a, b, c } = body;

  const updated = await prisma.cof.update({
    where: { id: cofId },
    data: {
      name,
      linker1,
      linker2,
      topology,
      a: a ?? null,
      b: b ?? null,
      c: c ?? null,
    },
  });

  return Response.json(updated);
}


