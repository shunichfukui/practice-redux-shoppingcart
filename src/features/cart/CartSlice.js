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
    clearCart: (state) => {
      return { cartItems: [], amount: 0, price: 0 };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.amount = state.amount - 1;
    },
    increaseItemAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseItemAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount > 0 ? cartItem.amount - 1 : cartItem.amount;
    },
  },
});


export const { clearCart, removeItem, increaseItemAmount, decreaseItemAmount } =
  cartSlice.actions;

export default cartSlice.reducer;