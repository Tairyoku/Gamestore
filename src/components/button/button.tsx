import React, { FC } from 'react'
import classNames from 'classnames'
import './button.css'

interface IButton {
    onClick(): void,
    type?: string, 
    children: any,
    size?: string
}

//магазин игр на реакт/редукс 1, минута 52 где-то
//я тут сделал интерфейс, он же просто писал, может возникнуть проблема с чилдреном

const Button:FC<IButton> = (btn) => {
    const btnClass = classNames({
        'btn':true,
        'btn--secondary': btn.type === 'secondary',
        'btn--primary': btn.type === 'primary',
        'btn--small': btn.size === 's',
        'btn--medium': btn.size === 'm',
    })
  return (
    <div className={btnClass} onClick={btn.onClick}>
         {btn.children} {/*вот она */}
    </div>
  )
}

export default Button