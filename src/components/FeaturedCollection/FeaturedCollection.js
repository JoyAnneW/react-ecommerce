import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import FeaturedProduct from "../shared/FeaturedProduct";

export default function FeaturedCollection() {
	const { products } = useContext(ProductsContext);
	console.log({ products });
	console.log(ProductsContext);

	// get only the first 4 products and return
	const productItems = products
		.filter((product, index) => index < 4)
		.map((product) => {
			<FeaturedProduct key={product.id} product={product} />;
		});

	return (
		<div className="featured-collection-container">
			<h2 className="featured-collection-title">FeaturedCollection</h2>
			<div className="products">{productItems}</div>
		</div>
	);
}
