import React from "react";
import FeaturedCollection from "./FeaturedCollection/FeaturedCollection";
import Hero from "./Hero/Hero";
import MainSection from "./Main/MainSection";
import Layout from "./shared/Layout";

export default function HomePage() {
	return (
		<div>
			<Layout>
				<Hero />
				<MainSection />
				<FeaturedCollection />
			</Layout>
		</div>
	);
}
