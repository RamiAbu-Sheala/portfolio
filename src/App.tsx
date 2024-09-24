import { useState } from 'react'
import './App.css'
import {Button} from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <p>{count}</p>
          <Button onClick={() => {setCount(count + 1)}}>Click me!</Button>
      </>
  )
}

export default App
