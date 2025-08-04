import express, { json } from "express";
import cors from "cors";

import router from "./routes";


function createApp(){
    const app = express();

    app.use(cors());
    app.use(json());

    app.use("/api", router);

    return app;
}

export default createApp;
