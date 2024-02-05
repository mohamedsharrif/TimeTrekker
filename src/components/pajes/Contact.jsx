import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [data, setData] = useState({ name1: '', name2: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false)
    const notify =() => toast('Form submitted successfully')
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    }
    console.log(data);
    const hundleSubmit = (e) => {
      e.preventDefault()
      setSubmitted(true)
      setData({ name1: '',name2: '', email: '', phone: '', message: '' });
      
    }
    return (
    
      <form method='post' onSubmit={hundleSubmit} className='container mx-auto my-10 w-1/2 border rounded '>
        <h1 className='text-center text-3xl my-2'>Contact <span className='text-sky-400'>Us</span></h1>
        <div className='grid grid-cols-2 gap-3 p-3'>
        <input type="text" className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white ' name="name1" id="" onChange={handleChange} value={data.name1} placeholder='Firs name' />
        <input type="text" className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white ' name="name2" id="" onChange={handleChange} value={data.name2} placeholder='Last name' />
        <input type="email" className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white col-span-2 ' name="email" id="email" onChange={handleChange} value={data.email} placeholder='example@gmail.com' />
        <input type="tel" className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white col-span-2 ' name="phone" id="phone" onChange={handleChange} value={data.phone} placeholder='+358.....' />
        <textarea name="message" id="" cols="10" rows='5' className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white col-span-2' onChange={handleChange} value={data.message} placeholder='Write your message....' />
        <button className='focus:outline-none mt-2 bg-sky-400 px-4 py-2 text-white font-bold w-full col-span-2' type='Submit' onClick={notify}>Send</button>
        <ToastContainer />
        
        </div>
        
        
  
        {submitted && <p className='text-green-500' >Thank you for your message!</p>}
      </form>
   
    )
}

export default Contact