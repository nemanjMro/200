import prisma from "@/helpers/prisma";
import { NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { signJwtAccessToken } from "@/helpers/jwt";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Both fields are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return NextResponse.json({ message: "No user found" }, { status: 400 });
    }

    if (await bcrypt.compare(password, user.password)) {
      const { password: hashedPassword, ...result } = user;
      const accessToken = signJwtAccessToken(result);

      return NextResponse.json(
        { result: { ...result, accessToken } },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Password incorrect" },
        { status: 400 }
      );
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Something went wrong while trying to log in", result: e },
      { status: 500 }
    );
  }
}

// import prisma from "@/helpers/prisma";
// import { NextResponse } from "next/server";
// import * as bcrypt from "bcrypt";
// import { signJwtAccessToken } from "@/helpers/jwt";
// import { getSession } from "next-auth/client";

// export async function POST(request) {
//   try {
//     const session = await getSession({ req: request });

//     if (session) {
//       // Ako postoji sesija, znači da je korisnik prijavljen putem Google-a ili Facebook-a
//       const email = session.user.email;

//       let user = await prisma.user.findFirst({
//         where: { email: email.toLowerCase() },
//       });

//       // Ako korisnik ne postoji, kreirajte novog korisnika
//       if (!user) {
//         user = await prisma.user.create({
//           data: {
//             email: email.toLowerCase(),
//             name: session.user.name,
//             image: session.user.image,
//             is_verified: true, // korisnici prijavljeni preko providera se smatraju verifikovanim
//           },
//         });
//       }

//       const accessToken = signJwtAccessToken(user);

//       return NextResponse.json(
//         { result: { ...user, accessToken } },
//         { status: 200 }
//       );
//     } else {
//       // Ako nema sesije, koristi se postojeća logika za prijavu putem forme
//       const { email, password } = await request.json();

//       if (!email || !password) {
//         return NextResponse.json(
//           { message: "Both fields are required" },
//           { status: 400 }
//         );
//       }

//       const user = await prisma.user.findFirst({
//         where: { email: email.toLowerCase() },
//       });

//       if (!user) {
//         return NextResponse.json({ message: "No user found" }, { status: 400 });
//       }

//       if (await bcrypt.compare(password, user.password)) {
//         const { password: hashedPassword, ...result } = user;
//         const accessToken = signJwtAccessToken(result);

//         if (!user.is_verified) {
//           return NextResponse.json(
//             { message: "Not verified" },
//             { status: 400 }
//           );
//         }

//         return NextResponse.json(
//           { result: { ...result, accessToken } },
//           { status: 200 }
//         );
//       } else {
//         return NextResponse.json(
//           { message: "Password incorrect" },
//           { status: 400 }
//         );
//       }
//     }
//   } catch (e) {
//     console.error(e);
//     return NextResponse.json(
//       {
//         message: "Something went wrong while trying to authenticate user",
//         error: e,
//       },
//       { status: 500 }
//     );
//   }
// }

//OVO JE ORIGINALAN KOD ZA LOGOVANJE I PROVERU KORISNIKA PUTEM KREDENCIJALA, SAD DODAJEM LOGIKU ZA PROVERU GOOGLE ILI FACEBOOK PROVIDERA I DODAVANJE MAILA AKO NE POSTOJI U BAZU

// import prisma from "@/helpers/prisma";
// import { NextResponse } from "next/server";
// import * as bcrypt from "bcrypt";
// import { signJwtAccessToken } from "@/helpers/jwt";

// export async function POST(request) {
//   try {
//     const { email, password } = await request.json();
//     // PRILIKOM LOGIN-A OVDE SE LOGUJU VREDNOSTI KOJE SU UNESENE U FORMU. TREBA NACI NACIN DA SE DOHVATE VREDNOSTI IZ GOOGLE I FACEBOOK PROVIDERA~!!!!!!!!!~~~
//     console.log("email:::::", email);
//     console.log("Password:::::", password);

//     if (!session) {
//       return NextResponse.json(
//         { message: "User not authenticated" },
//         { status: 401 }
//       );
//     }

//     if (!email || !password) {
//       return NextResponse.json(
//         { message: "Both fields are required" },
//         { status: 400 }
//       );
//     }

//     const user = await prisma.user.findFirst({
//       where: { email: email.toLowerCase() },
//     });

//     if (!user) {
//       return NextResponse.json({ message: "No user found" }, { status: 400 });
//     }

//     if (await bcrypt.compare(password, user.password)) {
//       const { password: hashedPasswrod, ...result } = user;
//       const accessToken = signJwtAccessToken(result);

//       if (!user.is_verified) {
//         return NextResponse.json({ message: "Not verified" }, { status: 400 });
//       }

//       return NextResponse.json(
//         { result: { ...result, accessToken } },
//         { status: 200 }
//       );
//     } else {
//       return NextResponse.json(
//         { message: "Password incorrect" },
//         { status: 400 }
//       );
//     }
//   } catch (e) {
//     console.error(e);
//     return NextResponse.json(
//       { message: "Something went wrong while trying to log in", result: e },
//       { status: 500 }
//     );
//   }
// }
