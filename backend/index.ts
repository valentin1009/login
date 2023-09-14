import { PrismaClient } from "@prisma/client";
import express, {Request, Response} from "express";
import api from "./routes/index";
import bodyParser from "body-parser";
const cors = require('cors');

const app = express()
const port = 3001

app.use(cors())

app.use(bodyParser.urlencoded())
// Route to check if the server is running
app.get("/ping", (request: Request, reply: Response) => {
    reply.send("Server is running!");
});

app.use('/api', api);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});
export default app;
