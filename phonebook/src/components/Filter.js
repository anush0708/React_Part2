import React  from 'react'
const Filter=({persons,setFilter,setFilteredPersons,setName})=>{
  
    const searchName=(event)=>
    {
        setName(event.target.value)
        event.target.value.length>0?setFilter(true):setFilter(false)
        setFilteredPersons(persons.filter((person)=>person.name.includes(event.target.value)))
    }
    return <div>
      <h2>Filter function</h2>
      search Filter <input onChange={searchName}/>
    </div>
  }
  export default Filter