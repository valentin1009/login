import { PrismaClient } from '@prisma/client';
import CustomNodeJsGlobal = NodeJS.CustomNodeJsGlobal;

declare namespace NodeJS {
    export interface CustomNodeJsGlobal {
        prisma: PrismaClient;
    }
}


// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
}

export default prisma;