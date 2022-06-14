import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import "./Cart.styles.scss";

export default function Cart() {
	return (
		<div className="cart-container">
			<AiOutlineShopping />

			<span className="cart-count">5</span>
		</div>
	);
}
