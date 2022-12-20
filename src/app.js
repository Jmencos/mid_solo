
import React, { useState } from 'react'
import './style.css'
import LoginForm from './components/login'
import Register from "./components/register"

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className='app'>
      {
        currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm} /> : <Register  onFormSwitch={toggleForm}/>
      }
    </div>
  )
}

export default App