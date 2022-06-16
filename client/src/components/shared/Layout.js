import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// this component wraps the others as children, which will be rendered inside the main
export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
