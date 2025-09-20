import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newPlant = action.payload;
      const existingPlant = state.items.find(item => item.name === newPlant.name);
      
      if (existingPlant) {
        existingPlant.quantity += 1;
      } else {
        state.items.push({ ...newPlant, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const plantName = action.payload;
      state.items = state.items.filter(item => item.name !== plantName);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const plant = state.items.find(item => item.name === name);
      if (plant) {
        plant.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
