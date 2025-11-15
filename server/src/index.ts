import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.all("/api/auth/*splat", toNodeHandler(auth))
app.use(express.json());

app.get('/api/me', async (req: Request, res: Response) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers)
    })
    res.json(session);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})