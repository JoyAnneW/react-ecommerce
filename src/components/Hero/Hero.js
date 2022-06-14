import React from "react";
import "./Hero.styles.scss";

export default function Hero() {
	return (
		<div>
			<section className="hero is-large is-info hero-image">
				<div className="hero-body">
					<div className="container">
						<p className="title">Bags reimagined for modern life</p>
						<div className="shop-now-btn">
							<button className="button is-black" id="shop-now">
								SHOP NOW
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
