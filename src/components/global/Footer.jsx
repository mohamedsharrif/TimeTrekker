import React from 'react'
const currentYear = new Date().getFullYear()
const Footer = () => {
    return (
        <div className='py-8 mt-20 border-gray-200  border-t-2'>
            <div className='text-center ' >
                <p className='text-gray-600 font-light mb-2'>Thanks for visiting this website</p>
                <p className='text-gray-800 font-semibold '>TimeTrekker &copy; {currentYear}</p>
            </div>
        </div>
    )
}

export default Footer