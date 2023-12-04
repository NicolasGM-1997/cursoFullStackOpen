import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

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

const App = () => {
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
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