import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],pages: {
    signIn: '/signup', // Specify custom sign-in page
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      session.user.image = token.picture;
      session.user.name = token.name;
      return session;
    },
    async jwt({ token, user, account, profile }: { token: any; user?: any; account?: any; profile?: any }) {
      if (user) {
        token.id = user.id;
      }
      if (account && profile) {
        token.picture = profile.picture;
        token.name = profile.name;
      }
      console.log("JWT Callback - Token:", token);
      return token;
    },
  },
};

// Export HTTP methods explicitly
import { NextApiRequest, NextApiResponse } from "next";

export const GET = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
export const POST = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);