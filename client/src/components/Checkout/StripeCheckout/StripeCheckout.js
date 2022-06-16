import React, { useContext, useState } from "react";
// this allows us to use the Stripe object in our app
import { useStripe } from "@stripe/react-stripe-js";
import { CartContext } from "../../../context/cart-context";
import { fetchFromAPI } from "../../../helpers";

export default function StripeCheckout() {
	const [email, setEmail] = useState("");
	const { cartItems } = useContext(CartContext);
	const stripe = useStripe();

	// creates line_items and gets email from customer
	const handleGuestCheckout = async (event) => {
		event.preventDefault();

		const line_items = cartItems.map((item) => {
			return {
				quantity: item.quantity,
				price_data: {
					currency: "usd",
					// unit amount in cents
					unit_amount: item.price * 100,
					product_data: {
						name: item.title,
						description: item.description,
						images: [item.imageUrl],
					},
				},
			};
		});

		// call to backend to create checkout session
		const response = await fetchFromAPI("create-checkout-session", {
			body: { line_items, customer_email: email },
		});
		console.log({ response });

		// this is returned as a response from the fetch. the fetchfromapi returns the response as json. no need to do that here
		const { sessionId } = response;
		// we'll get error obj if error. this destructures error from this call to the stripeapi to redirect to hosted checkout page. It will either redirect or give the error obj
		// the sessionId from the call tocreate a session is needed to redirect to the success page

		const { error } = await stripe.redirectToCheckout({ sessionId });

		if (error) {
			console.log({ error });
			// can show message to user or send to an error page.
		}
	};

	return (
		<>
			<form onSubmit={(event) => handleGuestCheckout(event)}>
				<div>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						value={email}
						className="nomad-input"
					/>
				</div>
				<div className="submit-btn">
					<button type="submit" className="button is-black nomad-btn submit">
						Checkout
					</button>
				</div>
			</form>
		</>
	);
}
