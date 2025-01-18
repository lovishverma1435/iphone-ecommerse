import React from 'react'
import categoryLink from '../json/categories.json'
import bannerSection from '../json/bannercontent.json'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/applelogo.png'
import arrow from '../../assets/images/arrow.svg'
// console.log(image);
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination } from 'swiper/modules';
function BannerSec() {



    return (
        <section>
            <div className="container flex">
                <ul className='flex flex-col  categoryLink pt-10 border-r-[2px]  pr-4 transform'>
                    {
                        categoryLink.map((item, index) => (
                            <li key={index} className='mb-4'>
                                <NavLink to={item.to} className="font-p flex items-center justify-between gap-3 group cursor-pointer w-[217px] hover:text-red_1-red1">{item.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className=''>
                                        <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black" className={`${item.arrow ? "opacity-100" : "opacity-0"} transition-all duration-300 group-hover:opacity-80`} />
                                    </svg>
                                </NavLink>

                            </li>
                        ))
                    }
                </ul>
                <div className="">
                    <div className='max-w-[925px] w-full mx-auto pt-10 pl-[45px]'>
                        <Swiper pagination={true} modules={[Pagination , Autoplay]} autoplay={{delay:2500}} loop={true} className="mySwiper">
                            {
                                bannerSection?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className=" bg-black bannerSection text-blue-blue_1">
                                            <NavLink to={item.to}>
                                                <div className="flex justify-between items-center">
                                                    <div className='p-[58px_38px_47px_64px]'>
                                                        <div className="flex items-center gap-6 ">
                                                            <img src={logo} alt="img" />
                                                            <h1 className='text-white font-p text-base'>{item.logodetail}</h1>
                                                        </div>
                                                        <h1 className='text-white font-i text-5xl max-w-[294px] pt-5 pb-5 line leading-[60px] tracking-wide'>{item.text}</h1>
                                                        <div className="flex gap-2 ">
                                                            <h1 className='text-white font-p font-medium leading-10 border-b-[1px]'>{item.button}</h1>
                                                            <img src={arrow} alt='img' />
                                                        </div>
                                                    </div>
                                                    <div className=" mx-w-[496px] pt-8 pr-10">
                                                        <img className="" src={`/src/assets/images/${item.image}`} alt="Additional img" />

                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BannerSec
