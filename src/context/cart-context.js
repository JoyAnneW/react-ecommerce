import React, { createContext, useReducer } from "react";
import cartReducer from "./cart-reducer";

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

const CartContextProvider = ({ children }) => {
	// dispatch function is used to add to, remove from cart EventCounts. it will run the action through the cartreducer
	const [state, dispatch] = useReducer(cartReducer, initialState);

	// fn to add product to cart. this is an action creator
	const addProduct = (product) =>
		// dispatch the fn that adds items
		dispatch({ type: "ADD_ITEM", payload: product });

	// any component that is wrapped by this context can access these values.
	const contextValues = {
		...state,
		addProduct,
	};
	return (
		<CartContext.Provider value={{ contextValues }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
