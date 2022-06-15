import React, { createContext, useState } from "react";
import SHOP_DATA from "../Shop";

// this actually creates the context
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
	// no function to update state here because data is local. Will need setter function to pull from db
	const [products] = useState(SHOP_DATA);
	return (
		// the context created above has a Provider property. this component will take the value passed and make it accessible to all children
		<ProductsContext.Provider value={products}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContextProvider;
