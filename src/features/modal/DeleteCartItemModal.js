import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  targetId: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
      openModal: (state, action) => {
          state.isOpen = true;
          state.targetId = action.payload ? action.payload : "";
      },
      closeModal: (state, action) => {
          state.isOpen = false;
      },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;