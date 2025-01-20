import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let [val, setVal] = useState(0) //if needed initialise or anything can be written here inside the brackets

  const addValue=()=>{
    if(val<20){
      console.log(val);
      val++;
      setVal(val);
    }
  }
  const decValue=()=>{
    if(val>0){
      console.log(val);
      setVal(val-1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2> Counter value: {val}</h2>
      <button onClick={addValue}> Add value </button>
      <br/>
      <button onClick={decValue}> Decrease value </button>
    </>
  )
}

export default App
