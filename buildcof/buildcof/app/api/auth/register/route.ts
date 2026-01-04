import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { email, password: hashed },
    });

    return Response.json({ message: "User created", user });
  } catch (e) {
    return new Response("User already exists", { status: 400 });
  }
}

