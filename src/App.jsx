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

  return (
    <>
        <button onClick={increaseCount}>Increase</button>
        <span> Count is {count} </span>
        <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App
