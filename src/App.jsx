import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VortexDemoSecond } from './components/VortexDemoSecond'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<VortexDemoSecond/>
    </>
  )
}

export default App
