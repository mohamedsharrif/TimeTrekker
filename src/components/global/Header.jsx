import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='fixed top-0 left-0 right-0 bg-blue-100 bg-opacity-60 backdrop-blur-md shadow z-10'>
            <div className='max-w-4xl mx-auto flex justify-between items-center p-6'>
                <Link to='./home' className='text-2xl font-semibold flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                    TimeTrekker</Link>
                <ul className='flex space-x-8 text-gray-700'>
                    <Link to={'/contact'} className='hover:text-sky-500'>Contact</Link>
                    <Link to={'/tasks'} className='hover:text-sky-500'>Tasks</Link>
                    <Link to={'/faq'} className='hover:text-sky-500'>FAQ</Link>
                    {/* <Link to={'register'} className='hover:text-sky-500 '>Register</Link> */}
                    <div className='relative'>
                        <Link to='login' className='hover:text-sky-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg>

                        </Link>

                    </div>
                </ul>
                
            </div>
        </div>
    )
}

export default Header