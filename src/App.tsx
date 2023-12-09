import { useState } from 'react'

import './App.css'
import Accordion from './components/Accordion'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <Accordion />
    </>
  )
}

export default App
