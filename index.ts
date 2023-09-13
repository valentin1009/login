import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const server = Fastify();

// Route to check if the server is running
server.get("/ping", async (request, reply) => {
    reply.send("Server is running!");
});

server.listen(3000);