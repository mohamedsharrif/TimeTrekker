import React from 'react'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import { Outlet } from 'react-router-dom'

import Faqs from './components/pajes/faqs/Faqs'





const App = () => {
  return (
    <div className='pt-20 max-w-4xl mx-auto'>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
