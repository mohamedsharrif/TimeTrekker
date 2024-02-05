import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const Login = () => {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const { auth, loginUser } = useContext(AppContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      loginEmail,
      loginPassword
    }

    loginUser(user)

    if(auth.authError){
      alert('email or password are invalid')
    }else{
      navigate('/home')
    }

  }

  const handleChange = (e) => {
    e.preventDefault()
    navigate('/Rgester')
  }

  return (
    <div className='mx-auto my-10 w-1/2 items-center justify-center '>
      <div>
        <div className='flex font-bold text-2xl text-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
          TimeTrekker</div>
        <div className='font-semibold my-4 text-center justify-center text-gray-700'>Login</div>
      </div>
      <div className='border rounded py-3 my- gap-3 p-3 grid '>
        <form onSubmit={handleSubmit} grid grid-cols-2 gap-3 p-3>
          <h3 className='font-semibold text-gray-500 '>EMAIL</h3>
          <input className='border focus:outline-none focus:border-sky-400 rounded-sm  w-full px-2 py-2  my-1 mb-3' type="text" name="Email" placeholder='example@mail.com' />
          <h3 className='font-semibold text-gray-500 '>PASSWORD</h3>
          <input className='border focus:outline-none focus:border-sky-400 rounded-sm  w-full px-2 py-2  my-1' type="password" name="Password" placeholder='' />
          <button className='focus:outline-none rounded-sm  mt-2 bg-sky-400 px-4 py-2 text-white font-bold w-full' type='submit'>Log in with Email</button>

        </form>
        <div className='text-center justify-center font-semibold text-gray-500 hover:text-sky-500 cursor-pointer'>Forgot Password</div>
      </div>
      <div className='text-center justify-center my-5'>
        <p className='font-semibold text-gray-500'>Do not have an account?</p>
        <Link onChange={handleChange} to={'/Register'} className='font-bold text-gray-700 hover:text-sky-500'>Create account</Link>
      </div>
    </div>
  )
}

export default Login