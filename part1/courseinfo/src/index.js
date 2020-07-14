import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <div><h1>{props.course}</h1></div>
}

const Part = (props) => {
  return <div><p>{props.part} {props.exercise}</p></div>
}

const Total = (props) => {
  return <div><p>Number of exercises {props.total}</p></div>
}

const sum = exercises => {
  console.log(exercises)
  let total = 0
  
  exercises.forEach(e => {
    console.log(e)
    total += e
  })

  return total
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  const Content = () => {
    return (
      <div>
        <Part 
          part={part1['name']}
          exercise={part1['exercises']} />
        <Part 
          part={part2['name']}
          exercise={part2['exercises']} />
        <Part 
          part={part3['name']}
          exercise={part3['exercises']} />
      </div>
    )
  }
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={sum([part1['exercises'], part2['exercises'], part3['exercises']])} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))