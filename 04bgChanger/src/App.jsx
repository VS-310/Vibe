import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='h-screen duration-200' style={{backgroundColor: color}}>
      <h1 className='text-white'>{color}</h1>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
                <button onClick={() => setColor("purple")} className='outline-none rounded-xl px-4 text-white' style={{background: "purple"}}>Violet</button>
                <button onClick={() => setColor("indigo")} className='outline-none rounded-xl px-4 text-white' style={{background: "indigo"}}>Indigo</button>
                <button onClick={() => setColor("blue")} className='outline-none rounded-xl px-4 text-white' style={{background: "blue"}}>Blue</button>
                <button onClick={() => setColor("green")} className='outline-none rounded-xl px-4 text-white' style={{background: "green"}}>Green</button>
                <button onClick={() => setColor("yellow")} className='outline-none rounded-xl px-4 text-white' style={{background: "yellow"}}>Yellow</button>
                <button onClick={() => setColor("orange")} className='outline-none rounded-xl px-4 text-white' style={{background: "orange"}}>Orange</button>
                <button onClick={() => setColor("red")} className='outline-none rounded-xl px-4 text-white' style={{background: "red"}}>Red</button>
            </div>
        </div>
    </div>
  )
}

export default App
