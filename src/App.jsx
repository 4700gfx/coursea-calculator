import { useState } from 'react'
import Buttons from './components/Buttons'

import './App.css'

function App() {
  const [value, setValue] = useState(0)


  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold mb-5'>Simple Calculator App</h1>
      <span className='mb-4'>Total:</span>
      <input type='text' className='rounded-full px-10 py-1 bg-gray-400 my-5' placeholder='Try A Number'></input>
      <Buttons></Buttons>
      
    </div>
  )
}

export default App
