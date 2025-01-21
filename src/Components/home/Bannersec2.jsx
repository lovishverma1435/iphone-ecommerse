import React from 'react'
import { useRef } from 'react';
import leftarrow from '../../assets/images/arrow-left.svg'
import rightarrow from '../../assets/images/arrow-right.svg'
// import image1 from '../../assets/images/Frame611.png'
// import image2 from '../../assets/images/Frame-612.png'
// import image3 from '../../assets/images/Frame-613.png'
// import image4 from '../../assets/images/Frame-614.png'
// import icon1 from '../../assets/images/heart-small.svg'
// import icon2 from '../../assets/images/Quick-View.svg'
import imagesection from '../json/bannerimage.json'
import { NavLink } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

// import './styles.css';
const Bannersec2 = () => {
    const swiperRef = useRef();

    return (
        <>
            <section>
                <div className="container pt-[127px]">
                    <div className="flex items-center gap-4">
                        <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                        <div className="text-red_1-red1 font-p font-semibold">Today's</div>
                    </div>
                    <div className="pt-6 grid grid-cols-4 items-end">
                        <h1 className='text-4xl font-semibold font-i tracking-wide'>Flash Sales</h1>
                        <ul className='flex'>
                            <li className='flex flex-col'>Days <span className='text-4xl font-bold tracking-wide'>03</span> </li>
                            <ul className='flex flex-col gap-1 mt-10 px-[17px]'>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                            </ul>
                            <li className='flex flex-col'>hours <span className='text-4xl font-bold tracking-wide'>23</span></li>
                            <ul className='flex flex-col gap-1 mt-10 px-[17px]'>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                            </ul>
                            <li className='flex flex-col'>Minutes <span className='text-4xl font-bold tracking-wide'>19</span></li>
                            <ul className='flex flex-col gap-1 mt-10 px-[17px]'>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                                <li className='h-1 w-1 rounded-2xl bg-red_2-lightred'></li>
                            </ul>
                            <li className='flex flex-col'>Seconds <span className='text-4xl font-bold tracking-wide'>56</span></li>
                        </ul>
                        <div className=""></div>
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
                </div>
                <div className="imagesection container  mt-10">

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
                            imagesection.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <NavLink to={item.to}>
                                        <div>
                                            <div className="bg-[#F5F5F5] group rounded-md relative">
                                                <img className='relative hover:scale-75   transition-all duration-300 py-[35px] px-10' src={`/src/assets/${item.image}`} alt="image" />
                                                <h2 className="flex items-center justify-center  h-0 transition-all   duration-300 bg-black w-[270px] rounded-b-md absolute bottom-0 font-p font-medium  text-base text-white  group-hover:h-[41px] ">Add To Cart</h2>
                                                <div className="flex absolute top-3 left-3 w-[55px] h-[26px] bg-red_1-red1 items-center justify-center rounded-md">
                                                    <h4 className='text-[#FAFAFA] font-normal font-p text-xs'>{item.discount}</h4>
                                                </div>
                                                <div className="flex absolute top-3 right-3">
                                                    <img src={`/src/assets/${item.heart}`} alt="heart" />
                                                </div>
                                                <div className="flex absolute top-[54px] right-3">
                                                    <img src={`/src/assets/${item.view}`} alt="" />
                                                </div>
                                            </div>
                                            <div className="pt-4">
                                                <h1 className='font-p font-medium text-base'>{item.name}</h1>
                                                <div className="flex gap-2 py-2">
                                                    <h1 className='text-red_1-red1 font-p font-medium text-base'>{item.offprice}</h1>
                                                    <h1 className='line-through opacity-50 font-p font-medium text-base'>{item.price}</h1>
                                                </div>
                                                <div className="flex gap-2">
                                                    <img src={`/src/assets/${item.rating}`} alt="rating" />
                                                    <h4 className='font-p text-sm font-semibold text-[#000000] opacity-[50%]'>{item.viewer}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="flex items-center justify-center pt-[73px] pb-[60px] border-b-[2px]">
                        <button className='bg-red_1-red1 text-white_1-white font-p font-medium text-base py-4 px-12 rounded-md'>View All Product</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Bannersec2
