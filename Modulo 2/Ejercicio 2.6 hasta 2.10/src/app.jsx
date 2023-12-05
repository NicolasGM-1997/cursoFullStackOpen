import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const enviarNombre = () =>{
    event.preventDefault()
    const nombreExistente = persons.some((person) => person.name === newName)
    if(nombreExistente){
      alert(newName+"is already added to phonebook")
    } else {
      var copyPersons = [...persons]
      copyPersons.push({name:newName})
      setPersons(copyPersons)
    }
    setNewName('')
  }

  const cambioNombre = (event) =>{
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={enviarNombre}>
        <div>
          name: <input value={newName} onChange={cambioNombre}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i)=>(
        <p key={i}>{person.name}</p>
      ))}
    </div>
  )
}

root.render(
  <App/>
)

export default App