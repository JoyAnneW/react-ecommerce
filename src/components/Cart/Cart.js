import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { CartContext } from "../../context/cart-context";
import "./Cart.styles.scss";

export default function Cart() {
	// part of the initial state object in cart-context
	const { itemCount } = useContext(CartContext);
	return (
		<div className="cart-container">
			<AiOutlineShopping />
			{/* if there's something in the cart add the span with the number of items. */}
			{itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null}
		</div>
	);
}
