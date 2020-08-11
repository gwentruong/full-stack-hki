import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  const addContact = (event) => {
    event.preventDefault()

    if (persons.findIndex(p => p.name === newName) > -1) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterText(event.target.value)
  }

  let dynamicContacts = persons
  
  if (filterText) 
    dynamicContacts = persons.filter(p => p.name.includes(filterText))  

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter 
          value={filterText}
          onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        name={newName}
        handleName={handleNameChange}
        number={newNumber}
        handleNumber={handleNumberChange}
        addContact={addContact} />
      <h2>Numbers</h2>
      <div>
        {dynamicContacts.map(person => <Person key={person.id} person={person}/>)}
      </div>
    </div>
  )
}

export default App
