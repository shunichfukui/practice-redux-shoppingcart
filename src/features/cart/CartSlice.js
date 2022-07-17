import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../mock/cartItemData';

const initialState = {
    cartItems: cartItems,
    amount: cartItems.length,
    price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // アイテム全削除
    clearCart: (state) => {
      return { cartItems: [], amount: 0, price: 0 };
    },

    // アイテム削除
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    // アイテムの購入数を増やす
    increaseItemAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },

    // アイテムの購入数を減らす
    decreaseItemAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount > 0 ? cartItem.amount - 1 : cartItem.amount;
    },

    // アイテムの料金、数を計算する
    calculateTotalPriceWithAmount: (state) => {
      let amount = 0, total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.price = total;
    }
  },
});


export const { clearCart, removeItem, increaseItemAmount, decreaseItemAmount, calculateTotalPriceWithAmount } =
  cartSlice.actions;

export default cartSlice.reducer;