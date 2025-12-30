import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

function ensureDatabaseUrl() {
  if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL = "postgresql://placeholder:placeholder@localhost:5432/placeholder";
    if (process.env.NODE_ENV === "development") {
      console.warn("DATABASE_URL was not set; using a placeholder to allow builds to proceed.");
    }
  }
}

function createPrismaClient() {
  ensureDatabaseUrl();
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
