import React from 'react'

import Entflix from '../Entflix'
import { DoneAllOutlined, VerifiedOutlined } from '@mui/icons-material'
import Footer from '../Footer'

const Plan = () => {
    const plan_data = [
        {
            title: 'Everything For Free'
        },
        {
            title: 'No ads and no extra fees. Ever'
        },
        {
            title: 'No Spamming of Emails'
        }
    ]
    return (
        <div className='bg-plan '>
            <div className='flex flex-col bg-wraplan'>
                <Entflix />
                
                <div className='mt-[8em] flex flex-col items-center  '>
                    <div className=''>
                        <div className='p-2'>
                            <VerifiedOutlined className='text-red-600' fontSize='large' /> 
                        <p className='text-sm mt-4'>STEP <span className='font-bold text-xl text-red-600'>2</span> OF <span className='font-bold text-red-600'>3</span></p>
                        <p className='my-2 font-semibold text-2xl '>ALMOST THERE !</p>
    
                        </div>
                        <div className=''>

                            {
                                plan_data.map((data) => (
                                    <div id={data.id} className='flex items-center'>
                                        <DoneAllOutlined className='text-red-600' />
                                    <p className='m-3 text-xl ' >
                                        {data.title}
                                    </p>
                                        </div>

                                ))
                            }
                        </div>
                        <div className='p-4 flex flex-col'>
                            <div className='flex flex-col'>
                                <p>chip in a dollar a month for maintenance cost.</p>
                                <h2 className='my-2 text-6xl  text-red-600'>2$</h2>

                                <div className='my-2'>
                                <button className='w-64 bg-red-600 p-3 text-xl text-white'>PAY 2$</button>
                            </div>
                            </div>

                            
                        </div>
                    </div>
                </div>

            <Footer />
            </div>

            
        </div>
    )
}

export default Plan
