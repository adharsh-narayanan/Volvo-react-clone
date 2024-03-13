import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './SmallE.css'

function SmallscreenE() {
    const cars = [
        {
            id: 0,
            type: 'suv',
            model: 'C40 Recharge ',
            subtype: 'fully electric',
            rate: '₹ 62,95,000',
            image: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/navigation/my24/c40-electric.png?h=190&iar=0&w=464',
            subtext: 'Order Online'
        },
        {
            id: 1,
            type: 'suv',
            model: 'XC40 Recharge ',
            subtype: 'fully electric',
            rate: '₹ 56,90,000 MSRP',
            image: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/navigation/my24/xc40-electric.png?iar=0',
            subtext: 'Order Online'
        }

    ]
    return (
        <>

            <div className=" d-flex align-items-center suvv">
                <h6 className='mt-1' style={{ background: 'transparent', color: " #2a609d", fontSize: '1rem' }}>SUVs</h6>
                <KeyboardArrowRightIcon style={{ background: 'transparent', fill: " #2a609d" }} fontSize='small' />
            </div>
          
           {
            cars.map((items)=>(
              <div>
                    <div className='w-50 rounded text-center online mt-3 border p-1'>
                    AVAILABLE ONLINE
                </div>
                    
                    <div className='row d-flex align-items-center justify-content-around mt-3'>
                    <div className="col-sm-7 text">
                    <h1 style={{ fontSize: '1rem', fontWeight: '500', backgroundColor: 'transparent' }}>{items.model}</h1>
                     <p style={{ fontSize: '0.75rem', fontWeight: '300', color: 'gray', backgroundColor: 'transparent' }} >from {items.rate}  </p>
                    </div>
                    <div className="col-sm-5">
                    <img className='bg-transparent' src={items.image} width={'70%'} style={{ objectPosition: 'center', objectFit: 'fill', backgroundColor: 'transparent' }} />                                  
                    </div>
                </div>
              </div>
            ))
           }






        </>

    )
}

export default SmallscreenE