import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  return (
    <div className='SignUpPage'>
        <h3>Sign In</h3>
        <form className='form-screen'>
          <div className='inputGroup'>
            <label htmlFor='email'>Email:</label>
              <input
                type='email'
                placeholder='Enter your email'
                autoComplete='off'
                id='email'
              />
            <label htmlFor='password'>Password:</label>
              <input
                type='password'
                placeholder='Enter Password'
                autoComplete='off'
                id='password'
              />
              <button type='submit' class="btn btn-primary">
                Login
              </button>
          </div>
        </form>
        <div className='login'>
          <p>Don't have an Account ?</p>
          <Link to='/' type='submit' class="btn btn-success">
            Sign Up
          </Link>
        </div>
    </div>
  )
}



export default Login