import React from 'react'
import { MinusItemIcon, PlusItemIcon } from '../../HeroIcons'

const CartItem = ({img, title, price, amount}) => {
  return (
    <article className='cart-item'>
      <img src={img} alt='' />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <button className='remove-btn'>削除</button>
      </div>
      <div>
        <button className='amount-btn'>
          <PlusItemIcon />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn'>
          <MinusItemIcon />
        </button>
      </div>
    </article>
  )
}

export default CartItem