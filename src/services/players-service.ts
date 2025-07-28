import { noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = { player: "ronaldo" };
    let res;
    if(data){
        res = await ok(data);
    }
    else{
        res = await noContent();
    }
    
    return res;
}
