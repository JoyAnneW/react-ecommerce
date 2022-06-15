import "./App.scss";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MainSection from "./components/Main/MainSection";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
