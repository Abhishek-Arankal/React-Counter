import React from 'react'
import { useState } from 'react'


function App() {
  const [counters, setCounters] = useState([
    {id:1, value:0},
    {id:2, value:0},
    {id:3, value:0}
  ])
console.log("Counter", counters)

  const handleIncrement = (id) => {
    console.log("clicked")
    setCounters((prevCounters) => {
      console.log(prevCounters)
       return prevCounters.map((counter) => counter.id === id ? {...counter, value: counter.value < 10 ? counter.value + 1 : counter.value} : counter)
    })
  }

  const handleDecrement = (id) => {
    console.log("clicked")
    setCounters((prevCounters) => {
      return prevCounters.map((counter) => counter.id === id ? {...counter, value: counter.value > 0 ? counter.value -1 : counter.value} : counter)
    })
  }

  const handleReset = (id) => {
    setCounters((prevCounter) => {
      return prevCounter.map((counter) => counter.id === id ? {...counter, value: 0} : counter)
    })
  }

  return (
    <div className="w-full h-screen bg-gray-800 text-white flex items-center justify-center">
  {counters.map((counter) => (
    <div className="min-w-[320px] border rounded-lg flex items-center gap-6 px-10 py-10 m-2" key={counter.id}>
    <div className="w-24 h-24 border rounded-full flex items-center justify-center text-2xl font-bold">{counter.value}</div>
    <div className="flex flex-col gap-3">
      <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition" onClick={() => handleIncrement(counter.id)} disabled={counter.value === 10}>Increment</button>
      <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"onClick={() => handleDecrement(counter.id)} disabled={counter.value === 0}>Decrement</button>
      <button className='px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700 transition'onClick={() => handleReset(counter.id)}>Reset</button>
    </div>

  </div>
  ))}
</div>

  )
}

export default App
