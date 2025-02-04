import React from 'react'
const Wishlist = ({ image, discount, heading, price, offprice, deleted, rating, viewer,view,topnew}) => {
    return (
        <>
            <div className="bg-gray_2-gray rounded relative w-[270px] group">
                <img className='relative py-[15px] px-10 hover:scale-90 transition-all duration-300 ' src={`/src/assets/images/${image}`} alt="image" />
                <h2 className='absolute flex items-center justify-center font-medium bottom-0  text-base text-white truncate capitalize transition-all duration-300 font-p rounded-br rounded-bl bg-black w-[270px] rounded-b-md h-0 group-hover:h-[41px]'>Add To Cart</h2>
                {discount &&
                    <div className={`flex absolute top-3 left-3  bg-red_1-red1 items-center justify-center rounded-md`}>
                    <h6 className='text-white_1-white font-normal font-p text-xs py-1 px-3'>{discount}</h6>
                    </div>
                }
                <img className='absolute top-3 right-3 ' src={`/src/assets/logo/${deleted}`} alt="" />
                {view &&

                <div className="flex items-center justify-center absolute top-3 right-3 w-[34px] h-[34px] rounded-[50%] bg-white_1-white">
                    <img className='w-6 h-6' src={`/src/assets/logo/${view}`} alt="" />
                </div>
                }
                {topnew  &&
                    <h4 className='bg-green_1-green rounded-md absolute top-3 left-3 text-white_1-white py-1 px-3  font-normal font-p text-xs '>{topnew}</h4>
                }
            </div>
            <div className="flex flex-col pt-4">
                <h1 className='text-black_1-black font-p text-base font-medium'>{heading}</h1>
                <div className="flex gap-3">
                    <h2 className='text-red_1-red1 font-p font-medium text-base'>{price}</h2>
                    <h2 className='text-black_1-black font-p font-medium text-base opacity-50 line-through'>{offprice}</h2>
                </div>
                {rating &&

                <div className="flex">
                    <img src={`/src/assets/logo/${rating}`} alt="rating" />
                    <h4 className='font-p text-sm font-semibold text-[#000000] opacity-[50%]'>{viewer}</h4>
                </div>
                }
            </div>
        </>
    )
}

export default Wishlist
