import { useTypedSelector } from '../../components/hooks/useTypesSelector'
import { IGameItem } from '../../components/models/models'
import { OrderItem } from '../../components/orderItem/OrderItem'
import  {calcTotalPrice}  from '../../components/utilis'
import './OrderPage.css'



export const OrderPage = () => {
const items = useTypedSelector<IGameItem[]>(state => state.cart.itemsInCart)

 if (items.length < 1) {
  return <h1>Ваш кошик порожній</h1>
 }
 
  return (
    <div className='order-page'>
      <div className="order-page__left">
        {items.map(game => <OrderItem game={game} />)}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} товаров на сумму {calcTotalPrice(items)} гр.
          </span>
        </div>
      </div>
    </div>
  )
}


