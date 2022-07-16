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
  reducers: {},
});

export default cartSlice.reducer;