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
    const [popup, setpopup] = useState(false)
    const LinkNames = categoryLink[0].links.map((link) => link.name)
    return (
        <section className='mb-12 lg:mb-[127px] '>
            <div className="container flex">
                    <div className="flex flex-col max-w-[217px] pt-10 w-full ">
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
                        {/* <button onClick={() => setpopup(!popup)} className='w-[30px] flex justify-center items-start lg:hidden'>
                                    <div className='flex items-center justify-start bg-red_1-red1 w-[30px] h-[50px] rounded-r rounded-br' > <img src="src/assets/logo/arrow.svg" alt="arrow" /> </div>
                                </button> */}
                    </div>
                    <div className="w-[1px] h-[384px] bg-gray-200 inline-block ml-[16px] mr-[45px]"></div>
                    <div className='mt-10 max-w-[891px] w-full'>
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination, Autoplay]}
                            autoplay={{ delay: 2500 }}
                            loop={true}
                            className="mySwiper">
                            {
                                bannerSection?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bg-black text-blue-500 p-[25px] max-h-[344px] h-full max-w-[892px] w-full ">
                                            <NavLink to={item.to} className="">
                                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                                    <div className='flex flex-col items-center sm:items-start text-center sm:text-left pl-16'>
                                                        <div className="flex gap-4 items-center">
                                                            <img src={logo} alt="logo" className="w-10 h-10" />
                                                            <h1 className='text-white font-medium text-lg'>{item.logodetail}</h1>
                                                        </div>
                                                        <h1 className='text-white font-bold text-4xl max-w-xs pt-4 pb-4 leading-tight'>{item.text}</h1>
                                                        <div className="flex items-center gap-2 border-b border-white pb-1">
                                                            <h1 className='text-white font-medium text-lg'>{item.button}</h1>
                                                            <img src={`/src/assets/logo/${item.arrow}`} alt='arrow' className="w-5 h-5" />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <img className="w-[396px] h-[294px] " src={`/src/assets/images/${item.image}`} alt="banner" />
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
