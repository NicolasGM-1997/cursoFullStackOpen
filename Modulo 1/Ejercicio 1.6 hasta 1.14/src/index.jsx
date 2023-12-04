import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = ()=>{
  	setGood(good+1)
  }

  const handleNeutral = ()=>{
  	setNeutral(neutral+1)
  }

  const handleBad = ()=>{
  	setBad(bad+1)
  }

  var all = good + neutral + bad
  var average = all / 3
  var positive = good / all * 100

  return (
    <div>
    	<h1>Comentarios</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <h1>Estadisticas</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average : {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}

root.render(
  <App/>
)