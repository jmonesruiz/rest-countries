import React, { useReducer, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import BackButton from "../components/BackButton";
import "./Details.scss";

function detailsReducer(_, action) {
	if (action.type === "SET_LOADING") {
		return { isLoading: true, isValid: false, countryDetails: {} };
	}
	if (action.type === "SET_INVALID") {
		return { isLoading: false, isValid: false, countryDetails: {} };
	}
	if (action.type === "SET_VALUE") {
		return { isLoading: false, isValid: true, countryDetails: action.value };
	}
	return { isLoading: false, isValid: false, countryDetails: {} };
}

function Details(props) {
	const { id } = useParams();
	const [state, dispatchFn] = useReducer(detailsReducer, {
		isLoading: true,
		isValid: false,
		countryDetails: {},
	});

	useEffect(() => {
		(async () => {
			dispatchFn({ type: "SET_LOADING" });
			try {
				if (props.countries.has(id)) {
					let req = await fetch(
						`https://restcountries.com/v3.1/alpha/${id}?fields=name,tld,currencies,languages,subregion,borders`
					);
					if (req.ok) {
						let data = await req.json();
						data = {
							nativeName: data.name.nativeName,
							tld: data.tld ? data.tld[0] : [],
							currencies: data.currencies,
							languages: data.languages ? data.languages : [],
							subregion: data.subregion,
							borders: data.borders ? data.borders : [],
						};
						dispatchFn({ type: "SET_VALUE", value: data });
					} else {
						dispatchFn({ type: "SET_INVALID" });
					}
				} else {
					dispatchFn({ type: "SET_INVALID" });
				}
			} catch (error) {
				dispatchFn({ type: "SET_INVALID" });
			}
		})();
	}, [id, props.countries]);

	let content;
	if (state.isLoading) {
		content = (
			<div className="details__container">
				<PulseLoader color="var(--text-color)" />
			</div>
		);
	} else if (state.isValid) {
		let country = props.countries.get(id);
		content = (
			<div className="details__country">
				<img className="details__country-flag" src={country.flag} alt={`${id} flag'`} />
				<div className="details__country-info">
					<h2 className="details__name">{country.name}</h2>
					<div className="details__info-items">
						<div className="details__info-item">
							<h3 className="details__label">Native Name: </h3>
							<p className="details__value">
								{Object.values(state.countryDetails.nativeName)[0]
									? Object.values(state.countryDetails.nativeName)[0].common
									: ""}
							</p>
						</div>
						<div className="details__info-item">
							<h3 className="details__label">Top Level Domain: </h3>
							<p className="details__value">{state.countryDetails.tld}</p>
						</div>
						<div className="details__info-item">
							<h3 className="details__label">Population: </h3>
							<p className="details__value">
								{country.population.toLocaleString("en-US")}
							</p>
						</div>
						<div className="details__info-item">
							<h3 className="details__label">Currencies: </h3>
							<p className="details__value">
								{Object.entries(state.countryDetails.currencies).reduce(
									(prev, curr) => {
										if (prev === "") return curr[1].name;
										return prev + ", " + curr[1].name;
									},
									""
								)}
							</p>
						</div>
						<div className="details__info-item">
							<h3 className="details__label">Region: </h3>
							<p className="details__value">{country.region}</p>
						</div>
						<div className="details__info-item">
							<h3 className="details__label">Languages: </h3>
							<p className="details__value">
								{Object.entries(state.countryDetails.languages).reduce(
									(prev, curr) => {
										if (prev === "") return curr[1];
										return prev + ", " + curr[1];
									},
									""
								)}
							</p>
						</div>
						<div className="details__info-item details__info-item--subregion">
							<h3 className="details__label">Sub Region: </h3>
							<p className="details__value">{state.countryDetails.subregion}</p>
						</div>
						<div className="details__info-item">
							<h3 className="details__label">Capital: </h3>
							<p className="details__value">{country.capital}</p>
						</div>
					</div>
					<div className="details__info-item--borders">
						{state.countryDetails.borders.length !== 0 ? (
							<h3 className="details__label">Border Countries: </h3>
						) : (
							""
						)}
						{state.countryDetails.borders.map((elem) => {
							return (
								<Link
									key={elem}
									className="details__border-country"
									to={`/details/${elem}`}
								>
									{props.countries.get(elem).name}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		);
	} else if (!props.countries.has(id)) {
		content = (
			<div className="details__container">
				<h2 className="details__not-found-title">Country not found</h2>
			</div>
		);
	} else {
		content = (
			<div className="details__container">
				<h2 className="details__not-found-title">
					An error has ocurred, please try again.
				</h2>
			</div>
		);
	}

	return (
		<section className="details">
			<BackButton />
			{content}
		</section>
	);
}

export default Details;
