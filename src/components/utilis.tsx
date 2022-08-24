import { IGameItem } from "./models/models"


export const calcTotalPrice = (items:IGameItem[]) => items.reduce((acc, game ) => acc + game.price, 0)
