import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')
  const [ notiMsg, setNotiMsg ] = useState(null)

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
      const existedPerson = persons.find(p => p.name === newName)
      const changedPerson = {...existedPerson, number: newNumber}
      const msg = `${newName} is already added to phonebook, replace the old number with the new one?`
      
      if (window.confirm(msg)) {
        personService
          .update(changedPerson.id, changedPerson)
          .then(updatedPerson => {
            setNotiMsg({
              message: `Updated infomation of ${updatedPerson.name}`,
              type: "success"
            })
            setTimeout(() => {
              setNotiMsg(null)
            }, 3000)

            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson))
          }) 
      }
      return
    }

    const max = Math.max.apply(null, persons.map(item => item.id))

    const personObject = {
      id: max + 1,
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedContact => {
        setNotiMsg({
          message: `Added ${returnedContact.name}`,
          type: "success"})
        setTimeout(() => {
          setNotiMsg(null)
        }, 3000)

        setPersons(persons.concat(returnedContact))
        setNewName('')
        setNewNumber('')
      })
  }

  const deleteContact = (id) => {
    let updatedList = persons.filter(p => p.id !== id)
    let name = persons.find(p => p.id === id).name

    if (window.confirm(`Delete ${name}?`)) {
        personService
          .remove(id)
          .then(() => {
            setNotiMsg({
              message: `Removed infomation of ${name}`,
              type: "success"
            })
            setTimeout(() => {
              setNotiMsg(null)
            }, 3000)

            setPersons(updatedList)
          })
          .catch(error => {
            setNotiMsg({
              message: `Infomation of ${name} has already removed from server`,
              type: "error"
            })
            setTimeout(() => {
              setNotiMsg(null)
            }, 3000)

            setPersons(updatedList)
          })  
    }
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
      <Notification message={notiMsg} />
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
        {dynamicContacts.map(person => <Person 
                                          key={person.id} 
                                          person={person}
                                          deleteContact={() => deleteContact(person.id)} />)}
      </div>
    </div>
  )
}

export default App
