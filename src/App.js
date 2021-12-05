import React, { useState, useEffect, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import "./App.scss";

function appReducer(_, action) {
	if (action.type === "SET_LOADING") {
		return { isLoading: true, isValid: false, countries: null };
	}
	if (action.type === "SET_INVALID") {
		return { isLoading: false, isValid: false, countries: null };
	}
	if (action.type === "SET_VALUE") {
		return { isLoading: false, isValid: true, countries: action.value };
	}
	return { isLoading: false, isValid: false, countries: null };
}

function App() {
	const [darkTheme, setDarkTheme] = useState(true);

	const [appState, dispatchFn] = useReducer(appReducer, {
		isLoading: true,
		isValid: false,
		countries: null,
	});

	useEffect(() => {
		let savedDarkTheme = localStorage.getItem("dark-theme");
		if (savedDarkTheme) {
			savedDarkTheme = savedDarkTheme === "true";
			setDarkTheme(savedDarkTheme);
		}

		(async () => {
			dispatchFn({ type: "SET_LOADING" });
			try {
				let req = await fetch(
					"https://restcountries.com/v3.1/all?fields=cca3,flags,name,population,region,capital"
				);
				if (req.ok) {
					let data = await req.json();

					data = data.reduce((map, elem) => {
						map.set(elem.cca3, {
							name: elem.name.common,
							flag: elem.flags.svg,
							population: elem.population,
							region: elem.region,
							capital: elem.capital ? elem.capital[0] : [],
						});
						return map;
					}, new Map());

					dispatchFn({ type: "SET_VALUE", value: data });
				} else {
					dispatchFn({ type: "SET_INVALID" });
				}
			} catch (error) {
				dispatchFn({ type: "SET_INVALID" });
			}
		})();
	}, []);
	useEffect(() => {
		localStorage.setItem("dark-theme", darkTheme);
	}, [darkTheme]);

	let content;
	if (appState.isLoading) {
		content = (
			<div className="page__container">
				<PulseLoader color="var(--text-color)" />
			</div>
		);
	} else if (appState.isValid) {
		content = (
			<Switch>
				<Route path="/" exact>
					<Home countries={appState.countries} />
				</Route>
				<Route path="/details/:id" exact>
					<Details countries={appState.countries} />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		);
	} else {
		content = (
			<div className="page__container">
				<h2 className="page__not-found-title">An error has ocurred, please try again.</h2>
			</div>
		);
	}

	return (
		<div className={`app${darkTheme ? " dark" : ""}`}>
			<Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
			<main className="page">{content}</main>
		</div>
	);
}

export default App;
