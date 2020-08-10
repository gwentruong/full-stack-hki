import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(
        response => {
          setCountries(response.data)
        },
        error => {
          console.log('Error')
        }
      )
  }

  useEffect(hook, [])

  const handleTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const dynamicSearch = (term) => {
    let results = []
    if (term) {
      let fil = countries.filter(country => country.name.toLowerCase().includes(term))
      if (fil.length < 11)
        results = fil
    }    
    return results
  }

  return (
    <div>
      <Filter
        searchTerm={searchTerm}
        handleSearch={handleTermChange} />
      <Countries 
        countries={dynamicSearch(searchTerm)} />
    </div>
  )
}

export default App
