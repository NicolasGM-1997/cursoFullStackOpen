export const ListPerson = ({persons}) =>{
	return(
		<div>
			{persons.map((person,i)=>(
				<p key={i}>
					{person.name} : {person.number}
				</p>
			))}
		</div>
	)
}

export const ListPaises = ({paises}) =>{
	return(
		<div>
			{paises.map((pais,i)=>(
				<p key={i}>
					{pais.name.common}
				</p>
			))}
		</div>
	)
}
