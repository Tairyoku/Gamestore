import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameItem } from "../../components/models/models";

const itemsInCart:IGameItem[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState:  {itemsInCart} ,
    reducers: {
        setItemInCart: (state, action: PayloadAction<IGameItem>) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        }
    }
})
export default cartSlice.reducer

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
