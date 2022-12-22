import React, { useState} from "react";

function Register({onFormSwitch}) {
  const [email,setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form className="register">
        <label htmlFor="name">Full Name </label>
        <input onChange={(e) => setName(e.target.value)} value={name} name="name" id="name" placeholder="Full name here" ></input>
        <br></br>
        <label htmlFor="email">Email </label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="email" placeholder="JohnDoe@email.com" type="email"></input>
        <br></br>
        <label htmlFor="password">Enter password </label>
        <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" placeholder="*****" id="password"></input>
        <button className="button">Sign up</button>
      </form>
      <br></br>
      <button className="link-btn" onClick={()=>onFormSwitch('login')}>Have an account? Click here </button>
    </div>
  )
}

export default Register