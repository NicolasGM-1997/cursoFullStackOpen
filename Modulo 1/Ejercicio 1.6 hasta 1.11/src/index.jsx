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

  return (
    <div>
    	<h1>Comentarios</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = ({good,neutral,bad}) =>{

  var all = good + neutral + bad
  var average = all / 3
  var positive = good / all * 100

  return(
    <div>
    {all>0?(
      <div>
        <h1>Estadisticas</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={all}/>
            <StatisticLine text="average" value={average}/>
            <StatisticLine text="positive" value={positive} simbol="%"/>
          </tbody>
        </table>   
      </div>
    ):(
      <div>
        <p>No hay Comentarios</p>
      </div>
    )}
    </div>
  )
}

const StatisticLine = ({text,value,simbol}) =>{
  return(
    <tr>
      <td>{text}</td> 
      <td>{value}{simbol}</td>
    </tr>
  )
}

root.render(
  <App/>
)