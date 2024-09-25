import fetchCart from "../functions/fetchCart";
import { store } from "../state-management/store";
import { setCartState } from "../state-management/slices/cartSlice";

export const saveReduxCartState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch (err) {
      console.error("Could not save state", err);
    }
};

export const loadReduxCartState = async () => {
  try{
    const cart = await fetchCart();
    //console.log(cart)
    store.dispatch(setCartState(cart));
  }catch(e){
    console.log("Failed to initialize cart", e)
  }
  };