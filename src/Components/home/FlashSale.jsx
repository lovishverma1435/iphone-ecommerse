import React from 'react'
import { useRef } from 'react';
import leftarrow from '../../assets/logo/arrow-left.svg'
import rightarrow from '../../assets/logo/arrow-right.svg'
import { Link, NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Button from '../ui/Button';
import FlashCards from '../Cards/FlashCards';
import CountdownTimer from '../CountdownTimer'
const Bannersec2 = ({ info, title, data, time, showbutton, arrow }) => {
    const swiperRef = useRef();

    return (
        <section className='container '>
            <div className="">
                <div className="flex items-center gap-4 ">
                    <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                    <div className="text-red_1-red1 font-p font-semibold capitalize">{info}</div>
                </div>
                <div className="flex flex-col gap-6 justify-between sm:flex-row sm:justify-between  sm:items-center  lg:justify-between items-center">
                    <div className="pt-6 flex max-w-[600px] w-full gap-6 sm:gap-0 flex-col lg:justify-between items-start sm:justify-start sm:flex-col md:flex-col lg:flex-row  lg:w-[600px]  sm:items-center  md:gap-6">
                        <h1 className='text-2xl md:text-4xl font-semibold font-i tracking-wide capitalize'>{title}</h1>
                        <div className="">
                            {time && (<>
                                <CountdownTimer targetDate="2025-02-25" />
                            </>)}
                        </div>
                    </div>
                    {arrow === "set" ? <Button className={""} Children={"View All"} /> : (<>
                        <div className="flex max-w-[100px] gap-5 w-full">
                            <div className='flex gap-2'>
                                <div className="w-[46px] h-[46px] bg-gray_2-gray rounded-[80%] flex item items-center justify-center">
                                    <button onClick={() => swiperRef.current?.slidePrev()}> <img src={leftarrow} alt="left" /> </button>
                                </div>
                                <div className="w-[46px] hi[46px] bg-gray_2-gray rounded-[80%] flex item items-center justify-center">
                                    <button onClick={() => swiperRef.current?.slideNext()}> <img src={rightarrow} alt="right" /> </button>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>
            </div>
            <div className="imagesection pb-10 lg:pb-[73px] mt-6 lg:mt-10">

                <Swiper slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    modules={[Navigation]}
                    navigation={true}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        360 :{
                            slidesPerView:2,
                        },
                        640:{
                            slidesPerView:2.5,
                        },
                        768:{
                            slidesPerView:3.25
                        },
                        1024:{
                            slidesPerView:4
                        }
                    }}
                    className="mySwiper">
                    {
                        data.map((item, index) => (
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
            {showbutton && (<>
                <Link to={"/products"}>
                    <Button Children={"View All Product"} />
                </Link>
            </>)}
        </section>

    )
}

export default Bannersec2
