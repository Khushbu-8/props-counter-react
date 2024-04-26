import { useState } from 'react'
import './App.css'
import Count from './Count'

function App() {
  const [cnt, setCount] = useState(0)

  const Increment = () => {
    setCount(cnt+1)
  }
  const Decrement = () => {
    setCount(cnt-1)
  }
  const Reset = () => {
    setCount(0)
  }

  return (
     
    <Count
     no = {cnt} 
     plus={Increment}
     minus = {Decrement}
     reset ={Reset} 
     />
  )
}

export default App
