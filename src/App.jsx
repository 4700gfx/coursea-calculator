import { useState, useRef } from 'react'


import './App.css'

function App() {
  const [result, setResult] = useState(0); // this stores the result value
  const inputRef = useRef(null); // this gives us a way to reference the input element directly
  const resultRef = useRef(null); // you had this, keeping it in case you want to scroll/focus/highlight the result later

  const addition = () => {
    setResult((prev) => prev + Number(inputRef.current.value));
    inputRef.current.value = ''; // clear after use
  };

  const subtraction = () => {
    setResult((prev) => prev - Number(inputRef.current.value));
    inputRef.current.value = '';
  };

  const multiplication = () => {
    setResult((prev) => prev * Number(inputRef.current.value));
    inputRef.current.value = '';
  };

  const division = () => {
    setResult((prev) => prev / Number(inputRef.current.value));
    inputRef.current.value = '';
  };

  const resetInput = () => {
    inputRef.current.value = '';
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div className="p-5">
      <span className='mb-4 text-7xl block' ref={resultRef}>{result}</span>

      <input
        type='number'
        ref={inputRef}
        className='number-input rounded-full px-10 py-1 bg-gray-400 my-5'
        placeholder='Type a Number'
      />

      <div className='button-row mt-4'>
        <button onClick={addition} className='bg-blue-500 text-white p-4 me-4 rounded-3xl'>+</button>
        <button onClick={subtraction} className='bg-blue-500 text-white p-4 me-4 rounded-3xl'>-</button>
        <button onClick={multiplication} className='bg-blue-500 text-white p-4 me-4 rounded-3xl'>*</button>
        <button onClick={division} className='bg-blue-500 text-white p-4 me-4 rounded-3xl'>/</button>
        <button onClick={resetInput} className='bg-blue-500 text-white p-4 me-4 rounded-3xl'>Reset Input</button>
        <button onClick={resetResult} className='bg-blue-500 text-white p-4 me-4 rounded-3xl'>Reset Result</button>
      </div>
    </div>
  )
}

export default App
