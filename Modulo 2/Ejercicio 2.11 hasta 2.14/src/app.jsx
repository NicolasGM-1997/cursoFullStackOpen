import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import Filter from '/src/filter.jsx'
import Person from '/src/person.jsx'
import {ListPerson, ListPaises} from '/src/list.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
  const [ paises, setPaises] = useState([])
  const [ newFilter, setNewFilter] = useState('')

  const hook = () => {
  axios.get('https:\/\/restcountries.com\/v3.1\/all')
    .then(response => {
      setPaises(response.data)
    })
  }

  useEffect(hook, []) 

  const cambioFiltro = (event) => {
    setNewFilter(event.target.value);
  }

  const paisesFiltrados = paises.filter((paises) =>
    paises.name.common.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Filters</h2>
      <form>
        <Filter text="Filter Countries" valor={newFilter} evento={cambioFiltro}/>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Countries</h2>
      {paisesFiltrados.length===1?(
        <div>
          <p>{paisesFiltrados[0].name.common}</p>
          <p>Capital: {paisesFiltrados[0].capital}</p>
          <p>Poblacion: {paisesFiltrados[0].population}</p>
          <img src={paisesFiltrados[0].flags.png}/>
        </div>
      ): paisesFiltrados.length<10?(
        <ListPaises paises={paisesFiltrados} setNewFilter={setNewFilter}/>
      ):(
        <p>Too many matches, specify another filter</p>
      )}  
    </div>
  )
}

root.render(
  <App/>
)

export default App