import React from 'react'
import { useState } from 'react';
import './Nav.css'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import ElectricCars from './Offcanvas/ElectricCars';
import Offcanvasbody from './Offcanvas/Offcanvasbody';
import Other from './Offcanvas/Other';

function NavigationBar() {
  const [show, setShow] = useState(false);


  const handleShow = () => {
    setShow(true);
    navbtn1.style.borderBottom = '2px solid #2a609d'
  }

  const openNav = () => {
    navbtn.style.borderBottom = '2px solid #2a609d'

    topnav.style.height = "100%";
    topnav.style.top = "60px";

  }
  const closeNav = () => {
    navbtn.style.borderBottom = 'none'
    topnav.style.height = "0";
    topnav.style.top = "-350px";
  }

  //radio
  const [car, setCar] = useState('Electric')

  const handleChange = (e) => {
    //console.log(e.target.value);
    const modelDiv = e.target.value
    setCar(modelDiv)
    console.log(car); 
   
    if (car==='Electric'){
      // button4.style.display='block'
      // button5.style.display='none'
    btn55.style.borderLeft ='2px solid  #2a609d'
    btn44.style.borderLeft =' none '
      
     }
    if(car==='Other Cars'){
    //     button5.style.display='block'
    //     button4.style.display='none'
      btn44.style.borderLeft ='2px solid  #2a609d'
      btn55.style.borderLeft =' none '
     }
  
  }
 
   



  return (
    <>
      <Navbar className="bg-body-tertiary justify-content-between " style={{ position: 'relative', zIndex: 5 }}>
        <Form inline>

          <Navbar.Brand href="#home" className="bg-body-tertiary m-0 p-3">
            <img
              src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg"
              width="100px"
              height="50px"
              className="bg-body-tertiary "
              alt=""
            />
          </Navbar.Brand>
        </Form>

        <Row className='d-flex justify-content-center align-items-center m-0 p-0 bg-body-tertiary' >
          <Col xs="auto" className='m-0 ourcars bg-body-tertiary btn-3' >
            <button className='btn3 rounded m-0  navbtn' variant="primary" onClick={openNav}  >
              <span id='navbtn' style={{ background: 'transparent', padding: '10px' }}> Our cars</span>
            </button>
          </Col>
          <Col xs="auto" className='m-0  btn-3 bg-transparent'>
            <button className='btn3 rounded m-0 navbtn' variant="primary" onClick={handleShow}>
              <span id='navbtn1' style={{ background: 'transparent', padding: '10px' }} >  Menu</span>
            </button>

            <Offcanvasbody setShow={setShow} show={show} />

          </Col>
        </Row>

      </Navbar>
      <div className='w-100 text-center p-1' style={{ backgroundColor: 'black' }}>
        <div className=" d-flex align-items-center  justify-content-center" style={{ backgroundColor: 'transparent' }}>
          <h6 className='mt-2 learn' style={{ backgroundColor: 'transparent', color: 'white', fontWeight: '500', fontSize: '1rem',cursor:"pointer" }}>LEARN MORE</h6>
          <KeyboardArrowRightIcon className='' fontSize='small' style={{ backgroundColor: 'transparent', fill: 'white' }} />
        </div>

      </div>


      <div id="topnav" class="sidenav w-100">
        <div className="row">
          <div className="col-md-2">
            
              <div>
                <div style={{position:"relative"}} className=' ms-3 me-5  d-flex w-75 pe-3 py-3 rounded  button4'>  
                <div  id='btn44' ></div>                
                  <input type="radio" id="electric" value={'Electric'} name="models" onChange={handleChange} checked={car === 'Electric'} />
                  <label  className='bg-transparent' htmlFor='electric' ><h4 style={{ backgroundColor: 'transparent',color:'#918f8f' }}>Electric</h4></label>
                </div>
                <div style={{position:"relative"}} className=' ms-3 me-5  w-75 pe-3 py-3  d-flex btn55 button4'>  
                <div  id='btn55' ></div>             
                  <input  type="radio" id="other" value={'Other Cars'} name="models" onChange={handleChange} checked={car === 'Other Cars'} />
                  <label className='bg-transparent' htmlFor="other"><h4 style={{ backgroundColor: 'transparent',color:'#918f8f' }}>Other Cars</h4></label>
                </div>


              </div>
           

          </div>
          <div className="col-md-1"></div>
          <div className="col-md-8">
            <div className='show'>

              <div aria-hidden={car !== "Electric" ? true : false}>
                <ElectricCars />
              </div>
              <div aria-hidden={car !== "Other Cars" ? true : false}>
                <Other/>

              </div>

            </div>

            <button onClick={closeNav} className='closebtn'><CloseIcon /></button>
          </div>

        </div>
      </div>
    </>
  )
}

export default NavigationBar