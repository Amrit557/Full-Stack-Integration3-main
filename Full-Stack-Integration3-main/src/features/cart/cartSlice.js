import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // each item: { id, name, price, quantity }
  totalQuantity: 0,
  totalAmount: 0,
};

const findIndex = (items, id) => items.findIndex(i => i.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, name, price } = action.payload;
      const idx = findIndex(state.items, id);
      if (idx >= 0) {
        state.items[idx].quantity += 1;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount = state.items.reduce((sum, it) => sum + it.price * it.quantity, 0);
    },
    removeItem(state, action) {
      const id = action.payload;
      const idx = findIndex(state.items, id);
      if (idx >= 0) {
        state.totalQuantity -= state.items[idx].quantity;
        state.items.splice(idx, 1);
        state.totalAmount = state.items.reduce((sum, it) => sum + it.price * it.quantity, 0);
      }
    },
    increaseQty(state, action) {
      const id = action.payload;
      const idx = findIndex(state.items, id);
      if (idx >= 0) {
        state.items[idx].quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount = state.items.reduce((sum, it) => sum + it.price * it.quantity, 0);
      }
    },
    decreaseQty(state, action) {
      const id = action.payload;
      const idx = findIndex(state.items, id);
      if (idx >= 0) {
        if (state.items[idx].quantity > 1) {
          state.items[idx].quantity -= 1;
          state.totalQuantity -= 1;
        } else {
          // remove if quantity becomes 0
          state.totalQuantity -= 1;
          state.items.splice(idx, 1);
        }
        state.totalAmount = state.items.reduce((sum, it) => sum + it.price * it.quantity, 0);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    }
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
