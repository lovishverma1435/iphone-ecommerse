import React from 'react'
import { useRef } from 'react';
import leftarrow from '../../assets/logo/arrow-left.svg'
import rightarrow from '../../assets/logo/arrow-right.svg'
// import imagesection from '../../json/bannerimage.json'
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
                <div className="flex justify-between items-center">
                    <div className="pt-6 flex max-w-[600px] justify-between items-end w-full ">
                        <h1 className='text-4xl font-semibold font-i tracking-wide capitalize'>{title}</h1>
                        {time && (<>
                            <CountdownTimer targetDate="2025-02-20" />
                        </>)}

                    </div>
                    {arrow === "set" ? <Button className={""} Children={"View All"} /> : (<>
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
                    </>)}
                </div>
            </div>
            <div className="imagesection pb-[73px]  mt-10">

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
