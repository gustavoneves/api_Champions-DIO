import { Request, Response } from "express";
import { getPlayerService } from "../services/players-service";

export const getPlayer = async (request: Request, response: Response) => {
    const data = await getPlayerService(); 
    response.status(200).json(data);
}
