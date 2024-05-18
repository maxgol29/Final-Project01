import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../LoginValidation'
import { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import '../components/login.css'

const Signup = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

    const  handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === "") {
          axios.post('http://localhost:8081/signup', values)
          .then(res => {
            navigate('/login');
          })
          .catch(err => console.log(err));
        }
    }

  return (
    <div className='color-change-4x absolute w-full h-full'>
      <div className='flex justify-center items-center h-full'>
          <section className='w-[600px]' id='section'>
           <form onSubmit={handleSubmit} id='form'>
              <h1 id='h1'>Register</h1>
              <div class="inputbox">
              <input id='input' type="text" required onChange={handleInput} name='name'/>
                <label id='label' for="">Name</label>
              </div>
              <div class="inputbox">
              <input id='input' type="email" required onChange={handleInput} name='email'/>
                <label id='label' for="">Email</label>
              </div>
              <div class="inputbox">
                  <input id='input' type="password" required name='password' onChange={handleInput} />
                  <label id='label' for="">Password</label>
              </div>
              <button id='button' type='submit'>Sign Up</button>
              <div class="register">
                  <p>Have you signed up? <Link to="/login" className=''>Login</Link></p>
                </div>
            </form>
          </section>
      </div>
    </div>
  )
}

export default Signup