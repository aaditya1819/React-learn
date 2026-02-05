import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-white p-4 rounded-3xl'>tailwind test</h1>
      <Card brand="Toyota" model="Corolla" year={2022} fuel="Petrol" transmission="Automatic" price="1500000"/>
      <Card/>

    </>
  )
}

export default App
