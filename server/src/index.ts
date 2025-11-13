import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use((req: Request, res: Response) => {
    res.json({
        message: "Hello world"
    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})