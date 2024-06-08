import React from 'react'
import "./Login.scss"
import { Link } from 'react-scroll'

const Login = () => {
  return (
    <>
        <div className="login">
            <div className="login__child">
                <Link to={'/'}>
                    <img src="./logo-razer.svg" alt="logo" />
                    <h1>Razer</h1>
                </Link>
                <form className='login__form'>
                    <input className='login__inp' required type="email" placeholder='Email' />
                    <input className='login__inp' required type="password" placeholder='Password' />
                    <button type='submit' className="login__btn">Submit</button>
                    <p className="login__text">Dont have an account? <a href="/signup">Sign up now</a></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login