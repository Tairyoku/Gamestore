import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import Button from '../button/button'
import { CartItemMenu } from '../cartItemMenu/cartItemMenu'
import { IGameItem } from '../models/models'
import { calcTotalPrice } from '../utilis'
import './cartMenu.css'

interface IGameMenu {
    items: IGameItem[],
    onClick(): any
}

export const CartMenu:FC<IGameMenu> = ({items, onClick}) => {
    const navigate = useNavigate()
    

    
  return ( 
    <div className='cart-menu'>
        <div className="cart-menu__game-list">
            {
                items.length === 0 ? "Кошик порожній" : items.map((game) => <CartItemMenu key={game.title} game={game} />)
            }
        </div>
            {
            items.length > 0 ? (
            <div className="cart-menu__arrange">
                <div className="cart-menu__total-price">
                <span>Итого:</span>
                <span>{calcTotalPrice(items)} гр.</span>
                </div> 
                <Button type='primary' size='m' onClick={onClick}>
                    Оформити замовлення
                </Button>
            </div>) : null
            }
    </div>  )
}
