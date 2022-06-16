import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

export default function CartItem({
	product,
	increase,
	decrease,
	removeProduct,
}) {
	const { title, imageUrl, price, quantity } = product;

	return (
		<div className="cart-item">
			<div className="item-image">
				<img src={imageUrl} alt="product" />
			</div>
			<div className="name-price">
				<h4>{title}</h4>
				<p>${price}</p>
			</div>
			<div className="quantity">
				<p>{`Quantity: ${quantity}`}</p>
			</div>
			<div className="btns-container">
				<button className="btn-increase" onClick={() => increase(product)}>
					<AiOutlinePlus />
				</button>

				{quantity > 1 && (
					<button className="btn-decrease" onClick={() => decrease(product)}>
						<AiOutlineMinus />
					</button>
				)}

				<button
					className="btn-trash"
					onClick={() => {
						removeProduct(product);
					}}
				>
					<AiOutlineDelete />
				</button>
			</div>
		</div>
	);
}
