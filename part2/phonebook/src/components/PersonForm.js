import React from 'react'

const PersonForm = ( {name, handleName, number, handleNumber, addContact}) => {
    return (<form>
        <div>
          name: <input 
                  value={name}
                  onChange={handleName} />
        </div>
        <div>
          number: <input 
                  value={number}
                  onChange={handleNumber} />
        </div>
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form>
    )
}

export default PersonForm