// helper function to add up quantities and totals

export const sumItems = (cartItems) => {
	return {
		// this is going to be the total of all of the quantities of each object in array
		itemCount: cartItems.reduce((total, product) => {
			return total + product.quantity;
		}, 0),
		total: cartItems.reduce((total, product) => {
			return total + product.price * product.quantity;
		}, 0),
	};
};

const cartReducer = (state, action) => {
	// depending on the action, a different state will be executed
	switch (action.type) {
		// if action.type is add_item
		case "ADD_ITEM":
			// check if item is in cart
			if (!state.cartItems.find((item) => item.id === action.payload.id)) {
				state.cartItems.push({
					...action.payload,
					quantity: 1,
				});
			}

			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			};
		default:
			return state;
	}
};

export default cartReducer;
