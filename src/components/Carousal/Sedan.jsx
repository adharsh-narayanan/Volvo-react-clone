import React from 'react'
import './All.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Sedan() {
    return (
        <div className='cards' style={{ width: '19rem', boxSizing: "border-box", paddingRight: '15px', flexShrink: '0' }}>
            <div className="card-body">
                <div className="card-text mb-3">
                    <h6 style={{ fontSize: '0.75rem', fontWeight: '500', color: 'gray' }}>Sedan</h6>
                    <div className='d-flex'> <h5 style={{ fontSize: '1rem', fontWeight: '500' }}>S90</h5><h7 style={{ fontSize: '0.75rem', fontWeight: '300', color: 'gray' }}></h7></div>
                    <h7 style={{ fontSize: '0.75rem', fontWeight: '300', color: 'gray' }}>purchase from ₹ 68,25,000</h7>
                </div>
                <div className="card-image">
                    <div className='figure'><img src='https://www.volvocars.com/images/cs/v3/assets/bltab26d231d43e6180/bltf7c2a2f9faf7c679/6583d71be209f3000db84700/s90-mhev-my24-responsive.jpg?branch=prod_alias&auto=webp&h=500&iar=0' width={'100%'} style={{ objectPosition: 'center', objectFit: 'fill' }} /></div>
                </div>
                <div className="card-bottom  justify-content-between d-flex ms-4 p-4">
                    <p style={{ fontSize: '1rem', fontWeight: '500', color: '#2a609d' }}>Learn <KeyboardArrowRightIcon style={{ fill: '#2a609d' }} fontSize='small' color='primary' /></p>
                    <p style={{ fontSize: '1rem', fontWeight: '500', color: '#2a609d' }}>Shop <KeyboardArrowRightIcon fontSize='small' style={{ fill: '#2a609d' }} /></p>
                </div>
            </div>
        </div>
    )
}

export default Sedan