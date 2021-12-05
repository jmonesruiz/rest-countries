import React, { useEffect, useReducer } from "react";
import SearchBar from "../components/SearchBar";
import FilterList from "../components/FilterList";
import CountryList from "../components/CountryList";
import "./Home.scss";

function homeReducer(prev, action) {
	if (action.type === "SEARCH") {
		return { search: action.value, filter: prev.filter, countries: prev.countries };
	}
	if (action.type === "FILTER") {
		return { search: prev.search, filter: action.value, countries: prev.countries };
	}
	if (action.type === "SET_COUNTRIES") {
		return { search: prev.search, filter: prev.filter, countries: action.value };
	}
	return { search: "", filter: null, countries: prev.countries };
}

function Home(props) {
	const [state, dispatchFn] = useReducer(homeReducer, {
		search: "",
		filter: null,
		countries: props.countries,
	});

	useEffect(() => {
		let filteredCountries = props.countries;
		if (state.filter !== null) {
			filteredCountries = [...filteredCountries].reduce((map, curr) => {
				if (curr[1].region === state.filter.value) {
					map.set(curr[0], curr[1]);
				}
				return map;
			}, new Map());
		}
		if (state.search !== "") {
			filteredCountries = [...filteredCountries].reduce((map, curr) => {
				if (curr[1].name.toLowerCase().includes(state.search.toLowerCase())) {
					map.set(curr[0], curr[1]);
				}
				return map;
			}, new Map());
		}
		dispatchFn({ type: "SET_COUNTRIES", value: filteredCountries });
	}, [state.search, state.filter, props.countries]);

	return (
		<section className="home">
			<div className="home__bar">
				<SearchBar value={state.search} onChange={onSearchChange} />
				<FilterList value={state.filter} onChange={onFilterChange} />
			</div>
			<CountryList countries={state.countries} />
		</section>
	);

	function onSearchChange(value) {
		dispatchFn({ type: "SEARCH", value: value });
	}
	function onFilterChange(value) {
		dispatchFn({ type: "FILTER", value: value });
	}
}

export default Home;
