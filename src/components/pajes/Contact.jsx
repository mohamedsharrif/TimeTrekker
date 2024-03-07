import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
 
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name1':
                setName1(value);
                break;
            case 'name2':
                setName2(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name1.trim() === '' || name2.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
            toast.error('Please fill in all fields.');
            return;
        }
        
        setSubmitted(true);
        setName1('');
        setName2('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
        toast('Form submitted successfully');
     
    };
    
    return (
        <form method='post' onSubmit={handleSubmit} className='container mx-auto my-10 w-1/2 border rounded'>
            <h1 className='text-center text-3xl my-2'>Contact <span className='text-sky-400'>Us</span></h1>
            <div className='grid grid-cols-2 gap-3 p-3'>
                <input type="text" className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white' name="name1" id="" onChange={handleChange} value={name1} placeholder='First name' />
                <input type="text" className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white' name="name2" id="" onChange={handleChange} value={name2} placeholder='Last name' />
                <input type="email" className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white col-span-2' name="email" id="email" onChange={handleChange} value={email} placeholder='example@gmail.com' />
                <input type="tel" className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white col-span-2' name="phone" id="phone" onChange={handleChange} value={phone} placeholder='+358.....' />
                <textarea name="message" id="" cols="10" rows='5' className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-sky-400 bg-white col-span-2' onChange={handleChange} value={message} placeholder='Write your message....' />
                <button className='focus:outline-none mt-2 bg-sky-400 px-4 py-2 text-white font-bold w-full col-span-2' type='Submit' >Send</button>
                <ToastContainer />
            </div>
            {submitted && (
                <p className='text-green-500'>Thank you for your message!</p>
            )}
        </form>
    );
};

export default Contact;
