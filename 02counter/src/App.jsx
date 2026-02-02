import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count , setCount] = useState(5)
  

  const  addValue =()=>{
    console.log("value added",Math.random());
    setCount(count+1)
    
    
  }
  const decreseValu = ()=>{
    setCount(count-1)
    if (count === 0) {
      alert("value is 0")
      return
      
    }
  }
 
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {count}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button onClick={decreseValu}>Decrease Value</button>
      <p>footer {count}</p>
    </>
  )
}

export default App
