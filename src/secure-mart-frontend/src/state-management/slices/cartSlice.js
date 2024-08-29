import { createSlice } from '@reduxjs/toolkit';
import BackendActor from '../../utils/BackendActor';
import { toast } from 'react-toastify';

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartState: (state, action) => {
      state.items = action.payload;
    },
    addProductToCart: async (state, action) => {
      const product = action.payload;
      const response = await BackendActor.addProductToCart(product.id, product.title, product.price, product.quantity, product.imageUrl);
            toast.success(response, {
                theme: "colored"
      })
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});


export const { setCartState, addProductToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
