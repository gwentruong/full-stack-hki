import React from 'react'

const Country = ({country}) => {
    return (
        <div>
            {country.name}
        </div>
    )
}
const Countries = ({countries}) => {
    return (
        <div>
            { countries.length
                ? countries.map((country, index) => <Country key={index} country={country} />)
                : "Too many results, please specify another filter"}
        </div>
    )
}

export default Countries