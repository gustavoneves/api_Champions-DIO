import { Request, Response } from "express";
import { getPlayerService } from "../services/players-service";
import { ok } from "../utils/http-helper";

export const getPlayer = async (request: Request, response: Response) => {
    const httpResponse = await getPlayerService();
    response.status(httpResponse.statusCode).json(httpResponse.body);
}
