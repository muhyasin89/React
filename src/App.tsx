import { useState } from 'react'

import './App.css'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <Accordion />
    </>
  )
}

export default App
