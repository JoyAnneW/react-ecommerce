import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./context/products-context";
import CartContextProvider from "./context/cart-context";

// INITIALIZING STRIPE
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	"pk_test_51LAYVvGbLCDl0eiJEzT9xpggaROyBJ0LwQJ2Mh9902UyAE1IoYfPQdzczFYQkF17nKp99WXHqvgDAYnLwrL3yiC000AywInfzE"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ProductsContextProvider>
			<CartContextProvider>
				{/* now the Stripe object can be accessed anywhere in our App. */}
				<Elements stripe={stripePromise}>
					<App />
				</Elements>
			</CartContextProvider>
		</ProductsContextProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
