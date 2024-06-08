import React from 'react'
import "./Signup.scss"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
        <div className="signup">
            <div className="signup__child">
                <Link to={'/'}>
                    <img src="./logo-razer.svg" alt="logo" />
                    <h1>Razer</h1>
                </Link>
                <form className='signup__form'>
                    <input className='signup__inp' required type="email" placeholder='Email' />
                    <input className='signup__inp' required type="name" placeholder='Username' />
                    <input className="signup__inp" required type="password" placeholder='Password' />
                    <button className="signup__btn" type='submit'>Submit</button>
                    <p className="login__text">Dont have an account? <a href="/signup">Sign up now</a></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup