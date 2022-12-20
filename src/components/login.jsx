import React from "react";
import { useState } from "react"

function LoginForm({onFormSwitch}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }


  return (
    <div className ="auth-form">
      <h2> Login</h2>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email"></input>
        <br></br>
        <label htmlFor="password">Enter password </label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="******" id="passsword" name="password"></input>
        <br></br>
        <button type="submit">Log in</button>
      </form>
      <br></br>
      <button className="link-btn" onClick={()=> onFormSwitch('register')}>Need an account? Register here</button>
    </div>
  )
}

export default LoginForm

