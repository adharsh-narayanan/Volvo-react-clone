import React from 'react'
import './About.css'
import Button from '@mui/material/Button';

function About() {
  return (
    <div className='mb-5' style={{backgroundColor:'#fafafa'}}>
      <div className=' m-5 p-5 d-flex justify-content-center align-items-center flex-column' style={{backgroundColor:'#fafafa'}}>
        <h1 style={{backgroundColor:'#fafafa'}}>Why Volvo?</h1>
        <div className='mt-5  bg' >
          <img src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&h=1440&iar=0&w=2560" srcSet='https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=480&imdensity=1 480w,
            https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=720&imdensity=1 720w,
            https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1080&imdensity=1 1080w,
            https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1240&imdensity=1 1240w,
            https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1366&imdensity=1 1366w,
            https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1440&imdensity=1 1440w,
            https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1600&imdensity=1 1600w,
            https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1 1920w,' width={'100%'} height={'100%'} alt="" />

        </div>

        <div className='row mt-5'style={{backgroundColor:'#fafafa'}}>
          <div className="col-md-4 col-xl-4 col-sm-12" style={{backgroundColor:'#fafafa'}}>
            <h5 style={{ fontSize: "font-size: 1.25rem",backgroundColor:'#fafafa' }}>Making your life easier </h5>
            <p style={{backgroundColor:'#fafafa',color: 'rgb(57, 57, 57)',fontSize: '1rem', fontWeight: '300',}} >Our new take on getting from A to B. Get access to a Volvo when you want it, how you want it.</p>

          </div>
          <div className="col-md-4 col-xl-4  col-sm-12" style={{backgroundColor:'#fafafa'}}>
            <h5 style={{ fontSize: "font-size: 1.25rem",backgroundColor:'#fafafa' }}>Our future is electric</h5>
            <p style={{backgroundColor:'#fafafa',color: 'rgb(57, 57, 57)',fontSize: '1rem', fontWeight: '300',}} >All our cars are available with electrified power. We help you reduce the environmental impact of daily life.</p>

          </div>
          <div className="col-md-4 col-xl-4  col-sm-12" style={{backgroundColor:'#fafafa'}} >
            <h5 style={{ fontSize: "font-size: 1.25rem",backgroundColor:'#fafafa' }}>Protecting what’s important</h5>
            <p style={{backgroundColor:'#fafafa',color: 'rgb(57, 57, 57)',fontSize: '1rem', fontWeight: '300',}} >We’re proud of our safety heritage. We’ll keep innovating new ways to help you protect what's important.</p>
          </div>
          <div className='d-flex justify-content-center align-items-center  my-5'style={{backgroundColor:'#fafafa'}}>
            <button   className='button rounded'  >Learn more about Volvo</button>
          </div>



        </div>
      </div>
    </div>
  )
}

export default About