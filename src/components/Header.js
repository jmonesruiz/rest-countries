import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import "./Header.scss";

function Header(props) {
	return (
		<header className="header">
			<h1 className="header__title">Where in the world?</h1>
			<ThemeSwitch darkTheme={props.darkTheme} setDarkTheme={props.setDarkTheme} />
		</header>
	);
}

export default Header;
