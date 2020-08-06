import React from 'react'

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
        {parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercises} />)}
      </div>
    )
  }
  
  const Total = (props) => {
    let parts = props.parts
    let totalSum = parts.reduce((s, p) => s + (p['exercises'] || 0), 0)
  
    return <div><p><b>total of {totalSum} exercises</b></p></div>
  }
  
  const Course = ({ course }) => {
    return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
    )
  }

  export default Course