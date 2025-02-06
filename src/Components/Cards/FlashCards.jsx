import React from 'react'
import { Link } from 'react-router-dom'

const FlashCards = ({ image, discount, heart, view, name, offprice, price, rating, viewer, RedWithDisscount }) => {
    return (
        <>
            <div className="bg-[#F5F5F5] group rounded-md relative">
                <img className='relative hover:scale-90   transition-all duration-300 py-[35px] px-10' src={`/src/assets/images/${image}`} alt="image" />
                <h2 className="flex items-center justify-center h-0 transition-all duration-300 bg-black w-[270px] rounded-b-md absolute bottom-0 font-p font-medium  text-base text-white truncate capitalize group-hover:h-[41px] ">Add To Cart</h2>
                { discount !== undefined &&<div className={`flex absolute top-3 left-3  bg-red_1-red1 items-center justify-center rounded-md ${RedWithDisscount}`}>            
                        <h4 className='text-white_1-white font-normal font-p text-xs py-1 px-3'>{discount}</h4>
                </div>}
                <div className="flex items-center justify-center absolute top-3 right-3 w-[34px] h-[34px] rounded-[50%] bg-white_1-white">
                <Link to={"/wishlistprod"}>
                    <img className='w-6 h-6' src={`/src/assets/logo/${heart}`} alt="heart" />
                    </Link>

                </div>
                <div className="flex items-center justify-center absolute top-[54px] right-3 w-[34px] h-[34px] rounded-[50%] bg-white_1-white">
                    <img className='w-6 h-6' src={`/src/assets/logo/${view}`} alt="" />
                </div>
            </div>
            <div className="pt-4 ">
                <h1 className='font-p font-medium text-base max-w-[200px] truncate capitalize'>{name}</h1>
                <div className="flex gap-2 py-2">
                    <h1 className='text-red_1-red1 font-p font-medium text-base'>{offprice}</h1>
                    <h1 className='line-through opacity-50 font-p font-medium text-base'>{price}</h1>
                </div>
                <div className="flex gap-2">
                    <img src={`/src/assets/logo/${rating}`} alt="rating" />
                    <h4 className='font-p text-sm font-semibold text-[#000000] opacity-[50%]'>{viewer}</h4>
                </div>
            </div>
        </>
    )
}

export default FlashCards
