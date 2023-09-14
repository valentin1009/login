import { PrismaClient } from "@prisma/client";
import express from "express";
import api from "./routes/index";
import bodyParser from "body-parser";

const prisma = new PrismaClient();
const app = express()
const port = 3001

app.use(bodyParser.urlencoded())
// Route to check if the server is running
app.get("/ping", async (request, reply) => {
    reply.send("Server is running!");
});

app.use('/api', api);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});
export default app;
