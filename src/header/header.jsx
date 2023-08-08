import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='col-12 d-flex justify-content-center pt-3'>
        <div className='col-8 d-flex'>
            <div className='col-6 d-flex gap-5'>
                <div>
                <h3 className='title'>MedicalGenuin</h3>
                </div>
                <div className='d-flex col-8 justify-content-between'>
                <span className='navbar-text' role='button'>Home</span>
                <span className='navbar-text' role='button'>Product</span>
                <span className='navbar-text' role='button'>Pricing</span>
                <span className='navbar-text' role='button'>Contact</span>
                </div>
            </div>
            <div className='col-6 d-flex gap-4 justify-content-end'>
            <span className='navbar-text' role='button'>Login</span>
            <button className='d-flex gap-3 align-items-center px-3 btn-join'>
                <Link to='/Intro' className='link-text' style={{ textDecoration: 'none' }}>JOIN US</Link>
                 <BiRightArrowAlt />
            </button>

            </div>
        </div>
      
    </div>
  )
}
