import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const {handleClick, label} = props
  return (
    <button onClick={handleClick}>
      {label}
    </button>
  )
}
const Statistic = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}
const Statistics = (props) => {
  const getCount = () => {
    return props.good + props.neutral + props.bad
  }
  const getAll = () => {
    return props.good*1 + props.neutral*0 + props.bad*(-1)
  }

  const getAverage = () => {
    return getAll()/getCount()
  }

  const getPositive = () => {
    return (props.good*100)/getCount()
  }

  if (getCount())  {
    return (
      <div>
        <Statistic text="good" value={props.good}/>
        <Statistic text="neutral" value={props.neutral}/>
        <Statistic text="bad" value={props.bad}/>
        <Statistic text="all" value={getCount()}/>
        <Statistic text="average" value={getAverage()}/>
        <Statistic text="positive" value={getPositive()}/>
      </div>
    )
  } else {
    return (<div>
      <p>No feedback given</p>
    </div>)
  }
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button label="good" handleClick={() => setGood(good+1)} />
        <Button label="neutral" handleClick={() => setNeutral(neutral+1)} />
        <Button label="bad" handleClick={() => setBad(bad+1)} />
      </div>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
