import React from 'react'
import { useRef } from 'react';
import browse from '../../json/browse.json'
import leftarrow from '../../assets/logo/arrow-left.svg'
import rightarrow from '../../assets/logo/arrow-right.svg'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

const Categroy = () => {
    const swiperRef = useRef();

    return (
        <section className='container border-b border-t mb-6 md:mb-10 lg:mb-[70px] mt-6 md:mt-10 lg:mt-[60px]'>
            <div className=" ">
                <div className="flex items-center gap-4 mt-20">
                    <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                    <div className="text-red_1-red1 font-p font-semibold">Categories</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="pt-6 flex items-end">
                        <h1 className='text-2xl lg:text-4xl font-semibold font-i tracking-wide'>Browse By Category</h1>
                    </div>
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
                <div className="browse  pt-[60px]">
                    <Swiper slidesPerView={6}
                        spaceBetween={30}
                        loop={true}
                        modules={[Navigation]}
                        navigation={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            360:{
                                slidesPerView:2
                            },
                            640:{
                                slidesPerView:3
                            },
                            768:{
                                slidesPerView:4
                            },
                            1024:{
                                slidesPerView:6
                            }
                        }}
                        className="mySwiper">

                    {
                        browse.map((item, index) => (
                            <SwiperSlide key={index}>
                                <NavLink to={item.to}>
                                    <div className="border rounded-md py-6 px-[57px] gap-3 lg:gap-4 flex flex-col items-center justify-center max-w-[170px] max-h-[145px] mb-[70px] hover:bg-red_1-red1 transition-all duration-200 ease-in hover:text-white_1-white  ">
                                        <img src={item.logo} alt="" />
                                        <h1 className='font-normal text-base font-p'>{item.name}</h1>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        ))
                    }
                        </Swiper>

                </div>
            </div>
        </section>
    )
}

export default Categroy
