import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(props.anecdotes.map(p => 0))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const addVote = () => {
    let copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        <p>has {points[selected]} votes</p>
      </div>
      <div>
        <button
          onClick={() => addVote()}>vote</button>
        <button 
          onClick={() => setSelected(getRandomInt(props.anecdotes.length))}> 
          next anecdote
        </button>
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
