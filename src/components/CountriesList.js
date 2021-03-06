import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

function CountriesList() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		try {
			const fieldList = 'flag;name;population;region;capital;alpha3Code;numericCode';
			axios
				.get(`https://restcountries.eu/rest/v2/all?fields=${fieldList}`)
				.then(response => {
					console.log(response.data);
					setCountries(response.data);
				});
		} catch (error) {
			console.error(error);
		}
	}, []);

	// useEffect(() => {
	// 	try {
	// 		axios.get(`https://restcountries.eu/rest/v2/all`).then(response => {
	// 			console.log(response.data);
	// 		});
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }, []);

	return (
		<div>
			{countries.map(country => (
				<CountryCard country={country} key={country.alpha3Code} />
			))}
		</div>
	);
}

export default CountriesList;
