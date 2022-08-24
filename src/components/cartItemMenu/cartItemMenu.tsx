import React, { FC } from 'react'
import { IGameItem } from '../models/models'
import './cartItemMenu.css'

interface IGames {
    game: IGameItem
    // key: number
  }

export const CartItemMenu:FC<IGames> = ({game}) => {
  return (
    <div className='cart-item'>
        <span>{game.title}</span>
        <div className="cart-item__price">
           <span>{game.price} гр.</span>
        </div>
    </div>
  )
}
