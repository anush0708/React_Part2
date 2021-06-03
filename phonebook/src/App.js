import './App.css';
import React, { useState } from 'react'
// import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [isFilter,setFilter]=useState(false)
  const ppl=
  [{ name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }]
  const [ persons, setPersons ] = useState(ppl) 
  const [name,setName]=useState('')
  const [filteredPersons,setFilteredPersons]=useState([])
  const searchName=(event)=>
    {
      setName(event.target.value)
      event.target.value.length>0?setFilter(true):setFilter(false)
      setFilteredPersons(persons.filter((person)=>person.name.includes(event.target.value)))
    }
     const search=(val)=>{
       let newArr=[...persons]
       newArr.push(val)
        setFilteredPersons(newArr.filter((person)=>person.name.includes(name)))
       }
    
  return (
    <div className="phonebook">
      <h2>Phonebook</h2>
      <h2>Filter function</h2>
     search Filter <input onChange={searchName}/>
      {/* <Filter persons={persons} setFilter={setFilter} setFilteredPersons={setFilteredPersons} /> */}
      <h3 >Add a new </h3>
      <PersonForm persons={persons} setPersons={setPersons} isFilter={isFilter} search={search} />
      <h3>Numbers</h3>
      <Persons persons={isFilter?filteredPersons : persons} />
    </div>
  )
}
export default App


