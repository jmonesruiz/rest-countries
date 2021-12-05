import React from "react";
import { Link } from "react-router-dom";
import "./Country.scss";

function Country(props) {
	let country = props.country;

	return (
		<li className="country-item">
			<Link className="country" to={`/details/${props.id}`}>
				<div className="country__flag-container">
					<img className="country__flag" src={country.flag} alt={`${props.id} flag'`} />
				</div>
				<div className="country__info">
					<h2 className="country__name">{country.name}</h2>
					<div className="country__info-item">
						<h3 className="country__label">Population: </h3>
						<p className="country__value">
							{country.population.toLocaleString("en-US")}
						</p>
					</div>
					<div className="country__info-item">
						<h3 className="country__label">Region: </h3>
						<p className="country__value">{country.region}</p>
					</div>
					<div className="country__info-item">
						<h3 className="country__label">Capital: </h3>
						<p className="country__value">{country.capital}</p>
					</div>
				</div>
			</Link>
		</li>
	);
}

export default Country;
