import React from 'react';
import styled from 'styled-components/macro';

function CountryCard({ country }) {
	return (
		<Wrapper key={country.alpha3Code}>
			<FlagWrapper>
				<img src={country.flag} alt={`flag of ${country.name}`} />
			</FlagWrapper>
			<h2>{country.name}</h2>
            <ul>
                <li>Population: {country.population}</li>
                <li>Region: {country.region}</li>
                <li>Capital: {country.capital}</li>
            </ul>
		</Wrapper>
	);
}

const Wrapper = styled.button`
	border-radius: 5px;
	border: none;
`;

const FlagWrapper = styled.div``;

export default CountryCard;
