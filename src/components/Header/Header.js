import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Header.styles.scss";

export default function Header() {
	return (
		<nav className="nav-menu container">
			<div className="logo">
				<Link to="/">NOMAD</Link>
			</div>

			<ul>
				<li>
					{" "}
					<Link to="/">Home</Link>
				</li>
				<li>
					{" "}
					<Link to="/shop">Shop</Link>
				</li>
			</ul>
			<Cart />
		</nav>
	);
}
