import { Request, Response } from "express";
import { getPlayerByIdService, getPlayerService } from "../services/players-service";

export const getPlayer = async (request: Request, response: Response) => {
    const httpResponse = await getPlayerService();
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await getPlayerByIdService(id);
    response.status(httpResponse.statusCode).json(httpResponse.body);
}
