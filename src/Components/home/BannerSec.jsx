import React, { useState } from 'react'
import categoryLink from '../json/categories.json'
import bannerSection from '../json/bannercontent.json'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/applelogo.png'
// import arrow from '../../assets/images/arrow.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
function BannerSec() {

    const [arrow, arrowdown] = useState(false)
    const [set, setarrow] = useState(false)


    return (
        <>
            <section>
                <div className="container flex">
                    <div className='flex w-[217px]  overflow-hidden flex-col  categoryLink pt-10 transform mr-4'>
                        <div className=" w-[217px] flex flex-col">

                            <button className=" flex  justify-between  pb-3 font-p leading-6 text-base font-normal  hover:text-red_1-red1"><h4>Woman's Fashions</h4><img onClick={() => arrowdown(!arrow)} className={`transition-all duration-200 ${arrow && "rotate-90"}`} src={"src/assets/DropDown.svg"} alt="" /></button>
                            <ul className={`list-disc  transition-all duration-300 ${arrow ? "opacity-100 h-[125px] z-10 " : "h-0 -z-[99999999] opacity-0"}`}>
                                {
                                    ["Tops", "Shoes", "Cap", "Shirts"].map((item, index) => (
                                        <div key={index}>
                                            <li className='ml-[25px] font-p pb-2'>{item}</li>
                                        </div>
                                    ))
                                }
                            </ul>
                            <button className=" flex  justify-between  pb-3 font-p leading-6 text-base font-normal hover:text-red_1-red1"><h4>Men's Fashions</h4><img onClick={() => setarrow(!set)} className={`transition-all duration-200 ${set && "rotate-90"}`} src={"src/assets/DropDown.svg"} alt="" /></button>
                            <ul className={`list-disc  transition-all duration-300 ${set ? "opacity-100 h-[125px] z-10 " : "h-0 -z-[-999999999] opacity-0"}`}>
                                {
                                    ["Tops", "Shoes", "Cap", "Shirts"].map((item, index) => (
                                        <div key={index}>
                                            <li className='ml-[25px] font-p pb-2'>{item}</li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                        {
                            categoryLink.map((item, index) => (
                                <div key={index} className='mb-4'>
                                    <NavLink to={item.to} className="font-p flex items-center justify-between group cursor-pointer w-[217px] leading-6 text-base font-normal hover:text-red_1-red1">
                                        {item.name}

                                    </NavLink>

                                </div>
                            ))
                        }
                    </div>
                    <div className=" border-l-2 pl-[45px]">
                        <div className='max-w-[892px] w-full h-[344px]  mt-10 '>
                            <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 2500 }} loop={true} className="mySwiper">
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
                                                            <h1 className='text-white font-i text-5xl max-w-[294px] pt-5 pb-5 line leading-[60px] tracking-wide font-semibold'>{item.text}</h1>
                                                            <div className="flex gap-2 ">
                                                                <h1 className='text-white font-p font-medium leading-[24px] border-b-[1px]'>{item.button}</h1>
                                                                <img src={`src/assets/images/${item.arrow}`} alt='img' />
                                                            </div>
                                                        </div>
                                                        <div className=" mx-w-[496px] pr-[20px] ">
                                                            <img className="w-[390px] h-[344px]" src={`/src/assets/images/${item.image}`} alt="Additional img" />

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
        </>
    )
}

export default BannerSec
