import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
 const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  const enviarDatos = () =>{
    event.preventDefault()
    const nombreExistente = persons.some((person) => person.name === newName)
    if(nombreExistente){
      alert(newName+"is already added to phonebook")
    } else {
      var copyPersons = [...persons]
      copyPersons.push({name:newName, number:newNumber})
      setPersons(copyPersons)
    }
    setNewName('')
    setNewNumber('')
  }

  const cambioNombre = (event) =>{
    setNewName(event.target.value)
  }

  const cambioNumero = (event) =>{
    setNewNumber(event.target.value)
  }

  const cambioFiltro = (event) => {
    setNewFilter(event.target.value);
  }

  const personasFiltradas = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={enviarDatos}>
        <p>Filter shown with <input value={newFilter} onChange={cambioFiltro}/></p>
        <div>
          <p>name: <input value={newName} onChange={cambioNombre}/></p>
          <p>number: <input value={newNumber} onChange={cambioNumero}/></p>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personasFiltradas.map((person,i)=>(
        <p key={i}>{person.name} : {person.number}</p>
      ))}
    </div>
  )
}

root.render(
  <App/>
)

export default App