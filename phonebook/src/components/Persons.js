import React  from 'react'
const Persons=({persons})=>{
    

    return <div className="details">
      {persons?persons.map((person)=><li key={person.name}>{person.name} : {person.number}</li>):<p>Nothing to show</p>}
      {/* {isFilter?search(searchVal):<></>} */}
    </div>
  }
  export default Persons