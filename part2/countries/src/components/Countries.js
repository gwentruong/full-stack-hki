import React, { useState } from 'react'
import Country from './Country'

const CountryList = ({countries, isShown, handleClick}) => {
    return (
        <>
            {countries.map((country, index) =>
            <div key={index}>
                <li>
                    {country.name} <button
                                        id={country.name} 
                                        onClick={handleClick}>
                                            show
                                    </button>
                </li>
                {isShown.includes(country.name)
                    ? <Country country={country} />
                    : null}
            </div>)}
            
        </>
    )
}

const Countries = ({countries}) => {
    const [shownCountries, setShownCountries] = useState([])

    const showClick = (event) => {
        let clickedId = event.target.id
        let countryList = shownCountries
        if (shownCountries.includes(clickedId)) {
            countryList = shownCountries.filter(countryId => countryId !== clickedId)
        } else {
            countryList = [...shownCountries, clickedId]
        }
        setShownCountries(countryList)
    }

    if (countries.length) {
        if (countries.length === 1) {
            return (
                <div>
                    {countries.map((country, index) => <Country key={index} country={country} />)}
                </div>
            )
        }
        return (
            <CountryList 
                countries={countries}
                isShown={shownCountries} 
                handleClick={showClick}/>
        )
    } else {
        return (
            <div>
                Too many results, please specify another filter
            </div>
        )
    }
}

export default Countries