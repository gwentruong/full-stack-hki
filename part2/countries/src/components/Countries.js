import React from 'react'

const Country = ({country}) => {
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

const Countries = ({countries}) => {
    return (
        <div>
            { !countries.length
                ? "Too many results, please specify another filter"
                : (countries.length !== 1
                    ? countries.map((country, index) => <li key={index}>{country.name}</li>)
                    : countries.map((country, index) => <Country key={index} country={country} />))
            }
        </div>
    )
}

export default Countries