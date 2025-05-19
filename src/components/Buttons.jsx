import React from 'react'

const Buttons = (props) => {

  const handleAddition = () =>{
    console.log(props.total)
  }

    
  return (
      <div className='button-row'>
        <button id='operation-add' onClick={handleAddition} className='bg-blue-500 text-white p-4 me-4 rounded-3xl'>+</button>
        <button id='operation-subtract' className='bg-blue-500 text-white p-4 me-4 rounded-3xl'> - </button>
        <button id='operation-multiply' className='bg-blue-500 text-white p-4 me-4 rounded-3xl'> * </button>
        <button id='operation-divide' className='bg-blue-500 text-white p-4 me-4 rounded-3xl'> / </button>
        <button id='operation-input' className='bg-blue-500 text-white p-4 me-4 rounded-3xl'>Reset Input</button>       
        <button id='operation-result' className='bg-blue-500 text-white p-4 me-4 rounded-3xl'>Reset Result</button>
      </div>
  )
}

export default Buttons