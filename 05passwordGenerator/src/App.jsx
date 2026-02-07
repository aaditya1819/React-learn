import { useState , useCallback,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="


    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }
  ,[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,30)
    window.navigator.clipboard.writeText(password)
    
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])    





  return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-md bg-gray-800 shadow-2xl rounded-2xl px-6 py-8 text-orange-500">
        
        <h1 className="text-3xl text-center text-white font-bold mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex shadow rounded-xl overflow-hidden mb-6 bg-gray-900">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-transparent text-green-400 font-mono text-lg"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 transition px-4 text-white font-semibold"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-5">
          <label className="flex justify-between text-white mb-2">
            <span>Password Length</span>
            <span className="text-orange-400 font-semibold">{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="w-full cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        {/* Checkboxes */}
        <div className="flex justify-between text-white text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            Include Symbols
          </label>
        </div>
      </div>
    </div>
</>

  )
}

export default App
