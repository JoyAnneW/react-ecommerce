import React, { createContext, useReducer } from "react";
import cartReducer from "./cart-reducer";
import { sumItems } from "./cart-reducer";

export const CartContext = createContext();
const cartFromStorage = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];

// const initialState = { cartItems: [], itemCount: 0, total: 0 };
// insteaf of hardcoding the initial state. we are getting it from localstorage. if there's nothing in the cart the initial state is effectively the same as above
const initialState = {
	cartItems: cartFromStorage,
	...sumItems(cartFromStorage),
};

const CartContextProvider = ({ children }) => {
	// dispatch function is used to add to, remove from cart EventCounts. it will run the action through the cartreducer
	const [state, dispatch] = useReducer(cartReducer, initialState);

	// fn to add product to cart. this is an action creator
	const addProduct = (product) =>
		// dispatch the fn that adds items
		dispatch({ type: "ADD_ITEM", payload: product });

	// fn to increase qty
	const increase = (product) =>
		// dispatch the fn that increases
		dispatch({ type: "INCREASE", payload: product });

	// fn to DECREASE qty
	const decrease = (product) =>
		// dispatch the fn that decreases
		dispatch({ type: "DECREASE", payload: product });

	const removeProduct = (product) =>
		dispatch({ type: "REMOVE_ITEM", payload: product });

	const clearCart = () => dispatch({ type: "CLEAR" });

	// any component that is wrapped by this context can access these values.
	const contextValues = {
		...state,
		addProduct,
		increase,
		decrease,
		removeProduct,
		clearCart,
	};
	return (
		// here I don't need the double braces in value because contextValues is itself an object
		<CartContext.Provider value={contextValues}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
