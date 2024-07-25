import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContainer from './containers/UserContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>User (Container / Presentation Pattern)</h2>
      <UserContainer />
    </>
  )
}

export default App
