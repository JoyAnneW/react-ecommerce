import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import FeaturedProduct from "../shared/FeaturedProduct";

export default function FeaturedCollection() {
	const { products } = useContext(ProductsContext);

	// get only the first 4 products and return
	const productItems = products
		.filter((product, index) => index < 4)
		.map((product) => {
			return <FeaturedProduct key={product.id} product={product} />;
		});

	console.log(productItems);
	return (
		<div className="featured-collection container">
			<h2 className="featured-collection-title">Featured Collection</h2>
			<div className="products">{productItems}</div>
		</div>
	);
}
