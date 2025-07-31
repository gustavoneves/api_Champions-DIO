import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [
    // {id: 1, name: "Messi"},
    // {id: 2, name: "Ronaldo"},
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
} 

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async(id: number) => {
    const index = database.findIndex(player => player.id === id);
    if(index !== -1){
        database.splice(index, 1);
    }
    return index;
}

export const findAndModifyPlayer = async(id: number, stats: statisticsModel) => {
    const playerIndex = database.findIndex(player => player.id === id);
    if(playerIndex !== -1){
        database[playerIndex].statistics = stats.statistics;
    }
    return playerIndex;
}
