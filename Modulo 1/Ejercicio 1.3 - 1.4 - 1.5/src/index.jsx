import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

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
    }
  ]
}

const App = () => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
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

const Content = ({parts}) =>{
  return(
    <div>
      {parts.map((pts,i)=>(
        <Part part={pts.name} exercise={pts.exercises} key={i}/>
      ))}
    </div>
  )
}

const Total = ({parts}) =>{
  var total = 0
  {parts.map((pts)=>(
    total += pts.exercises
  ))}
  return(
    <div>
      <p>Number of exercises {total}</p>
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