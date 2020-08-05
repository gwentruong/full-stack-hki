import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {getCount()}</p>
        <p>average {getAverage()}</p>
        <p>positive {getPositive()}</p>
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
        <button
          onClick={() => setGood(good+1)}>
            good
        </button>
        <button
          onClick={() => setNeutral(neutral+1)}>
            neutral
        </button>
        <button
          onClick={() => setBad(bad+1)}>
            bad
        </button>
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
