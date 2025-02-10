import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numallowed, setNumallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGen = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numallowed) str+="0123456789";
    if(charallowed) str+="!@#$%^&*()~=_><{}[]\|";

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length,numallowed,charallowed,setPassword]);

  useEffect(()=>{
    passwordGen();
  },[length,numallowed,charallowed,passwordGen]);

  const passwordRef = useRef(null);

  const handleCopy = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-8 my-8 bg-gray-900 text-gray-100">
      {/* Heading at the top */}
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-400">Random Password Generator</h2>

      {/* Password Output*/}
      <div className="mb-6 flex items-center">
        <input
          type="text"
          value={password}
          className="text-xl font-medium text-black bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-md shadow-lg flex-1"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={handleCopy}
          className="ml-4 py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
        > Copy </button>

      </div>
    
      {/* Include Numbers checkbox */}
      <div className="mb-4">
        <label className="text-lg">Include Numbers: </label>
        <input
          type="checkbox"
          checked={numallowed}
          onChange={() => setNumallowed((prev) => !prev)}
          className="ml-2"
        />
      </div>

      {/* Include Special Characters checkbox */}
      <div className="mb-4">
        <label className="text-lg">Include Special Characters: </label>
        <input
          type="checkbox"
          checked={charallowed}
          onChange={() => setCharallowed((prev) => !prev)}
          className="ml-2"
        />
      </div>

      {/* Generate Password Button */}
      <div className="mb-6">
        <button
          onClick={passwordGen}
          className="w-full py-2 bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 text-black font-semibold rounded-lg shadow-md transition duration-200"
        >
          Generate Password
        </button>
      </div>

      {/* Length input */}
      <div className="mb-4">
        <label className="text-lg">Length: {length}</label>
        <input
          type="range"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="4"
          max="20"
          className="mt-1 w-full p-2 rounded border-2 border-teal-400 bg-gray-800 text-white"
        />
      </div>
    </div>
  )
}

export default App
