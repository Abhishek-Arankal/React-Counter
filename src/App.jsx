import React from 'react'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen bg-gray-800 text-white flex items-center justify-center">
  <div className="min-w-[320px] border rounded-lg flex items-center gap-6 px-10 py-10">
    <div className="w-24 h-24 border rounded-full flex items-center justify-center text-2xl font-bold">{count}</div>
    <div className="flex flex-col gap-3">
      <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition" onClick={() => setCount(count +1)}>Increment</button>
      <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"onClick={() => setCount(count -1)}>Decrement</button>
    </div>

  </div>
</div>

  )
}

export default App
