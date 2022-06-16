export const isInCart = (product, cartItems) => {
	// if product is in the cartItems return true, otherwise false
	return cartItems.find((item) => item.id === product.id);
};

const API = "http://localhost:5000";
export const fetchFromAPI = async (endpoint, options) => {
	// setting defaults for method and body.
	const { method, body } = { method: "POST", body: null, ...options };

	const response = await fetch(`${API}/${endpoint}`, {
		method,
		// if there is a body, then stringify it, then spread out the contents of the object
		...(body && { body: JSON.stringify(body) }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	return response.json();
};
