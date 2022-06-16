export const isInCart = (product, cartItems) => {
	// if product is in the cartItems return true, otherwise false
	return cartItems.find((item) => item.id === product.id);
};
