import React from 'react'
import './Offcanvasbody.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Accordion from 'react-bootstrap/Accordion';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SmallscreenE from './SmallscreenE';
import SmallscreenOther from './SmallscreenOther';


function Offcanvasbody( {setShow,show}) {
    const handleClose = () =>{
        setShow(false);
        navbtn1.style.borderBottom = 'none'   
       }
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: '400px' }}>
    <Offcanvas.Header className='border border-end' closeButton>
      <Offcanvas.Title >
        <img
          src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg"
          width="100px"
          height="50px"
          className="bg-body-transparent "
          alt="" />
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className='p-0 w-100' >
      <div className='accordion'>
      <Accordion >
      <Accordion.Item eventKey="0"  style={{borderTop:"none"}}>
        <Accordion.Header>
        <div className=' bg-transparent' style={{width:'100%',height:'100%'}}>
            <h5 style={{fontSize:'1.25rem',fontWeight:'500'}} className=' bg-transparent '>Electric</h5>
          <p className=' bg-transparent'>Pure electric</p>
        </div>
        </Accordion.Header>
        <Accordion.Body>
          <SmallscreenE/>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{borderTop:"none"}}>
        <Accordion.Header ><h5 style={{fontSize:'1.25rem',fontWeight:'500'}} className=' bg-transparent'>Other Cars</h5></Accordion.Header>
        <Accordion.Body>
          <SmallscreenOther/>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
      <h5 className='p-3 w-100 lists'>Sign in with Volvo ID</h5>
      <h5 className='p-3 w-100 lists'>Car Configurator</h5>
      <div className=" d-flex justify-content-between align-items-center lists w-100 p-3">
        <h5 className='lists2'>Own</h5>
        <KeyboardArrowRightIcon className='lists2' fontSize='large' />
      </div>
      <div className=" d-flex justify-content-between align-items-center lists w-100 p-3">
        <h5 className='lists2'>Why Volvo</h5>
        <KeyboardArrowRightIcon className='lists2' fontSize='large' />
      </div>
      <div className=" d-flex justify-content-between align-items-center w-100 lists p-3">
        <h5 className='lists2'>More</h5>
        <KeyboardArrowRightIcon className='lists2' fontSize='large' />
      </div>
      <h5 className='p-3 w-100 lists'>Find A Dealer</h5>
      <h5 className='p-3 w-100 lists'>Reviews</h5>
      <h5 className='p-3 w-100 lists'>Selekt Used Cars</h5>
      <h5 className='p-3 w-100 lists'>Offers</h5>
      <h5 className='p-3 w-100 lists'>Pricelist</h5>
      <h5 className='p-3 w-100 lists'>Tre Cronor Experience</h5>
      <div className=" d-flex justify-content-between align-items-center link p-2 m-4 lists1">
        <p className='d-flex align-items-center mt-3 '>India</p>
        <KeyboardArrowRightIcon fontSize='large' />
      </div>

      <div className='d-flex just 0 p-3 '>
        <FacebookIcon className='me-5' style={{cursor:'pointer'}} fontSize='medium' />
        <YouTubeIcon className='me-5 lists1' fontSize='medium' style={{cursor:'pointer'}} />
        <XIcon className='me-5 lists1' fontSize='medium' style={{cursor:'pointer'}} />
        <InstagramIcon className='me-5 lists1' fontSize='medium' style={{cursor:'pointer'}} />
      </div>


    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default Offcanvasbody