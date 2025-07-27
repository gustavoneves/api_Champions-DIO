import express, { json, Request, Response } from "express";

function createApp(){
    const app = express();

    app.use(json());

    app.get("/", (request: Request, response: Response) => {
        response.status(200).json({ player: "Beckham" });
    })

    return app;
}

export default createApp;
