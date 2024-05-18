import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from '../LoginValidation'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../components/login.css'

export const validation = (a) => {
    if(a === 'Success') {
      return true
    }
    return false
} 

const Login = () => {
  const [values, setValues] = useState({
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
        if(errors.email === "" && errors.password === "") {
          axios.post('http://localhost:8081/login', values)
          .then(res => {
            if(res.data === "Success") {
              navigate('/');
              validation(res.data)
            } else {
              alert("No record existed");
            }
          })
          .catch(err => console.log(err));
        }
    }
    
  return (
    <div className='color-change-4x absolute w-full h-full'>
      <div className='flex justify-center items-center h-full'>
          <section id='section'>
           <form onSubmit={handleSubmit} id='form'>
              <h1 id='h1'>Login</h1>
              <div class="inputbox">
              <input id='input' type="email" required onChange={handleInput} name='email'/>
                <label id='label' for="">Email</label>
              </div>
              <div class="inputbox">
                  <input id='input' type="password" required name='password' onChange={handleInput} />
                  <label id='label' for="">Password</label>
              </div>
              <button id='button' type='submit'>Log in</button>
              <div class="register">
                  <p id='p'>Don't have a account <Link to="/signup">Register</Link></p>
                </div>
            </form>
          </section>
      </div>
    </div>
  )
}

export default Login
