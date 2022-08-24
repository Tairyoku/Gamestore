import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameItem } from "../../components/models/models";


const currentGame :IGameItem = {
    image : '',
      title : '',
      genres : [],
      video : '',
      price : 0,
      id : 0,
      description : '',
}



const gamesSlice = createSlice({
    name: 'games',
    initialState: {currentGame},
    reducers: {
        setCurrentGame: (state, action: PayloadAction<IGameItem>) => {
            state.currentGame = action.payload
        }
    }
})

export const { setCurrentGame } = gamesSlice.actions
export default gamesSlice.reducer