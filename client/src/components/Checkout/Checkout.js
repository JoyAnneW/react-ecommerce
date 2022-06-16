import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import Layout from "../shared/Layout";
import "./Checkout.styles.scss";
import StripeCheckout from "./StripeCheckout/StripeCheckout";

export default function Checkout() {
	const { itemCount, total } = useContext(CartContext);

	return (
		<Layout>
			<div className="checkout">
				<h2>Checkout Summary</h2>
				<h3>{`Total Items: ${itemCount}`}</h3>
				<h4>{`Amount to Pay: $${total}`}</h4>
				<StripeCheckout />
				{/* <div style={addressShown}>
					<ShippingAddress setShipping={setShipping} />
				</div>
				<div style={cardShown}>
					<CustomCheckout {...{ shipping, cartItems }} />
				</div> */}
			</div>
		</Layout>
	);
}
