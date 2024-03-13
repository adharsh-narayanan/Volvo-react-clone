import React from 'react'
import './Suv.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Suv() {
    const cars = [
        {
            id:0,
            type: 'suv',
            model: 'C40 Recharge ',
            subtype: 'fully electric',
            rate: '₹ 62,95,000',
            image: 'https://www.volvocars.com/images/cs/v3/assets/bltab26d231d43e6180/blt2c86d0477e9bb1a3/65719a324b2dba000d59e33e/c40-bev-my24-responsive.jpg?branch=prod_alias&auto=webp&h=400&iar=0',
            subtext: 'Order Online'
        },
        {
            id:1,
            type: 'suv',
            model: 'XC40 Recharge ',
            subtype: 'fully electric',
            rate: '₹ 56,90,000 MSRP',
            image: 'https://www.volvocars.com/images/cs/v3/assets/bltab26d231d43e6180/blt3526b89ba16e8758/6583d75780aae9000d60b45b/xc60-mhev-my24-responsive.jpg?branch=prod_alias&auto=webp&h=500&iar=0',
            subtext: 'Order Online'
        },
        {
            id:2,
            type: 'suv',
            model: 'XC60 ',
            subtype: '',
            rate: '₹ 68,90,000',
            image: 'https://www.volvocars.com/images/cs/v3/assets/bltab26d231d43e6180/blt3526b89ba16e8758/6583d75780aae9000d60b45b/xc60-mhev-my24-responsive.jpg?branch=prod_alias&auto=webp&h=500&iar=0',
            subtext: 'Shop'
        },
        {
            id:3,
            type: 'suv',
            model: 'XC90',
            subtype: '',
            rate: '₹ 10,089,900',
            image: 'https://www.volvocars.com/images/cs/v3/assets/bltab26d231d43e6180/blte271013a10e8dcb7/6583d765e209f3000db84716/xc90-mhev-my24-responsive.jpg?branch=prod_alias&auto=webp&h=500&iar=0',
            subtext: 'Shop'
        }

    ]
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>

<div className='carousal' style={{  }} >

    <div  style={{ transition: "0.3s" }} className='d-flex'>

        {cars.map((items, index) => (
            <div className='cards' key={index} style={{ width: '19rem', boxSizing: "border-box", paddingRight: '15px', flexShrink: '0' }}>
                <div className="card-body">
                    <div className="card-text mb-3">
                        <h6  className='h6' style={{ fontSize: '1rem', fontWeight: '500',color:'grey',}}>{items.type}</h6>
                        <div className='d-flex'> <h5 style={{ fontSize: '1rem', fontWeight: '500'}}>{items.model}</h5><h6  className='h6' style={{ fontSize: '1rem', fontWeight: '300',color:'grey'}}> &nbsp;{items.subtype}</h6></div>
                        <h6 className='h6' style={{ fontSize: '0.75rem', fontWeight: '300',color:'grey' }} >purchase from {items.rate}  </h6>
                    </div>
                    <div className="card-image">
                        <div className='figure'><img src={items.image} width={'100%'} style={{ objectPosition: 'center', objectFit: 'fill' }} /></div>
                    </div>
                    <div className="card-bottom  justify-content-between d-flex ms-4 ps-3 pt-3">
                        <p style={{ fontSize: '1rem', fontWeight: '500', color: '#2a609d',cursor:'pointer' }}>Learn <KeyboardArrowRightIcon  style={{ fill: '#2a609d' }} fontSize='small' color='primary' /></p>
                        <p style={{ fontSize: '1rem', fontWeight: '500', color: '#2a609d',cursor:'pointer' }}>{items.subtext} <KeyboardArrowRightIcon fontSize='small' style={{ fill: '#2a609d' }} /></p>
                    </div>
                </div>
            </div>
        ))}



    </div>

</div>
</div>
</>
  )
}

export default Suv