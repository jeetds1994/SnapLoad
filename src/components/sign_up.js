import React from 'react'
import LoginForm from './login_form'
import Webcam from 'react-webcam'

const submitButtonClick = (event) => {
  debugger
}
const setRef = (webcam) => {
   this.webcam = webcam;
 }

const capture = () => {
   const imageSrc = this.webcam.getScreenshot();
   debugger
 };


const SignUp = () => {
  return(
    <div>
      <Webcam audio={false}
      audio={false}
      // height={350}
      ref={setRef}
      screenshotFormat="image/jpeg"
      // width={350}
      />

      <input id="username" placeholder="username" type="text"/>
      <button onClick={capture}>Submit</button>
    </div>
  )
}

export default SignUp
