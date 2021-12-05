import React from "react";
import { FaMoon as MoonIcon, FaRegMoon as MoonOutlineIcon } from "react-icons/fa";
import "./ThemeSwitch.scss";

function ThemeSwitch(props) {
	return (
		<label className="theme-switch" htmlFor="theme-switch">
			<input
				type="checkbox"
				className="theme-switch__checkbox"
				name="theme-switch"
				id="theme-switch"
				checked={props.darkTheme}
				onChange={changeHandler}
			/>
			<div className="theme-switch__label">
				{props.darkTheme ? (
					<MoonIcon className="theme-switch__icon" />
				) : (
					<MoonOutlineIcon className="theme-switch__icon" />
				)}
				<p className="theme-switch__text">Dark Mode</p>
			</div>
		</label>
	);

	function changeHandler(event) {
		props.setDarkTheme(event.target.checked);
	}
}

export default ThemeSwitch;
