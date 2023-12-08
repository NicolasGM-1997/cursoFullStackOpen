const Filter = ({text,valor,evento}) =>{
	return(
		<p>{text} <input value={valor} onChange={evento}/></p>
	)
}

export default Filter