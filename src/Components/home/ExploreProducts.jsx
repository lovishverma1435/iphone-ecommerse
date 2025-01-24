import React from 'react'
import exploreprod from '../../json/explore.json'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'

const ExploreProducts = () => {
    return (
        <>
            <section>
                <div className="container pb-[60px]">
                    <div className="flex items-center gap-4 ">
                        <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                        <div className="text-red_1-red1 font-p font-semibold capitalize">Our Products</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="pt-6 flex max-w-[600px] justify-between items-end w-full ">
                            <h1 className='text-4xl font-semibold font-i tracking-wide capitalize'>Explore Our Products</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] pt-[60px]">
                        {
                            exploreprod.map((item, index) => (
                                <div key={index}>
                                    <NavLink to={item.to}>
                                        <div className="bg-[#F5F5F5] group rounded-md relative">
                                            <img className='relative hover:scale-90   transition-all duration-300 py-[35px] px-10' src={`/src/assets/images/${item.image}`} alt="image" />
                                            <h2 className="flex items-center justify-center h-0 transition-all duration-300 bg-black w-[270px] rounded-b-md absolute bottom-0 font-p font-medium  text-base text-white truncate capitalize group-hover:h-[41px] ">Add To Cart</h2>

                                            <div className="flex absolute top-3 right-3">
                                                <img src={`/src/assets/logo/${item.wishlist}`} alt="heart" />
                                            </div>
                                            <div className="flex absolute top-[54px] right-3">
                                                <img src={`/src/assets/logo/${item.view}`} alt="" />
                                            </div>
                                        </div>
                                        <div className="pt-4 gap-2">
                                            <h1 className='font-p font-medium text-base max-w-[200px] truncate capitalize'>{item.name}</h1>
                                            <div className="flex gap-2 items-center ">
                                                <h1 className='text-red_1-red1  font-p font-medium text-base'>{item.price}</h1>
                                                <img src={`/src/assets/logo/${item.ratting}`} alt="rating" />
                                                <h4 className='font-p text-sm font-semibold text-[#000000] opacity-[50%]'>{item.review}</h4>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                    <Button Children={"View All Products"} />
                </div>
            </section>
        </>
    )
}

export default ExploreProducts
