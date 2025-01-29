import React, { Fragment, useState } from 'react'

const Explore = ({ image, wishlist, view, name, price, ratting, review, colgroup, topnew }) => {
    const [isborder, setIsborder] = useState(0);

    return (
        <>


            <div className="bg-[#F5F5F5] group rounded-md relative w-[270px] ">
                <img className='relative  hover:scale-90 py-[35px] px-10  transition-all duration-300 ' src={`/src/assets/images/${image}`} alt="image" />
                <h2 className="flex items-center justify-center h-0 transition-all duration-300 bg-black w-[270px] rounded-b-md absolute bottom-0 font-p font-medium  text-base text-white truncate capitalize group-hover:h-[41px] ">Add To Cart</h2>
                <div className="flex items-center justify-center absolute top-3 right-3 bg-white_1-white w-[34px] h-[34px] rounded-[50%]">
                    <img className='w-6 h-6' src={`/src/assets/logo/${wishlist}`} alt="heart" />
                </div>
                <div className="flex items-center justify-center absolute top-[54px] right-3 bg-white_1-white w-[34px] h-[34px] rounded-[50%]">
                    <img className='w-6 h-6' src={`/src/assets/logo/${view}`} alt="" />
                </div>
                {topnew !== undefined &&
                    <h4 className='bg-green_1-green rounded-md absolute top-3 left-3 text-white_1-white py-1 px-3  font-normal font-p text-xs '>{topnew}</h4>
                }
            </div>
            <div className="pt-4 gap-2">
                <h1 className='font-p font-medium text-base max-w-[200px] truncate capitalize'>{name}</h1>
                <div className="flex gap-2 items-center ">
                    <h1 className='text-red_1-red1  font-p font-medium text-base'>{price}</h1>
                    <img src={`/src/assets/logo/${ratting}`} alt="rating" />
                    <h4 className='font-p text-sm font-semibold text-[#000000] opacity-[50%]'>{review}</h4>
                </div>
            </div>
            <div className="flex gap-1 pt-2">
                {colgroup.map((item, index) => (
                    <Fragment key={index}>
                        <div
                            className={`flex items-center justify-center rounded-full border-[2px] ${isborder === index ? " border-black" : " border-transparent "
                                }`}>
                            <button
                                onClick={() => setIsborder(index)}
                                className={`w-4 h-4 m-[2px] rounded-full bg-[${item}] `}
                            ></button>
                        </div>
                    </Fragment>
                ))}
            </div>
        </>
    )
}

export default Explore
