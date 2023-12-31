import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])

  const handleAnecdote = ()=>{
    var random = Math.floor(Math.random()*6)
    setSelected(random)
  }

  const handleVote = () =>{
    const copyPoints = [...points];
    copyPoints[selected] += 1;
    setPoints(copyPoints);
  }

  const max = Math.max.apply(null, points)
  const pos = points.indexOf(max)

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>Votes: {points[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleAnecdote}>Next Anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[pos]}</p>
    </div>
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

root.render(
  <App anecdotes={anecdotes}/>
)