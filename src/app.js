
import React, { useState } from 'react'
import './style.css'
import LoginForm from './components/login'
import Register from "./components/register"
import Main from './components/main'

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className='app'>
      <Main />
    </div>
  )
}

export default App