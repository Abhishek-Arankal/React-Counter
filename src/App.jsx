import React from 'react'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    console.log("clicked")
    if(count < 10){
      setCount(count + 1)
    }
  }

  const handleDecrement = () => {
    console.log("clicked")
    if(count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="w-full h-screen bg-gray-800 text-white flex items-center justify-center">
  <div className="min-w-[320px] border rounded-lg flex items-center gap-6 px-10 py-10">
    <div className="w-24 h-24 border rounded-full flex items-center justify-center text-2xl font-bold">{count}</div>
    <div className="flex flex-col gap-3">
      <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition" onClick={() => handleIncrement()} disabled={count === 10}>Increment</button>
      <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"onClick={() => handleDecrement()} disabled={count === 0}>Decrement</button>
      <button className='px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700 transition' onClick={() => setCount(0)}>Reset</button>
    </div>

  </div>
</div>

  )
}

export default App
