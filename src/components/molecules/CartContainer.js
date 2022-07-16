import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../atoms/CartItem';

const CartContainer = () => {
    const { amount, cartItems, price } = useSelector((state) => state.cart);

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>カート</h2>
                    <h4 className='empty-cart'>カートに何も入ってません。。😭</h4>
                </header>
            </section>
        )
    } else {
        return (
            <section className='cart'>
                <header>
                    <h2>カート</h2>
                </header>
                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </div>
                <footer>
                    <hr />
                    <div className='cart-total'>
                        <h4>
                            合計<span>{price}円</span>
                        </h4>
                    </div>
                    <button className='btn clear-btn'>全削除</button>
                </footer>
            </section>
        )
    }
}

export default CartContainer;