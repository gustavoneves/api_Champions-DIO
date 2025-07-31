import { PlayerModel } from "../models/player-model";
import { deleteOnePlayer, findAllPlayers, findPlayerById, insertPlayer } from "../repositories/player-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
    // const data = { player: "ronaldo" };
    const data = await findAllPlayers();
    let res;
    if(data){
        res = await ok(data);
    }
    else{
        res = await noContent();
    }
    
    return res;
}


export const getPlayerByIdService = async (id: number) => {
    const data = await findPlayerById(id);
    let res;
    if(data){
        res = await ok(data);
    }
    else{
        res = await noContent();
    }
    
    return res;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;
    
    if(Object.keys(player).length){
       await insertPlayer(player);
       response = created();
    }
    else{
        response = await badRequest();
    }

    return response;
}

export const deletePlayerService = async (id: number) => {
    let response = null;
    const status = await deleteOnePlayer(id);

    if(status !== -1){
        response = await ok({message: "deleted"});
    }
    else{
        response = await badRequest();
    }

    // if(data){
    //     response = await ok(data);
    // }
    // else{
    //     response = await badRequest();
    // }
    
    return response;
}
