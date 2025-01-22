import React from 'react'
import Bestprod from '../../json/bestproducts.json'
import { NavLink } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay} from 'swiper/modules';
import FlashCards from '../Cards/FlashCards';
const BestSelling = () => {
    return (
        <>
            <div className="container ">
                <div className="flex items-center gap-4 mt-[70px]">
                    <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                    <div className="text-red_1-red1 font-p font-semibold">This Month</div>
                </div>
                <div className="pt-6 flex items-end">
                    <h1 className='text-4xl font-semibold font-i tracking-wide'>Best Selling Products</h1>
                </div>
            </div>
            <div className="imagesection container  mt-10 mb-[140px]">

                <Swiper slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{ delay: 2500 }}
                    loop={true}
                    modules={[Autoplay]}
                    navigation={true}
                   
                    className="mySwiper">
                    {
                        Bestprod.map((item, index) => (
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
            </div>
        </>
    )
}

export default BestSelling
