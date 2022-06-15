import "./App.scss";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MainSection from "./components/Main/MainSection";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<MainSection />
			<FeaturedCollection />
		</div>
	);
}

export default App;
