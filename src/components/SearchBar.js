import React from "react";
import { HiOutlineSearch as SearchIcon } from "react-icons/hi";
import "./SearchBar.scss";

function SearchBar(props) {
	return (
		<label className="search-bar" htmlFor="search-bar">
			<SearchIcon className="search-bar__icon" />
			<input
				id="search-bar"
				className="search-bar__input"
				type="text"
				value={props.value}
				onChange={handleChange}
				placeholder="Search for a country..."
			/>
		</label>
	);

	function handleChange(e) {
		props.onChange(e.target.value);
	}
}

export default SearchBar;
