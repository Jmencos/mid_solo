
import React, { useState } from 'react'
import './style.css'
import LoginForm from './components/login'
import Register from "./components/register"
import Main from './components/main'
import Display from './components/display'

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    <div className='app'>
      <Main />
      {/* <Display /> */}
      
    </div>
  )
}

export default App