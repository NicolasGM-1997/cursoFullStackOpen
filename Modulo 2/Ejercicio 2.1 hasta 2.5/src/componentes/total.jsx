const Total = ({parts}) =>{
	var total = 0
	parts.map((part)=>(
		total += part.exercises
	))
  return(
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
} 

export default Total