import React, { createContext, useReducer } from "react";
import cartReducer from "./cart-reducer";

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

const CartContextProvider = ({ children }) => {
	// dispatch function is used to add to, remove from cart EventCounts. it will run the action through the cartreducer
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const contextValues = {
		...state,
	};
	return (
		<CartContext.Provider value={{ contextValues }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
