const Person = ({valorName, valorNumber, eventoName, eventoNumber}) =>{
	return(
		<div>
			<p>Name: <input value={valorName} onChange={eventoName}/></p>
			<p>Number: <input value={valorNumber} onChange={eventoNumber}/></p>
		</div>
	)
}

export default Person