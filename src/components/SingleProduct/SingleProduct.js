import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/products-context";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../shared/Layout";
import "./SingleProduct.styles.scss";
import NotFound from "../NotFound";

export default function SingleProduct() {
	const { products } = useContext(ProductsContext);
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);

	// Get the id param from the URL.
	const { id } = useParams();
	console.log(id);

	// on load check if the product id from params is found in the products list. Number()makes sure it's a number
	useEffect(() => {
		const product = products.find((item) => Number(item.id) === Number(id));

		// if product does not exist redirect to shop page
		if (!product) {
			navigate("/shop");
		}

		// if product is NotFound, set it as state
		setProduct(product);
	});

	// handling the case where product is null right when component loads for first time.
	if (!product) {
		return null;
	}
	const { imageUrl, title, price, description } = product;
	const itemInCart = true;
	return (
		<Layout>
			<div className="single-product-container">
				<div className="product-image">
					<img src={imageUrl} alt="product" />
				</div>
				<div className="product-details">
					<div className="name-price">
						<h3>{title}</h3>
						<p>{price}</p>
					</div>
					<div className="add-to-cart-btns">
						{!itemInCart && (
							<button
								className="button is-white nomad-btn"
								id="btn-white-outline"
								// onClick={() => addProduct(product)}
							>
								ADD TO CART
							</button>
						)}
						{itemInCart && (
							<button
								className="button is-white nomad-btn"
								id="btn-white-outline"
								// onClick={() => increase(product)}
							>
								ADD MORE
							</button>
						)}

						<button
							className="button is-black nomad-btn"
							id="btn-white-outline"
						>
							PROCEED TO CHECKOUT
						</button>
					</div>
					<div className="product-description">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
