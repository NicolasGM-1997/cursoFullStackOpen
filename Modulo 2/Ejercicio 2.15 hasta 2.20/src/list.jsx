import App from '/src/app.jsx'

export const ListNote = ({notes, eliminar}) =>{
	return(
		<div>
			{notes.map((note,i)=>(
				<p key={i}>
					{note.name} : {note.number}<button onClick={()=>eliminar(note)}>DELETE</button>
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
