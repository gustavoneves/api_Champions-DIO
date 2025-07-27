import express, { json, Request, Response } from "express";
import { getPlayer } from "./controllers/players-controller";

function createApp(){
    const app = express();

    app.use(json());

    app.get("/", getPlayer);

    return app;
}

export default createApp;
