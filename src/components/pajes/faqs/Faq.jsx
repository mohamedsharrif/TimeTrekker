import React, { useState } from 'react'
import {AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'


const Faq = ({question, answer }) => {
  const [show, setShow] = useState(false)
  return (
    <div className='mx-auto flex-col py-[2px] px-2 sm:max-w-screen-md'>
      <div className='my-2 flex justify-between bg-blue-100 py-4 px-2 sm:py-5'>
        <h1 className='text-xl'>{question}</h1>
        { show ? <AiOutlineClose onClick={()=> setShow(!show)} className='h-8 w-8 cursor-pointer'/> : 
        
        <AiOutlinePlus onClick={()=> setShow(!show)} className='h-8 w-8 cursor-pointer' />}
      </div>
      {show && <div className='bg-blue-100 '>
        <p className='px-2 py-4 '>{answer}</p>
      </div>}
    </div>
  )
}

export default Faq