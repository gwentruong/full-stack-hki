import React, { useState, useRef } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')
  const personsRef = useRef(persons)

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
    setPersons([...persons, personObject])
    setNewName('')
    setNewNumber('')
  }

  const dynamicSearch = (text) => {
    personsRef.current = text ? persons.filter(p => p.name.includes(text)) : persons
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterText(event.target.value)
    dynamicSearch(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
        <Filter 
          value={filterText}
          onChange={handleFilterChange} />
      <h2>add a new</h2>
      <form>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange} />
        </div>
        <div>
          number: <input 
                  value={newNumber}
                  onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts contacts={personsRef.current} />
    </div>
  )
}

export default App
