import { useState } from 'react'

import './App.css'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import { Display } from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Display count={count}/>
      <Increment setCount={setCount} count={count}/>
      <Decrement setCount={setCount} count={count}/>
    </>
  )
}

export default App
