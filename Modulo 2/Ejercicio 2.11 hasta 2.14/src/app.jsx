import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import Filter from '/src/filter.jsx'
import Person from '/src/person.jsx'
import ListPerson from '/src/list.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  const hook = () => {
  axios.get('http:\/\/localhost:3001\/persons')
    .then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook, []) 

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
        <Filter text="Filter shown with" valor={newFilter} evento={cambioFiltro}/>
        <Person valorName={newName} valorNumber={newNumber} eventoName={cambioNombre} eventoNumber={cambioNumero}/>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ListPerson persons={personasFiltradas} />
    </div>
  )
}

root.render(
  <App/>
)

export default App