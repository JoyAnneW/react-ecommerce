import "./App.scss";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Shop from "./components/Pages/Shop/Shop";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import CartPage from "./components/Pages/CartPage/CartPage";
import Checkout from "./components/Checkout/Checkout";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/product/:id" element={<SingleProduct />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
