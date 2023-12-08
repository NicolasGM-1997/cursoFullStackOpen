import App from '/src/app.jsx'

export const ListPerson = ({persons, eliminar}) =>{
	return(
		<div>
			{persons.map((person,i)=>(
				<p key={i}>
					{person.name} : {person.number}<button onClick={()=>eliminar(person)}>DELETE</button>
				</p>
			))}
		</div>
	)
}

export const ListPaises = ({paises, setNewFilter}) =>{

	const seleccionPais = (pais) =>{
		setNewFilter(pais)
	}

	return(
		<div>
			{paises.map((pais,i)=>(
				<div key={i}>
					{pais.name.common}
					<button onClick={()=>seleccionPais(pais.name.common)}>Seleccionar</button>
				</div>
			))}
		</div>
	)
}
