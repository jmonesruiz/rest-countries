import React from "react";
import BackButton from "../components/BackButton";
import "./NotFound.scss";

function NotFound() {
	return (
		<section className="not-found">
			<BackButton />
			<div className="not-found__container">
				<h2 className="not-found__title">Page not found</h2>
			</div>
		</section>
	);
}

export default NotFound;
