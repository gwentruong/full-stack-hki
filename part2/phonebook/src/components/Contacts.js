import React from 'react'

const Person = ({ person }) => {
    return (
        <div>
            {person.name} {person.number}
        </div>
    )
}

const Contacts = ( {contacts} ) => {
    return (
        <div>
            {contacts.map(person => <Person key={person.id} person={person} />)}
        </div>
    )
}

export default Contacts