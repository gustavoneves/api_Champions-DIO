import { findAllPlayers, findPlayerById } from "../repositories/player-repository";
import { noContent, ok } from "../utils/http-helper";

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
}
