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
      {parts.map((part, i) => <Part key={i} name={part.name} exercise={part.exercises} />)}
    </div>
  )
}

const Total = (props) => {
  let parts = props.parts
  let totalSum = 0

  parts.forEach(part => {
    totalSum += part['exercises']
  })

  return <div><p><b>total of {totalSum} exercises</b></p></div>
}

const Course = ({ course }) => {
  return (    <div>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total parts={course.parts} />
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      }, 
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }
  
  return (
    <Course course={course} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))