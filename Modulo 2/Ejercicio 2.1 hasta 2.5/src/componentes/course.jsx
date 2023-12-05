import Header from '/src/componentes/header.jsx'
import Content from '/src/componentes/content.jsx'
import Total from '/src/componentes/total.jsx'

const Course = ({course}) =>{
	var name = course.name
	var parts = course.parts
	return(
		<div>
			<Header course={name}/>
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
	)
}

export default Course