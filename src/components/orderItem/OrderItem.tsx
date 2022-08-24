import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import GameCover from '../gameCover/gameCover'
import { IGameItem } from '../models/models'
import './OrderItem.css'
import {AiOutlineClose} from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/redusers'

interface IOrderItem {
    game:IGameItem
}

export const OrderItem:FC<IOrderItem> = ({game}) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

  return (
    <div className='order-item'>
        <div className="order-item__cover">
            <GameCover image={game.image} />
        </div>
        <div className="order-item__title">
            <span>{game.title}</span>
        </div>
        <div className="order-item__price">
            <span>{game.price} гр.</span>
            <AiOutlineClose
            size={25}
            className="cart-item__delete-icon"
            onClick={handleClick}
            />
        </div>
    </div>
  )
}
