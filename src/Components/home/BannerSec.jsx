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
            <div className=" flex-col flex sm:flex-col xl:flex-row ">
                <div className='flex flex-col sm:flex-col w-[217px] h-[114px] overflow-auto sm:overflow-none lg:h-full categoryLink pt-4 lg:pt-10 transform mr-4'>
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
                <div className="w-[2px] h-[384px] bg-gray_2-gray  mr-[45px] sm:hidden  xl:block hidden "></div>
                <div className="">
                    <div className="max-w-[892px] w-full mt-10 ">
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination, Autoplay]}
                            autoplay={{ delay: 2500 }}
                            loop={true}
                            className="mySwiper">
                            {
                            bannerSection?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-black text-blue-500 py-8 sm:py-12 px-4">
                                        <NavLink to={item.to} className="block">
                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                                <div className='flex flex-col items-center sm:items-start text-center sm:text-left p-6 md:p-10'>
                                                    <div className="flex gap-4 items-center">
                                                        <img src={logo} alt="logo" className="w-10 h-10" />
                                                        <h1 className='text-white font-medium text-lg'>{item.logodetail}</h1>
                                                    </div>
                                                    <h1 className='text-white font-bold text-xl sm:text-2xl lg:text-4xl max-w-xs pt-4 pb-4 leading-tight'>{item.text}</h1>
                                                    <div className="flex items-center gap-2 border-b border-white pb-1">
                                                        <h1 className='text-white font-medium text-lg'>{item.button}</h1>
                                                        <img src={`/src/assets/logo/${item.arrow}`} alt='arrow' className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-center">
                                                    <img className="w-48 h-44 md:w-72 md:h-64" src={`/src/assets/images/${item.image}`} alt="banner" />
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
