import React from "react";
import "./FeaturedProduct.styles.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function FeaturedProduct({ product }) {
	const { id, title, imageUrl, price } = product;

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
				<button className="button is-black nomad-btn">ADD TO CART</button>
			</div>
		</div>
	);
}
