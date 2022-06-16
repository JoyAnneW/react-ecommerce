import React, { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../shared/Layout";
import CartItem from "./CartItem";
import Total from "./Total";
import "./CartPage.styles.scss";

export default function CartPage() {
	const {
		itemCount,
		cartItems,
		total,
		increase,
		decrease,
		removeProduct,
		clearCart,
	} = useContext(CartContext);
	return (
		<Layout>
			<>
				<h1>Cart</h1>
				{cartItems.length === 0 ? (
					<div className="empty-cart">Your Cart is Empty.</div>
				) : (
					<>
						<div className="cart-page">
							<div className="cart-item-container">
								{cartItems.map((product) => (
									<CartItem
										product={product}
										increase={increase}
										decrease={decrease}
										removeProduct={removeProduct}
										key={product.id}
									/>
								))}
							</div>
							<Total
								itemCount={itemCount}
								total={total}
								clearCart={clearCart}
							/>
						</div>
					</>
				)}
			</>
		</Layout>
	);
}
