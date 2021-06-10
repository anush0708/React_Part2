import axios from 'axios'
import './App.css';
import {useState ,useEffect} from 'react'

const Countries=({data})=>{
  return  <>{data.length===1?data.map(data=><Country key={data.name} data={data}/>):(data.length<11?data.map(data=><Country key={data.name} data={data}/>):<p>Too Many Matches,Speacify another filter</p>)}</>
}

const Country=({data})=>{
  const [btn,setBtn]=useState(0)
  const details=()=>{
    setBtn(10)
  }
  return <div>
  {data.name}<button onClick={details}>details</button>
  {btn===10? <CountryData data={data}/>:<p></p>}
  {/* <p>Capital : {data.capital}<br></br> Population : {data.population} </p>
  <h3>Languages </h3>
  {data.languages.map(element=><li key={element.name}>{element.name}</li>)}
  <img src={data.flag} width="20%" height="20%" ></img> */}
  </div>
}
const CountryData=({data})=>{
  return <div>
  <h2>{data.name}</h2>
  <p>Capital : {data.capital}<br></br> Population : {data.population} </p>
  <h3>Languages </h3>
  {data.languages.map(element=><li key={element.name}>{element.name}</li>)}
  <img src={data.flag} width="20%" height="20%" alt=" Country Flag" ></img>
  </div>

}

function App() {

 const [val,setVal]=useState('')
 const [data,setData]=useState([])
 useEffect(() => {
  axios.get("https://restcountries.eu/rest/v2/all").then((Response)=>{const name=Response.data.filter(obj=>obj.name.toUpperCase().startsWith(val.toUpperCase()))
  setData(name)
})

 }, [val])

  const searchVal=(event)=>{
    setVal(event.target.value)
    console.log(val)
  }

  return <div>
    Search <input onChange={searchVal}></input>
    <Countries data={data}/>
    </div>
}

export default App;
