import { useState } from 'react'
import './App.css'
import LanguageTranslator from './components/LanguageTranslator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LanguageTranslator/>
    </>
  )
}

export default App
