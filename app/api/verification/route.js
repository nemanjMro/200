import prisma from "@/helpers/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, code } = await request.json();

    const user = await prisma.user.findFirst({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "No users found" }), {
        status: 400,
      });
    }

    const verificationCode = await prisma.verificationCode.findFirst({
      where: { user_id: user.id },
    });

    if (!verificationCode) {
      return new NextResponse(JSON.stringify({ message: "Already verified" }), {
        status: 400,
      });
    }

    if (parseInt(code) !== verificationCode.code) {
      return new NextResponse(JSON.stringify({ message: "Code incorrect" }), {
        status: 400,
      });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { is_verified: true },
    });

    await prisma.verificationCode.delete({
      where: { id: verificationCode.id },
    });

    return new NextResponse(JSON.stringify({ message: "Verified" }), {
      status: 200,
    });
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        message: "Something went wrong while trying to verify email",
        result: e,
      }),
      { status: 500 }
    );
  }
}
