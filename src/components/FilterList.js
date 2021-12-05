import React from "react";
import "./FilterList.scss";
import Select from "react-select";

function FilterList(props) {
	return (
		<Select
			className="rs"
			classNamePrefix="rs"
			isSearchable={false}
			isClearable={true}
			placeholder="Filter by Region"
			options={[
				{ value: "Africa", label: "Africa" },
				{ value: "Americas", label: "America" },
				{ value: "Asia", label: "Asia" },
				{ value: "Europe", label: "Europe" },
				{ value: "Oceania", label: "Oceania" },
			]}
			value={props.value}
			onChange={handleChange}
		/>
	);
	function handleChange(v) {
		props.onChange(v);
	}
}

export default FilterList;
