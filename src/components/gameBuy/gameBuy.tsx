import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/redusers'
import Button from '../button/button'
import { useTypedSelector } from '../hooks/useTypesSelector'
import { IGameItem } from '../models/models'
import './gameBuy.css'

interface IGames {
    game: IGameItem
   }


const GameBuy:FC<IGames> = ({game}) => {

const dispatch = useDispatch()
const items = useTypedSelector(state => state.cart.itemsInCart)
const isItemInCart = items.some(item => item.id === game.id)

  const handleClick = () => {
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id))
    } else { 
      dispatch(setItemInCart(game))
    }
  }
    

  return (
    <div className='game-buy'>
      {
      isItemInCart ? null : 
        <span className="game-buy-price">{game.price} гр.</span>
      }
        <Button 
        type={isItemInCart ? 'secondary' : 'primary'}
        onClick={handleClick}
        >
          {isItemInCart ? 'Видалити з кошику' : 'До кошику'}
        </Button>
    </div>
  )
}

export default GameBuy

