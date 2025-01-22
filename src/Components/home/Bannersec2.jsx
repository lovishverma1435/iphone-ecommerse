import React from 'react'
import { useRef } from 'react';
import leftarrow from '../../assets/images/arrow-left.svg'
import rightarrow from '../../assets/images/arrow-right.svg'
// import image1 from '../../assets/images/Frame611.png'
// import image2 from '../../assets/images/Frame-612.png'
// import image3 from '../../assets/images/Frame-613.png'
// import image4 from '../../assets/images/Frame-614.png'
// import icon1 from '../../assets/images/heart-small.svg'
// import icon2 from '../../assets/images/Quick-View.svg'
import imagesection from '../../json/bannerimage.json'
import { NavLink } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Button from '../ui/Button';
import FlashCards from '../Cards/FlashCards';

// import './styles.css';
const Bannersec2 = () => {
    const swiperRef = useRef();

    return (
        <>
            <section>
                <div className="container ">
                    <div className="flex items-center gap-4 mt-[140px]">
                        <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                        <div className="text-red_1-red1 font-p font-semibold">Today's</div>
                    </div>
                    <div className="pt-6 grid grid-cols-4 items-end">
                        <h1 className='text-4xl font-semibold font-i tracking-wide'>Flash Sales</h1>
                        <ul className='flex'>
                            <li className='flex flex-col font-medium text-xs font-p pb-1'>Days <span className='text-4xl font-bold tracking-wide'>03</span> </li>
                            <ul className='flex flex-col gap-1 mt-8 px-[17px]'>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                            </ul>
                            <li className='flex flex-col font-medium text-xs font-p pb-1'>hours <span className='text-4xl font-bold tracking-wide'>23</span></li>
                            <ul className='flex flex-col gap-1 mt-8 px-[17px]'>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                            </ul>
                            <li className='flex flex-col font-medium text-xs font-p pb-1'>Minutes <span className='text-4xl font-bold tracking-wide'>19</span></li>
                            <ul className='flex flex-col gap-1 mt-8 px-[17px]'>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                            </ul>
                            <li className='flex flex-col font-medium text-xs font-p pb-1'>Seconds <span className='text-4xl font-bold tracking-wide'>56</span></li>
                        </ul>
                        <div className=""></div>
                        <div className="flex items-center justify-end gap-[19px] ">
                            <div className='flex gap-2'>
                                <div className="w-[46px] h-[46px] bg-gray_2-gray rounded-[80%] flex item items-center justify-center">
                                    <button onClick={() => swiperRef.current?.slidePrev()}> <img src={leftarrow} alt="left" /> </button>
                                </div>
                                <div className="w-[46px] hi[46px] bg-gray_2-gray rounded-[80%] flex item items-center justify-center">
                                    <button onClick={() => swiperRef.current?.slideNext()}> <img src={rightarrow} alt="right" /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imagesection container  mt-10">

                    <Swiper slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        modules={[Navigation]}
                        navigation={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="mySwiper">
                        {
                            imagesection.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <NavLink to={item.to}>
                                            {
                                               <FlashCards image={item.image} discount={item.discount} heart={item.heart} view={item.view} name={item.name} price={item.price} offprice={item.offprice} rating={item.rating} viewer={item.viewer} />
                                            }
                                    </NavLink>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                   <Button Children={"View All Product"}/>
                </div>
            </section>

        </>
    )
}

export default Bannersec2
