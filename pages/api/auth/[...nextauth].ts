import NextAuth, { NextAuthOptions } from "next-auth";

export const authOptions = {
  providers: [],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account?.access_token;
      }

      return token;
    },
    async session({ token, session }) {
      const sessionClone = { ...session, accessToken: token.accessToken };

      return sessionClone;
    },
  },
} satisfies NextAuthOptions;

export default NextAuth(authOptions);
