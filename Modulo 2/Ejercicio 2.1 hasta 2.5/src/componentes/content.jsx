import Part from '/src/componentes/part.jsx'

const Content = ({parts}) =>{
  return(
    <div>
      {parts.map((part)=>(
      	<Part part={part.name} exercise={part.exercises} key={part.id}/>
      ))}
    </div>
  )
}

export default Content