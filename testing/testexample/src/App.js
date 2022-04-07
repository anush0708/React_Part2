import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor,setButtonColor]=useState('red')
  const [status,setStatus]=useState(false)
  const newbtncolor=btnColor==='red'?"blue":"red"
  return (
    <div className="App">
      <button 
        style={{backgroundColor:status?'grey':btnColor}} 
        onClick={()=>setButtonColor(newbtncolor)}
        disabled={status}
        >
          Change to {newbtncolor}
          </button>
        <input type='checkbox' onClick={()=>setStatus(!status)}/>
    </div>
  );
}

export default App;
