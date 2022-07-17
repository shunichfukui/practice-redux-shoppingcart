import React from 'react'
import { useDispatch } from 'react-redux'
import { MinusItemIcon, PlusItemIcon } from '../../HeroIcons'
import { removeItem, increaseItemAmount, decreaseItemAmount } from '../../features/cart/CartSlice';
import { openModal } from '../../features/modal/DeleteCartItemModal';

const CartItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
      <img src={img} alt='' />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <button className='remove-btn' onClick={() => dispatch(openModal(id))}>削除</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(increaseItemAmount(id))}>
          <PlusItemIcon />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => {
          if (amount === 1) {
            dispatch(openModal(id));
            return;
          }
          dispatch(decreaseItemAmount(id))
        }}>
          <MinusItemIcon />
        </button>
      </div>
    </article>
  )
}

export default CartItem