import React, { } from 'react'
import leftarrow from '../../assets/images/arrow-left.svg'
import rightarrow from '../../assets/images/arrow-right.svg'
// import image1 from '../../assets/images/Frame611.png'
// import image2 from '../../assets/images/Frame-612.png'
// import image3 from '../../assets/images/Frame-613.png'
// import image4 from '../../assets/images/Frame-614.png'
// import icon1 from '../../assets/images/heart-small.svg'
// import icon2 from '../../assets/images/Quick-View.svg'
import imagesection from '../json/bannerimage.json'
import { NavLink } from 'react-router-dom'
const Bannersec2 = () => {

    return (
        <>
            <section>
                <div className="container pt-[127px]">
                    <div className="flex items-center gap-4">
                        <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                        <div className="text-red_1-red1 font-p font-semibold">Today's</div>
                    </div>
                    <div className="pt-6 grid grid-cols-4 items-end">
                        <h1 className='text-4xl font-semibold font-i tracking-wide'>Flash Sales</h1>
                        <ul className='flex'>
                            <li className='flex flex-col'>Days <span className='text-4xl font-bold tracking-wide'>03</span> </li>
                            <ul className='flex flex-col gap-1 mt-10 px-[17px]'>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                            </ul>
                            <li className='flex flex-col'>hours <span className='text-4xl font-bold tracking-wide'>23</span></li>
                            <ul className='flex flex-col gap-1 mt-10 px-[17px]'>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                            </ul>
                            <li className='flex flex-col'>Minutes <span className='text-4xl font-bold tracking-wide'>19</span></li>
                            <ul className='flex flex-col gap-1 mt-10 px-[17px]'>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                            </ul>
                            <li className='flex flex-col'>Seconds <span className='text-4xl font-bold tracking-wide'>56</span></li>
                        </ul>
                        <div className=""></div>
                        <div className="flex items-center justify-end gap-[19px]">
                            <img className='h-[46px] w-[46px] bg-gray_2-gray rounded-3xl' src={leftarrow} alt="image" />
                            <img className='h-[46px] w-[46px] bg-gray_2-gray rounded-3xl' src={rightarrow} alt="iamge" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 imagesection container">
                    {
                        imagesection.map((item, index) => (
                            <div key={index}>
                                <NavLink to={item.to}>
                                    <div className="">
                                        <div className="relative"> 
                                            <img src={`/src/assets/images/${item.image}`} alt="image" />
                                        </div>
                                        <h1>{item.name}</h1>
                                        <div className="flex gap-2">
                                            <h1 className='text-red_1-red1'>{item.offprice}</h1>
                                            <h1 className='line-through opacity-50'>{item.price}</h1>
                                        </div>
                                        <div className="">
                                            <img src={`/src/assets/images/${item.rating}`} alt="rating" />
                                        </div>
                                        <img src={`/src/assets/images/${item.heart}`} alt="heart" />
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </section>

        </>
    )
}

export default Bannersec2
