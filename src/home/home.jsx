import React from 'react'
import Header from '../header/header'

import '../App.css'
export default function Home() {
  return (
    <div className='home_bg'>
      <header>
        <Header />
      </header>
      <div className='d-flex align-items-center h-100 flex-column justify-content-center'>
      <div className='text-1 d-flex justify-content-center'>Join us</div>
      <div className='text-2 col-4 d-flex justify-content-center mt-4'>Meet the Best Hospital</div>
      <div className='text-3 col-3 d-flex justify-content-center mt-4'>We are always fully focused on helping 
your child and you </div>
       <button className='d-flex gap-3 py-2 mt-5 align-items-center px-3 btn-join'>
                Join us
            </button>
      </div>
      
    </div>
  )
}
