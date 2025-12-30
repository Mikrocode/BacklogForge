import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { getPrismaClient } from "./prisma";

const databaseUrl = process.env.DATABASE_URL?.trim();
const hasDatabase = Boolean(databaseUrl);
const prisma = hasDatabase ? getPrismaClient() : null;

export const authConfig: NextAuthConfig = {
  adapter: hasDatabase ? PrismaAdapter(prisma) : undefined,
  session: { strategy: hasDatabase ? "database" : "jwt" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!hasDatabase || !prisma) return null;
        const email = credentials?.email;
        const password = credentials?.password;
        if (typeof email !== "string" || typeof password !== "string") return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.passwordHash) return null;
        const isValid = await bcrypt.compare(password, user.passwordHash);
        if (!isValid) return null;
        return { id: user.id, email: user.email, name: user.name, role: user.role } as any;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user && hasDatabase) {
        session.user.id = user.id;
        (session.user as any).role = (user as any).role;
      }
      return session;
    },
  },
};

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig);
