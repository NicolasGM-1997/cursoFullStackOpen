import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' , number: '12345'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={enviarDatos}>
        <div>
          <p>name: <input value={newName} onChange={cambioNombre}/></p>
          <p>number: <input value={newNumber} onChange={cambioNumero}/></p>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i)=>(
        <p key={i}>{person.name} : {person.number}</p>
      ))}
    </div>
  )
}

root.render(
  <App/>
)

export default App