import React, { Fragment, useState } from 'react'
import categoryLink from '../../json/categories.json'
import bannerSection from '../../json/bannercontent.json'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/applelogo.png'
// import arrow from '../../assets/images/arrow.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Dropdown from '../DropDown'
const data = categoryLink.map((item, index) => item.categorydata.woman.tags);
const mensdata = categoryLink.map((item, index) => item.categorydata.man.tags);



function BannerSec() {
    const LinkNames = categoryLink[0].links.map((link) => link.name)
    return (

        <section className='mb-12 lg:mb-[127px] container'>
            <div className=" flex-col flex sm:flex-row">
                <div className='flex flex-col sm:flex-col w-[217px]  h-[114px] overflow-auto  lg:h-full categoryLink pt-4 lg:pt-10 transform mr-4'>
                    <Dropdown items={data} label="Woman’s Fashion" />
                    <Dropdown items={mensdata} label="Men’s Fashion" />
                    {
                        categoryLink.map((item, index) => (
                            <div key={index} className='mb-4'>
                                <NavLink to={item.to} className="font-p flex items-center justify-between group cursor-pointer w-[217px] leading-6 text-base font-normal ">
                                    <div className=" md:flex flex-col md:w-[217px]">
                                        {
                                            LinkNames.map((item, index) => {
                                                return (
                                                    <Fragment key={index + index + Date.now() + "links"}>
                                                        <h4 className='pb-4 hover:text-red_1-red1 transition-all duration-300'>{item}</h4>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
                <div className=" border-none   p-0 lg:border-l-2 lg:pl-[45px]   ">
                    <div className=' max-w-[892px] w-full    mt-10 '>
                        <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 2500 }} loop={true} className="mySwiper">
                            {
                                bannerSection?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className=" bg-black bannerSection text-blue-blue_1">
                                            <NavLink to={item.to}>
                                                <div className="flex-col-reverse sm:flex sm:flex-row  justify-center sm:justify-between">
                                                    <div className='p-[58px_38px_47px_64px]  flex flex-col items-center md:items-start justify-center'>
                                                        <div className="flex  gap-6 ">
                                                            <img  src={logo} alt="img" />
                                                            <h1 className='text-white font-p text-base flex items-center'>{item.logodetail}</h1>
                                                        </div>
                                                        <h1 className='text-white font-i sm:text-2xl lg:text-5xl max-w-[294px] pt-5 pb-5 line leading-[60px] tracking-wide font-semibold'>{item.text}</h1>
                                                        <div className="flex gap-2 ">
                                                            <h1 className='text-white font-p font-medium leading-[24px] border-b-[1px]'>{item.button}</h1>
                                                            <img src={`src/assets/logo/${item.arrow}`} alt='img' />
                                                        </div>
                                                    </div>
                                                    <div className=" mx-w-[496px] pr-[20px] flex justify-center ">
                                                        <img className="w-[290px] h-[260px] lg:w-[390px] lg:h-[344px] " src={`/src/assets/images/${item.image}`} alt="Additional img" />
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
