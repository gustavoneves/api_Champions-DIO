import { Request, Response } from "express";
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService, updatePlayerService } from "../services/players-service";
import { statisticsModel } from "../models/statistics-model";


export const getPlayer = async (request: Request, response: Response) => {
    const httpResponse = await getPlayerService();
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await getPlayerByIdService(id);
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (request: Request, response: Response) => {
    const bodyValue = request.body;
    const httpResponse = await createPlayerService(bodyValue);

    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
    // else{
    //     const res = await noContent();
    //     response.status(res.statusCode).json(res.body);
    // }
}

export const deletePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await deletePlayerService(id);
    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export const updatePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const bodyValue: statisticsModel = request.body;
    const httpResponse = await updatePlayerService(id, bodyValue);
    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
}
