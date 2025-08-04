import { Request, Response } from "express"
import { getClubService } from "../services/clubs-service"

export const getClubs = async (request: Request, response: Response) => {
    const res = await getClubService();

    response.status(res.statusCode).json(res.body);
}
