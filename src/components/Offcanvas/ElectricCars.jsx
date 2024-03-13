import React from 'react'
import './Elec.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function ElectricCars() {
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
           <div>
                <div className=" d-flex align-items-center suvv">
                    <h6 className='mt-1' style={{ background: 'transparent', color: " #2a609d", fontSize: '1rem' }}>SUVs</h6>
                    <KeyboardArrowRightIcon style={{ background: 'transparent', fill: " #2a609d" }} fontSize='small' />
                </div>
                <div>
                    <div className='row  mt-3 '>
    
                        {cars.map((items, index) => (
                            <div className='cards col-md-3 navCars rounded' key={items.id}>
                                <div className="card-body bg-transparent">
                                    <div className="card-text bg-transparent mb-3">
                                        <div className='d-flex bg-transparent'> <h3 style={{ fontSize: '1rem', fontWeight: '500', backgroundColor: 'transparent' }}>{items.model}</h3></div>
                                        <h7 style={{ fontSize: '0.75rem', fontWeight: '300', color: 'gray', backgroundColor: 'transparent' }} >from {items.rate}  </h7>
                                    </div>
                                    <div className="card-image mt-5 bg-transparent">
                                        <div className='bg-transparent'><img className='bg-transparent' src={items.image} width={'60%'} style={{ objectPosition: 'center', objectFit: 'fill', backgroundColor: 'transparent' }} /></div>
                                    </div>
                                    <div className='w-75 text-center online mt-3 border p-1'>
                                        AVAILABLE ONLINE
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

export default ElectricCars