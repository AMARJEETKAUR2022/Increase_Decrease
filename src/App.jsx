import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount((count) => count + 1)
  }

  const decreaseCount = () => {
    setCount((count) => count - 1)
  }
  const refreshCount = () => {
    setCount(0); // Reset count to 0
  };

  return (
    <>
        <button onClick={increaseCount}>Increase</button>
        <span> Count is {count} </span>
        <button onClick={decreaseCount}>Decrease</button>
        <br/>
        <button className="btn" onClick={refreshCount}>Refresh</button>
    </>
  )
}

export default App
