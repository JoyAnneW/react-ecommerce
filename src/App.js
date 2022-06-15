import "./App.scss";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Shop from "./components/Pages/Shop/Shop";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/product/:id" element={<SingleProduct />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
