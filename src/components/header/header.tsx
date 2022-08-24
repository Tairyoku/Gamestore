import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from '../cart-blok/cartBlock'
import './header.css'

const Header = () => {
    return ( 
    <div className = 'header' >
        <div className = "wrapper" >
            <Link to = { '/.' }
            className = 'header-store' >
            Game store 
            </Link> 
        </div> 
        <div className = "wrapper cart" >
            <CartBlock />
        </div> 
    </div>
    )
}

export default Header