import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { CartContext } from "../../context/cart-context";
import "./Cart.styles.scss";

export default function Cart() {
	const navigate = useNavigate();
	// part of the initial state object in cart-context
	const { itemCount, cartItems } = useContext(CartContext);
	console.log({ cartItems });
	return (
		<div className="cart-container" onClick={() => navigate("/cart")}>
			<AiOutlineShopping />
			{/* if there's something in the cart add the span with the number of items. */}
			{itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null}
		</div>
	);
}
