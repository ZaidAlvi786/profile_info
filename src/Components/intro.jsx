import React from 'react'
import {BiChevronRight} from 'react-icons/bi'
import telescope from '../assets/images/telescope_icon.png'
export default function Intro() {
  return (
    <div className='intro_div col-12 py-5 d-flex justify-content-center'>
        <div className=' d-flex col col-9  align-items-center'>
            <div className='d-flex flex-column  col-6'>
                <div className='line mb-4'></div>
                <div className='col-8 mb-4'><h2 className='intro_heading'>Our Doctors Specialize in you</h2></div>
                <div className='col-7 intro_text mb-4'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</div>
                <div className='col-7 gap-3' style={{color:' #96BB7C'}}><span className='link_text2'>Learn More</span>< BiChevronRight /></div>
            </div>
            <div className='col-3 gap-3 p-3 d-flex flex-column'>
                <div className='card-1 col-12 d-flex justify-content-center'>
                    <div className='col-6 d-flex flex-column'>
                        <div className='mt-4'><img src={telescope} alt=''/></div>
                        <h5 className='crad_heading mt-4'>Quick examination</h5>
                        <div className='card_line mt-4'></div>
                        <div className='card_text mt-4'>The gradual accumulation of information about </div>
                    </div>
                </div>
                <div className='card-1 p-3 col-12 d-flex justify-content-center'>
                    <div className='col-6 d-flex flex-column'>
                        <div className='mt-4'><img src={telescope} alt=''/></div>
                        <h5 className='crad_heading mt-4'>Quick examination</h5>
                        <div className='card_line mt-4'></div>
                        <div className='card_text mt-4'>The gradual accumulation of information about </div>
                    </div>
                </div>
            </div>
            <div className='col-3 p-3'>
            <div className='card-1 col-12 d-flex justify-content-center'>
                    <div className='col-6 d-flex flex-column'>
                        <div className='mt-4'><img src={telescope} alt=''/></div>
                        <h5 className='crad_heading mt-4'>Quick examination</h5>
                        <div className='card_line mt-4'></div>
                        <div className='card_text mt-4 mb-4'>The gradual accumulation of information about </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}
