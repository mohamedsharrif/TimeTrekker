import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const { registerUser} = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            id: Date.now(),
            name,
            email,
            password
        }
        registerUser(newUser)
        navigate('/Login')
    }

    return (
        <div className='mx-auto my-10 w-1/2 items-center justify-center'>
            <div className='flex font-bold text-2xl text-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>TimeTrekker</div>
            <div className='font-semibold my-4 text-center justify-center text-gray-700'>Register</div>
            <div className='border rounded py-3 my- gap-3 p-3 grid'>
                <form onSubmit={handleSubmit} className=''>
                    <h3 className='font-semibold text-gray-500 '>Name</h3>
                    <input onChange={(e) => setName(e.target.value)} type="name" name="Nmae" placeholder='Full Name' className='border focus:outline-none focus:border-sky-400 rounded-sm  w-full px-2 py-2  my-1 mb-3' />
                    <h3 className='font-semibold text-gray-500 '>EMAIL</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="Email" placeholder='example@mail.com' className='border focus:outline-none focus:border-sky-400 rounded-sm  w-full px-2 py-2  my-1 mb-3' />
                    <h3 className='font-semibold text-gray-500 '>PASSWORD</h3>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="Password" placeholder='' className='border focus:outline-none focus:border-sky-400 rounded-sm  w-full px-2 py-2  my-1 mb-3' />
                    <input type="submit" value={'Register'} className='focus:outline-none rounded-sm  mt-2 bg-sky-400 px-4 py-2 text-white font-bold w-full cursor-pointer' />
                </form>
            </div>
            <div className='text-center justify-center my-5'>
                <p className='font-bold text-gray-700 '>Already have an account?</p>
                <Link className='font-bold text-gray-700 hover:text-sky-500' to={'/Login'}>Login</Link>
            </div>
        </div>
    )
}

export default Register