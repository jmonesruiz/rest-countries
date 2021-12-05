import React from "react";
import Country from "./Country";
import "./CountryList.scss";

function CountryList(props) {
	return (
		<ul className="country-list">
			{[...props.countries].map((country) => {
				return <Country key={country[0]} id={country[0]} country={country[1]} />;
			})}
		</ul>
	);
}

export default CountryList;
