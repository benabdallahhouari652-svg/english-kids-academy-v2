import { PrismaClient } from '@/generated/prisma/client'
import { PrismaSqlite } from 'prisma-adapter-sqlite'
import { join } from 'node:path'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const dbPath = `file:${join(process.cwd(), 'dev.db')}`
const factory = new PrismaSqlite({ url: dbPath })

// Next.js cannot use async init, so use the factory directly
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter: factory as any })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
