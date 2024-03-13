import React, { useState } from 'react'
import './Models.css'
import All from './Carousal/All'
import Suv from './Carousal/Suv'
import Sedan from './Carousal/Sedan'



function Models() {
    const [models, setModels] = useState('All')

    const handleChange = (e) => {
        //console.log(e.target.value);      
        setModels(e.target.value)
        console.log(e.target.value);

        if (e.target.value === 'All') {

            btn11.style.display = 'block'
        }
        else {
            btn11.style.display = 'none'
        }

        if (e.target.value === 'SUV') {
            btn22.style.display = 'block'
        }
        else {
            btn22.style.display = 'none'
        }
        if (e.target.value === 'sedan') {
            btn33.style.display = 'block'
        }
        else {
            btn33.style.display = 'none'
        }
    }


    return (
        <>
            <div className='d-flex justify-content-center  align-items-center p-3 mt-5'>
                <div className='d-flex align-items-center flex-column'>
                    <div><h3 style={{ fontSize: '35px', fontWeight: `600` }}>All models</h3></div>
                    <div className='w-100'>

                        <div className='d-flex justify-content-center  align-items-center p-3 mt-5'>
                            <div className='btn6 p-2' style={{ position: "relative" }} >
                                <div id='btn11'></div>
                                <input type="radio" id="All" value={'All'} name="models" onChange={handleChange} checked={models === 'All'} />
                                <label htmlFor='All' >All (5)</label>
                            </div>
                            <div className='btn6 p-2' style={{ position: "relative" }} >
                                <div id='btn22'></div>
                                <input type="radio" id="SUV" value={'SUV'} name="models" onChange={handleChange} checked={models === 'SUV'} />
                                <label htmlFor="SUV">SUV (4)</label>
                            </div>
                            <div className='btn6 p-2' style={{ position: "relative" }} >
                                <div id='btn33'></div>
                                <input type="radio" id="Sedan" value={'sedan'} name="models" onChange={handleChange} checked={models === 'sedan'} />
                                <label htmlFor="Sedan">Sedan (1)</label>
                            </div>

                        </div>
                    </div>
                    <div className='show'>

                        <div aria-hidden={models !== "All" ? true : false}>
                            <All />
                        </div>
                        <div aria-hidden={models !== "SUV" ? true : false}>
                            <Suv />
                        </div>
                        <div aria-hidden={models !== "sedan" ? true : false}>
                            <Sedan />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Models