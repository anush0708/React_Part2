import React, { useState } from 'react'
import phoneService from "../services/log"
const PersonForm=({persons ,setPersons,isFilter,search,updateContact})=>{
  
    const [details,setDetails]=useState({name:null,number:0})
    
    const newName=(event)=>setDetails({...details,name:event.target.value})
   
    const newNumber=(event)=>setDetails({...details,number:event.target.value})
    const checkPerson=(event)=>{
      event.preventDefault()
      details.name&&details.number
      ?
      persons.filter((person)=>person.name===details.name).length!==0
        ?
        updateContact(details)
        :
        phoneService.create(details)
        .then(obj=>setPersons(persons.concat(obj)))
      :
      alert("one of the field is empty please re-enter")
      isFilter?search(details):<></>
    }
  return <>
  <form onSubmit={checkPerson}>
     <label>Name</label> <br></br> <input onChange={newName}/><br></br>
      <label>number</label><br></br> <input onChange={newNumber}/><br></br>
      <button type="submit" >ADD</button>
  </form>
  </>
  }
  export default PersonForm