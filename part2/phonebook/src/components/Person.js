import React from 'react'

const Person = ({ person, deleteContact }) => {
    return (
        <div>
            {person.name} {person.number} <button onClick={deleteContact}>delete</button>

        </div>
    )
}

export default Person