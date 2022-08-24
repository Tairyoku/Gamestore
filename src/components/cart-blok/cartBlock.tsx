import React, { useCallback, useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { CartMenu } from '../cartMenu/cartMenu'
import { useTypedSelector } from '../hooks/useTypesSelector'
import { ItemsInCart } from '../items-in-cart/itemsInCart'
import { calcTotalPrice } from '../utilis'
import './cartBlock.css'

const CartBlock = () => {
  const items = useTypedSelector(state => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
      setIsCartMenuVisible(false)
      navigate('/order')
  }

  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length}/>
        <BsCart
         size={40} 
         className="cart-icon" 
         onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} 
         />
        {
          totalPrice > 0 ?
          <span className="cart-total-price">${totalPrice}</span>
          : null
          }
        {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  )
}

export default CartBlock