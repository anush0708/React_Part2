import './App.css';
import React, { useState,useEffect} from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import phoneService from './services/log'

const App = () => {
  const [isFilter,setFilter]=useState(false)
  const [ persons, setPersons ] = useState([]) 
  const [name,setName]=useState('')
  const [filteredPersons,setFilteredPersons]=useState([])
  useEffect(() => {
    phoneService.getAll().then(txt=>setPersons(txt))
  }, [])
 
  const search=(val)=>
    {
      let newArr=[...persons]
      newArr.push(val)
      setFilteredPersons(newArr.filter((person)=>person.name.includes(name)))
    }

  const  deleteContact=(event)=>
  {
    const deletePerson=persons.find(person=>person.name===event.target.value)
     const decision =window.confirm(`do you want to delete ${deletePerson.name}`)
     decision?phoneService.deleteContact(deletePerson.id).then(txt=>console.log(txt,"deleted")):<p></p>
     decision?setPersons(persons.filter(person=>person.id!==deletePerson.id)):<p></p>
     
  }
  const updateContact=(obj)=>
  {
    const temp=persons.find(person=>person.name===obj.name)
    const decision =window.confirm(` ${obj.name} already exists in your phonebook.Do you want to replace old number with new number?`)
    // console.log(temp,"updateing")
    // console.log(persons.map(person=>person.id===temp.id?obj:person))
    decision?phoneService.update(temp.id,obj).then(txt=>setPersons(persons.map(person=>person.id===temp.id?txt:person))):<p>
    </p>
  }
  
  return (
    <div className="phonebook">
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilter={setFilter} setFilteredPersons={setFilteredPersons} setName={setName} />
      <h3 >Add a new </h3>
      <PersonForm persons={persons} setPersons={setPersons} isFilter={isFilter} search={search} updateContact={updateContact} />
      <h3>Numbers</h3>
      <Persons persons={isFilter?filteredPersons : persons } deleteContact={deleteContact} />
    </div>
  )
}
export default App


