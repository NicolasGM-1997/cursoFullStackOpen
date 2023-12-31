import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const App = () => {
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header = ({course}) =>{
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({part1,exercises1,part2,exercises2,part3,exercises3}) =>{
  return(
    <div>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises3}/>
      <Part part={part2} exercise={exercises3}/>
    </div>
  )
}

const Total = ({exercises1,exercises2,exercises3}) =>{
  return(
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const Part = ({part,exercise}) =>{
  return(
    <div>
      <p>
        {part} {exercise}
      </p>
    </div>
  )
}

root.render(
  <App/>
)