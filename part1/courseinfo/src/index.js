import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <div><h1>{props.course}</h1></div>
}

const Part = (props) => {
  return <div><p>{props.name} {props.exercise}</p></div>
}

const Content = (props) => {
  let parts = props.parts

  return (
    <div>
      {parts.map(part => <Part name={part.name} exercise={part.exercises} />)}
    </div>
  )
}

const Total = (props) => {
  let parts = props.parts
  let totalSum = 0

  parts.forEach(part => {
    totalSum += part['exercises']
  })

  return <div><p>Number of exercises {totalSum}</p></div>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))