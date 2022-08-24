import { FC } from "react"



const IsPriceZero = (price:any) => {
    if (price !== 0) {
      return (
        <span className="cart-total-price">${Number(price)}</span>
      )
    }
    return (<div></div>)
}

export default IsPriceZero