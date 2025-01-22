import React from 'react'

const FlashCards = ({image,discount,heart,view,name,offprice,price,rating,viewer}) => {
    return (
        <>
            <div className="bg-[#F5F5F5] group rounded-md relative">
                <img className='relative hover:scale-90   transition-all duration-300 py-[35px] px-10' src={`/src/assets/${image}`} alt="image" />
                <h2 className="flex items-center justify-center  h-0 transition-all   duration-300 bg-black w-[270px] rounded-b-md absolute bottom-0 font-p font-medium  text-base text-white  group-hover:h-[41px] ">Add To Cart</h2>
                <div className="flex absolute top-3 left-3 w-[55px] h-[26px] bg-red_1-red1 items-center justify-center rounded-md">
                    <h4 className='text-[#FAFAFA] font-normal font-p text-xs'>{discount}</h4>
                </div>
                <div className="flex absolute top-3 right-3">
                    <img src={`/src/assets/${heart}`} alt="heart" />
                </div>
                <div className="flex absolute top-[54px] right-3">
                    <img src={`/src/assets/${view}`} alt="" />
                </div>
            </div>
            <div className="pt-4">
                <h1 className='font-p font-medium text-base'>{name}</h1>
                <div className="flex gap-2 py-2">
                    <h1 className='text-red_1-red1 font-p font-medium text-base'>{offprice}</h1>
                    <h1 className='line-through opacity-50 font-p font-medium text-base'>{price}</h1>
                </div>
                <div className="flex gap-2">
                    <img src={`/src/assets/${rating}`} alt="rating" />
                    <h4 className='font-p text-sm font-semibold text-[#000000] opacity-[50%]'>{viewer}</h4>
                </div>
            </div>
        </>
    )
}

export default FlashCards
