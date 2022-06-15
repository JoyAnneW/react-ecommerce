import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/products-context";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../shared/Layout";
import "./SingleProduct.styles.scss";

export default function SingleProduct() {
	const { products } = useContext(ProductsContext);
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);

	// Get the id param from the URL.
	const { id } = useParams();

	// on load check if the product id from params is found in the products list. Number()makes sure it's a number
	useEffect(() => {
		const product = products.find((item) => Number(item.id) === Number(id));

		// if product does not exist redirect to shop page
		if (!product) {
			navigate("/shop");
		}
	});

	return <div>SingleProduct</div>;
}
