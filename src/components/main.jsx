import React, {useState} from "react";
import LoginForm from "./login";
import video from '../assets/fire.mp4'
import Register from "./register";

const Main = () => {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="main">
      <video src={video} autoPlay loop muted></video>
      <article className="content">
      {
      currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm} /> : <Register  onFormSwitch={toggleForm}/>
      }
      </article>
    </div>
  )
}





export default Main