import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
	return (
		<Link to={`/${country.numericCode}`}>
			<CardWrapper key={country.alpha3Code}>
				<FlagWrapper>
					<img src={country.flag} alt={`flag of ${country.name}`} />
				</FlagWrapper>
				<h2>{country.name}</h2>
				<ul>
					<li>Population: {country.population}</li>
					<li>Region: {country.region}</li>
					<li>Capital: {country.capital}</li>
				</ul>
			</CardWrapper>
		</Link>
	);
}

const CardWrapper = styled.div`
	border-radius: 5px;
    width: 264px;
    height: 336px;
`;

const FlagWrapper = styled.div``;

export default CountryCard;
