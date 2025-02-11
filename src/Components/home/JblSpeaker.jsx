import React from 'react'
import time from '../../assets/logo/Frame601.svg'
import speaker from '../../assets/images/Frame694.png'
const JblSpeaker = () => {
    return (
        <section className='container mt-10 lg:mt-[140px]'>
            <div className="flex flex-col md:flex-row bg-black_1-black  mb-[71px]">
                <div className="flex flex-col-reverse gap-6 lg:flex-row  items-center justify-between p-[50px]">
                    <div className="flex flex-col max-w-[443px] items-start gap-[35px]">
                        <h4 className='text-green_1-green font-p font-semibold'>Categories</h4>
                        <h2 className='text-white_1-white font-i font-semibold text-2xl lg:text-5xl leading-[60px] tracking-wide'>Enhance Your Music Experience</h2>
                        <img className="" src={time} alt="" />
                        <button className='inline-block py-4 px-12 text-white_1-white bg-green_1-green text-base rounded-md'>Buy Now</button>
                    </div>
                    <div className="flex items-center justify-center drop-shadow-custom-white ">
                        <img className='flex  px-4' src={speaker} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JblSpeaker
