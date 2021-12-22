import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = (props) => {
	const [data, setData] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [filteredResults, setFilteredResults] = useState([]);

	// get data by axios
	const getData = () => {
		const headers = { "Content-Type": "application/json" };
		axios
			.get("/myunsplash", { headers })
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				throw err;
			});
	};

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);
		if (searchInput !== "") {
			const filteredData = data.filter((item) => {
				return Object.values(item.label)
					.join("")
					.toLowerCase()
					.includes(searchInput.toLowerCase());
			});
			setFilteredResults(filteredData);
		} else {
			setFilteredResults(data);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.setLabel(searchInput);
		setSearchInput("");
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div data={searchInput} className="relative">
			<form onSubmit={handleSubmit}>
				<div className="w-72 h-14 relative rounded-xl border border-gray-300">
					<input id="label" type="submit" className="hidden" />
					<label
						htmlFor="label"
						className="material-icons absolute py-4 px-2 cursor-pointer"
					>
						search
					</label>
					<input
						type="text"
						className="focus:outline-none rounded-xl border focus:border-indigo-600 w-full h-full pl-10"
						placeholder="Search by name"
						onChange={(e) => searchItems(e.target.value)}
						value={searchInput}
					/>
				</div>
				{searchInput !== "" && filteredResults.length > 0 ? (
					<div className="w-full h-40 bg-white shadow-lg top-13 absolute z-20 rounded-lg overflow-hidden">
						{filteredResults.map((item) => {
							return (
								<span
									onClick={() => {
										setSearchInput(item.label);
										setFilteredResults([]);
									}}
									className="block border-b border-b-indigo-200 text-gray-900 font-medium p-2 cursor-pointer"
								>
									{item.label}
								</span>
							);
						})}
					</div>
				) : null}
			</form>
		</div>
	);
};

export default Search;
