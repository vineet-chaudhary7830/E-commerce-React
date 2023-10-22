import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name' name="" id="" />
                <input type="email"  placeholder=' your Email' name="" id="" />
                <input type="password" placeholder='password' name="" id="" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already Have an Account? <span>Login Here</span> </p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, I agree to the terms and Use of Privacy Policy. </p>
            </div>
        </div>
    </div>
  )
}
