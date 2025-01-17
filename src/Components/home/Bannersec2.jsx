import React, { useState } from 'react'
import img1 from '../../assets/images/userprofile.svg'

const Bannersec2 = () => {
    const [rotate, setRotate] = useState(false)

    return (
        <>
            <section>
                <div className="container pt-[127px]">
                    <div className="flex items-center gap-4 ">
                        <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                        <div className="text-red_1-red1 font-p font-semibold">Today's</div>
                    </div>
                </div>
            </section>
            <button className='relative'  onClick={() => setRotate(!rotate)}> <img src={img1} className={` transition-all duration-200 ${ rotate && 'rotate-180'}`} alt="" /></button>



          {rotate && <ul className='flex flex-col gap-2 p-4 bg-purple-600 text-white w-20 absolute'>
                <li >jdhf</li>
                <li>jdhf</li>
                <li>jdhf</li>
                <li>jdhf</li>
            </ul> } 
        </>
    )
}

export default Bannersec2
