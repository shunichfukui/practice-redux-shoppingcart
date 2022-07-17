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
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;