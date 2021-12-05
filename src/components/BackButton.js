import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace as BackIcon } from "react-icons/md";
import "./BackButton.scss";

function BackButton() {
	return (
		<Link className="back-btn" to="/">
			<BackIcon className="back-btn__icon" />
			Back
		</Link>
	);
}

export default BackButton;
