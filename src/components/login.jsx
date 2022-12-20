import React from "react";
import { useState } from "react"

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }


  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email"></input>
        <br></br>
        <label htmlFor="password">Enter your password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="******" id="passsword" name="password"></input>
        <br></br>
        <button type="submit">Log in</button>
      </form>
      <br></br>
      <button onClick={()=> this.props.onFormSwitch('register')}>Register here</button>
    </>
  )
}

export default LoginForm

