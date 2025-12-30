import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };
let prisma: PrismaClient | undefined = globalForPrisma.prisma;

export function getPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required to initialize PrismaClient.");
  }

  if (!prisma) {
    prisma = new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });

    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = prisma;
    }
  }

  return prisma;
}
