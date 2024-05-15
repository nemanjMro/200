import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const authHandler = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   },
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(
            `${process.env.NEXTAUTH_URL}/api/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          const json = await response.json();

          if (response.status === 200) {
            return json.result;
          } else {
            throw JSON.stringify(json);
          }
        } catch (e) {
          throw new Error(e);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
    // async signIn(user, account, profile) {
    //   if (account.provider === "google") {
    //     // Redirekcija na određenu stranicu posle uspešnog logovanja preko Google-a
    //     // return `/${context.req.query.redirect}`;
    //     return `/games`;
    //   }
    //   if (account.provider === "facebook") {
    //     // Redirekcija na određenu stranicu posle uspešnog logovanja preko Facebook-a
    //     // return `/${context.req.query.redirect}`;
    //     return `/games`;
    //   }
    // },
  },
});

export { authHandler as GET, authHandler as POST };
