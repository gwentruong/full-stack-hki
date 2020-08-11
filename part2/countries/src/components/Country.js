import React from 'react'
import Weather from './Weather'

const CountryInfo = ({country}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <div>
                capital {country.capital}<br/>
                population {country.population}
            </div>
            <h3>Languages</h3>
            <ul>
                {country.languages.map((language, index) => <li key={index}>{language.name}</li>)}
            </ul>
            <div>
                <img src={country.flag} alt={country.name} width="120" height="100"/>
            </div>
        </div>
    )
}
const Country = ({country}) => {
    return (
        <div>
            <CountryInfo country={country} />
            <Weather capital={country.capital} />
        </div>
    )
}

export default Country