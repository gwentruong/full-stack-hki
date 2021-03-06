import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const {handleClick, label} = props

  return <button onClick={handleClick} >{label}</button>
}

const Anecdote = (props) => {
  const {index, anecdote, points} = props

  return (
    <>
      <div>
        {anecdote}
      </div>
      <div>
        <p>has {points[index]} {points[index] > 1 ? "votes" : "vote"}</p>
      </div>
    </>
  )
}

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

  const findMaxIndex = () => {
    let index = points.findIndex(p => p === Math.max(...points))
    return index
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote
        index={selected}
        anecdote={props.anecdotes[selected]}
        points={points} />
      <div>
        <Button
          handleClick={() => addVote()}
          label="vote" />
        <Button 
          handleClick={() => setSelected(getRandomInt(props.anecdotes.length))}
          label="next anecdote" /> 
      </div>
      <h1>Anecdote with the most votes</h1>
      <Anecdote
        index={findMaxIndex()}
        anecdote={props.anecdotes[findMaxIndex()]}
        points={points} />
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
