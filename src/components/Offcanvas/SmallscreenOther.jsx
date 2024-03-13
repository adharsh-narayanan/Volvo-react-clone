import React from 'react'
import './SmallE.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function SmallscreenOther() {
    const cars = [
        {
            id: 0,
            type: 'suv',
            model: 'XC90',
            subtype: '',
            rate: 'from ₹ 10,089,900',
            image: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/navigation/my24/xc90.png?h=192&iar=0&w=517',
            subtext: 'Shop'
        },
        {
            id: 1,
            type: 'suv',
            model: 'XC60 ',
            subtype: '',
            rate: ' from ₹ 68,90,000',
            image: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/navigation/my24/xc60.png?iar=0',
            subtext: 'Shop'
        },

        {
            id: 2,
            type: 'suv',
            model: 'XC40  ',
            subtype: ' ',
            rate: '',
            image: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/navigation/my23/xc40.png?h=192&iar=0&w=466',
            subtext: ' '
        }



    ]
    return (
        <>

            <div className=" d-flex align-items-center mb-5 suvv">
                <h6 className='mt-1' style={{ background: 'transparent', color: " #2a609d", fontSize: '1rem' }}>SUVs</h6>
                <KeyboardArrowRightIcon style={{ background: 'transparent', fill: " #2a609d" }} fontSize='small' />
            </div>

            {
                cars.map((items) => (
                    <div className='mb-5'>

                        <div className='row d-flex align-items-center justify-content-around mt-3'>
                            <div className="col-sm-7 text">
                                <h1 style={{ fontSize: '1rem', fontWeight: '500', backgroundColor: 'transparent' }}>{items.model}</h1>
                                <p style={{ fontSize: '0.75rem', fontWeight: '300', color: 'gray', backgroundColor: 'transparent' }} > {items.rate}  </p>
                            </div>
                            <div className="col-sm-5">
                                <img className='bg-transparent' src={items.image} width={'70%'} style={{ objectPosition: 'center', objectFit: 'fill', backgroundColor: 'transparent' }} />
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className=" d-flex align-items-center mt-3 mb-5 suvv">
                <h6 className='mt-1' style={{ background: 'transparent', color: " #2a609d", fontSize: '1rem' }}>Sedans</h6>
                <KeyboardArrowRightIcon style={{ background: 'transparent', fill: " #2a609d" }} fontSize='small' />
            </div>


            <div className='mb-5'>

                <div className='row d-flex align-items-center justify-content-around mt-3'>
                    <div className="col-sm-7 text">
                        <h1 style={{ fontSize: '1rem', fontWeight: '500', backgroundColor: 'transparent' }}>S90</h1>
                        <p style={{ fontSize: '0.75rem', fontWeight: '300', color: 'gray', backgroundColor: 'transparent' }} > from ₹ 68,25,000  </p>
                    </div>
                    <div className="col-sm-5">
                        <img className='bg-transparent' src='https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/navigation/my24/s90.png?iar=0' width={'70%'} style={{ objectPosition: 'center', objectFit: 'fill', backgroundColor: 'transparent' }} />
                    </div>
                </div>
            </div>






        </>
    )
}

export default SmallscreenOther