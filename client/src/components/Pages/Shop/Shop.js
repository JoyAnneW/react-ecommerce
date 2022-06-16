import React, { useContext } from "react";
import Layout from "../../shared/Layout";
import FeaturedProduct from "../../shared/FeaturedProduct";
import { ProductsContext } from "../../../context/products-context";
import "./Shop.styles.scss";

export default function Shop() {
	const { products } = useContext(ProductsContext);

	const allProducts = products.map((product) => (
		<FeaturedProduct product={product} key={product.id} />
	));

	return (
		<Layout>
			<div className="product-list-container">
				<h2 className="product-list-title">Shop</h2>
				<div className="product-list">{allProducts}</div>
			</div>
		</Layout>
	);
}
