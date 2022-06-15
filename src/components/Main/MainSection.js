import React from "react";
import "./MainSection.styles.scss";
import { useNavigate } from "react-router-dom";
import studioBag from "../../assets/studio-bag.png";

export default function MainSection({ history }) {
	const navigate = useNavigate();

	return (
		<div className="main-section-container">
			<div className="main-section-middle">
				<div className="middle-image">
					<img src={studioBag} alt="studio bag" />
				</div>

				<div className="middle-description">
					<h2>Designed for fashion, crafted for sport.</h2>
					<p>
						We make products that effortlessly transition from day to night.
						From the board room to the fitness studio, and everywhere in
						between, each NOMAD piece is thoughtfully created to be the perfect
						balance of form and function.
					</p>
					<button
						className="button is-black"
						id="shop-now"
						// this will navigate to the product view page of product #1. Need to be able to pass an id here.
						onClick={() => navigate("/product/1")}
					>
						STUDIO BAG
					</button>
				</div>
			</div>
		</div>
	);
}
