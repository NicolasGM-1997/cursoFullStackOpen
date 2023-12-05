import Header from '/src/componentes/header.jsx'
import Content from '/src/componentes/content.jsx'
import Total from '/src/componentes/total.jsx'

const Course = ({courses}) =>{
	return(
		<div>
			{courses.map((course)=>(
				<div key={course.id}>
					<Header course={course.name}/>
		      <Content parts={course.parts} />
		      <Total parts={course.parts}/>
				</div>
			))}
			
    </div>
	)
}

export default Course