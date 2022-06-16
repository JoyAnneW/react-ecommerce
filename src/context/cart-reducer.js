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

		case "INCREASE":
			// this will loop over cartitems and return the index of the item that has the same id as payload.id, which is the product we pass to the increase fn
			const increaseIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			// get the item that needs increasing from the cartitems array and increement the quantity property. this mutates cartitems so we need to spread out the updated state of the cart in the return statement
			state.cartItems[increaseIndex].quantity++;

			// return a new state with the changes.
			return {
				...state,
				cartItems: [...state.cartItems],
				// this will sum up the totals and quantities in the cart. sumItems returns an object, which we are spreading out in the return object of this case
				...sumItems(state.cartItems),
			};

		case "DECREASE":
			const decreaseIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			const product = state.cartItems[decreaseIndex];
			if (product.quantity > 1) {
				product.quantity--;
			}

			return {
				...state,
				cartItems: [...state.cartItems],

				...sumItems(state.cartItems),
			};

		case "REMOVE_ITEM":
			// filter out the product passed in to delete it from the cart
			const newCartItems = state.cartItems.filter(
				(item) => item.id !== action.payload.id
			);

			return {
				...state,
				cartItems: [...newCartItems],

				...sumItems(newCartItems),
			};
		// return everything to initial state
		case "CLEAR":
			return {
				cartItems: [],
				itemCount: 0,
				total: 0,
			};

		default:
			return state;
	}
};

export default cartReducer;
