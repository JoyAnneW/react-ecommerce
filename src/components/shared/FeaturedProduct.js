import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./FeaturedProduct.styles.scss";
import { useNavigate } from "react-router-dom";
import { isInCart } from "../../helpers";

export default function FeaturedProduct({ product }) {
	const { id, title, imageUrl, price, description } = product;
	const { addProduct, cartItems, increase } = useContext(CartContext);

	const navigate = useNavigate();

	return (
		<div className="featured-product">
			<div className="featured-image">
				{/* when user clicks image, they go to the singleproduct view of that product */}
				<img
					src={imageUrl}
					alt="product"
					onClick={() => {
						// this navigates to the singleProduct view. here the id that will be found in the url and used in the singleProduct component is set
						// must set the / infront of the path or else this path will be appended to existing one.
						navigate(`/product/${id}`);
					}}
				/>
			</div>
			<div className="name-price">
				<h3>{title}</h3>
				<p>${price}</p>
				{/*if item is in the cart, display ADD MORE, if not, display Add to cart */}
				{isInCart(product, cartItems) ? (
					<button
						className="button is-white nomad-btn"
						id="btn-white-outline"
						onClick={() => increase(product)}
					>
						ADD MORE
					</button>
				) : (
					<button
						className="button is-black nomad-btn"
						onClick={() => addProduct(product)}
					>
						ADD TO CART
					</button>
				)}
			</div>
		</div>
	);
}
