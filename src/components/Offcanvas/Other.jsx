import React from 'react'
import './Other.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Other() {
     const cars = [
        {
            id:0,
            type: 'suv',
            model: 'XC90',
            subtype: '',
            rate: 'from ₹ 10,089,900',
            image: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/navigation/my24/xc90.png?h=192&iar=0&w=517',
            subtext: 'Shop'
        },
        {
            id:1,
            type: 'suv',
            model: 'XC60 ',
            subtype: '',
            rate: ' from ₹ 68,90,000',
            image: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/navigation/my24/xc60.png?iar=0',
            subtext: 'Shop'
        },
        
        {
            id:2,
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
                                 <h7 style={{ fontSize: '0.75rem', fontWeight: '300', color: 'gray', backgroundColor: 'transparent' }} > {items.rate}  </h7>
                             </div>
                             <div className="card-image mt-5 bg-transparent">
                                 <div className='bg-transparent'><img className='bg-transparent' src={items.image} width={'60%'} style={{ objectPosition: 'center', objectFit: 'fill', backgroundColor: 'transparent' }} /></div>
                             </div>
                             

                         </div>
                     </div>
                 ))}



             </div>
         </div>
    </div>
    <div>
         <div className=" d-flex align-items-center suvv mt-5">
             <h6 className='mt-1' style={{ background: 'transparent', color: " #2a609d", fontSize: '1rem' }}>Sedans</h6>
             <KeyboardArrowRightIcon style={{ background: 'transparent', fill: " #2a609d" }} fontSize='small' />
         </div>
         <div>
             <div className='row  mt-3 '>   
                
                     <div className='cards col-md-3 navCars rounded' >
                         <div className="card-body bg-transparent">
                             <div className="card-text bg-transparent mb-3">
                                 <div className='d-flex bg-transparent'> <h3 style={{ fontSize: '1rem', fontWeight: '500', backgroundColor: 'transparent' }}>S90</h3></div>
                                 <h7 style={{ fontSize: '0.75rem', fontWeight: '300', color: 'gray', backgroundColor: 'transparent' }} > from ₹ 68,25,000  </h7>
                             </div>
                             <div className="card-image mt-5 bg-transparent">
                                 <div className='bg-transparent'><img className='bg-transparent' src='https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/navigation/my24/s90.png?iar=0' width={'60%'} style={{ objectPosition: 'center', objectFit: 'fill', backgroundColor: 'transparent' }} /></div>
                             </div>
                            
                         </div>
                     </div>
                



             </div>
         </div>
    </div>
 </>
  )
}

export default Other