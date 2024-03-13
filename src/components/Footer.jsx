import React from 'react'
import './Footer.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Footer() {
  return (
    <>
    <div style={{marginTop:'100px'}} className=' d-flex justify-content-center align-items-center w-100 flex-column footer mb-5'>
      <h5 >Quick links</h5>

      <div className='row w-75 mt-3'>
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex justify-content-between align-items-center links p-2 me-3">
          <p className='mt-3  quickText'>Test Drive</p>
          <KeyboardArrowRightIcon fontSize='medium' />
        </div>
        <div className="col-md-5  d-flex justify-content-between  align-items-center links p-2">
          <p className='mt-3 quickText'>Buy Online</p>
          <KeyboardArrowRightIcon fontSize='medium' />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className='row w-75 '>
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex justify-content-between align-items-center links links2 p-2 me-3">
          <p className='mt-3 quickText'>Retailers</p>
          <KeyboardArrowRightIcon fontSize='medium' />
        </div>
        <div className="col-md-5  d-flex justify-content-between align-items-center links links2  p-2">
          <p className='mt-3 quickText'>Support</p>
          <KeyboardArrowRightIcon fontSize='medium' />
        </div>
        <div className="col-md-1"></div>
        <div className='row w-100 disclaimer'  style={{marginTop:'100px'}} >
          <p style={{color:'#918f8f'}}>*Above mentioned prices are Ex-Showroom Prices. Subject to change</p>
        </div>
      </div>

    </div>
    <div className='d-flex justify-content-center align-items-center pt-5 mb-3 w-100 flex-column'  style={{marginTop:'100px', backgroundColor: '#fafafa'}}>
      <div className='d-flex text-center'style={{fontSize:'0.75rem',backgroundColor: '#fafafa'}}>
        <p  className='pe-3 footerText bg-transparent'>Cookies</p>
        <p className='pe-3 footerText bg-transparent'>Legal</p>
       <p  className='pe-3 footerText bg-transparent'> Privacy</p>
      </div>
      <p className='copy' style={{ backgroundColor: '#fafafa' }}>Copyright © 2024 Volvo Car Corporation (or its affiliates or licensors).</p>

    </div>
    </>
  )
}

export default Footer