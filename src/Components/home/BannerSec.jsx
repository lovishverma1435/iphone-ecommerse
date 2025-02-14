import React, { Fragment, useState } from 'react'
import categoryLink from '../../json/categories.json'
import bannerSection from '../../json/bannercontent.json'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/applelogo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Dropdown from '../DropDown'
import Bannerpopup from './Bannerpopup'
const data = categoryLink.map((item, index) => item.categorydata.woman.tags);
const mensdata = categoryLink.map((item, index) => item.categorydata.man.tags);


function BannerSec() {
    const [popup, setpopup] = useState(false)
    const LinkNames = categoryLink[0].links.map((link) => link.name)
    return (
        <section className='mb-12 lg:mb-[127px] '>
            <div className="container flex">
                <div className="flex ">
                    <div className="block lg:hidden">
                        <Bannerpopup/>
                        </div>
                    <div className="hidden lg:block">
                    <div className="flex relative">
                        <div className={` text-black_1-black flex flex-col max-w-[217px] pt-10 w-full border-r border-black pr-4 border-opacity-20`}>
                            <Dropdown items={data} label="Woman's Fashion" />
                            <Dropdown items={mensdata} label="Men's Fashion" />
                            {
                                categoryLink.map((item, index) => (
                                    <div key={index} className=''>
                                        <NavLink to={item.to} className="font-p flex items-center  group cursor-pointer w-[217px] leading-6 text-base font-normal ">
                                            <div className=" md:flex flex-col md:w-[217px] gap-4">
                                                {
                                                    LinkNames.map((item, index) => {
                                                        return (
                                                            <Fragment key={index + index + "links"}>
                                                                <h4 className=' hover:text-red_1-red1 transition-all duration-300'>{item}</h4>
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
                        </div>
                    </div>
                </div>
                {/* <div className="hidden lg:w-[1px] lg:h-[384px] lg:bg-gray-200 lg:inline-block lg:ml-[16px] lg:mr-[45px]"></div> */}
                <div className='mt-10 max-w-[908px] w-full lg:ml-[45px]'>
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{ delay: 2500 }}
                        loop={true}
                        className="mySwiper">
                        {
                            bannerSection?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-black text-blue-500 p-[25px] max-w-[908px] w-full">
                                        <NavLink to={item.to} className="">
                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                                <div className='flex flex-col items-start sm:items-start text-center sm:text-left pl-16'>
                                                    <div className="flex gap-4 items-center">
                                                        <img src={logo} alt="logo" className=" w-8 h-8 sm:w-10 sm:h-10" />
                                                        <h1 className='text-white font-medium text-lg'>{item.logodetail}</h1>
                                                    </div>
                                                    <h1 className='text-white font-bold text-xl md:text-3xl lg:text-4xl max-w-xs pt-4 pb-4 leading-tight'>{item.text}</h1>
                                                    <div className="flex items-center gap-2 border-b border-white pb-1">
                                                        <h1 className='text-white font-medium text-lg'>{item.button}</h1>
                                                        <img src={`/src/assets/logo/${item.arrow}`} alt='arrow' className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-center">
                                                    <img className="w-[296px] h-[294px] lg:w-[396px] lg:h-[294px]  " src={`/src/assets/images/${item.image}`} alt="banner" />
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
        </section>
    )
}

export default BannerSec
