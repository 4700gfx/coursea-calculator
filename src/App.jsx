import { useState } from 'react'
import Buttons from './components/Buttons'

import './App.css'

function App() {
  const [input, setInput] = useState('Enter A Number') //

  const handleInput = (event) => {
    setInput(Number(event.target.value))
    console.log(input)
  }


  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold mb-5'>Simple Calculator App</h1>
      <h2 className='text-2xl'>Total:</h2>
      <span className='mb-4 text-7xl'>{input}</span>
      <input type='text' onChange={handleInput} className='number-input rounded-full px-10 py-1 bg-gray-400 my-5' placeholder={input}></input>
      <Buttons></Buttons>
      
    </div>
  )
}

export default App
