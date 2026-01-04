import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) return new Response("Invalid credentials", { status: 401 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return new Response("Invalid credentials", { status: 401 });

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  const cookieStore = await cookies();
  cookieStore.set("auth", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return Response.json({ message: "Logged in" });
}

