import React from 'react'

const Buttons = () => {
  const buttonChecker = () =>{
    const button = document.querySelector('.operation-button')
    console.log(button.textContent)
  }
  
  
  
  return (
      <div className='button-row'>
        <button onClick={buttonChecker} className='operation-button bg-blue-500 text-white p-4 me-4 rounded-3xl'>Add ➕</button>
        <button onClick={buttonChecker} className='operation-button bg-blue-500 text-white p-4 me-4 rounded-3xl'>Subtract ➖</button>
        <button onClick={buttonChecker} className='operation-button bg-blue-500 text-white p-4 me-4 rounded-3xl'>Multiply ✖</button>
        <button onClick={buttonChecker} className='operation-button bg-blue-500 text-white p-4 me-4 rounded-3xl'>Divide ➗</button>
        <button onClick={buttonChecker} className='operation-button bg-blue-500 text-white p-4 me-4 rounded-3xl'>Reset Input 🔢</button>       
        <button onClick={buttonChecker} className='operation-button bg-blue-500 text-white p-4 me-4 rounded-3xl'>Reset Result 🧮</button>
      </div>
  )
}

export default Buttons