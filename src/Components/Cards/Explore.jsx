import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

const Explore = ({ image, wishlist, view, name, price, ratting, review, topnew, colors }) => {
    const [isborder, setIsborder] = useState(0);

    return (
        <>
            <div className="bg-[#F5F5F5] group rounded-md relative max-w-[270px] w-full py-5 px-6 lg:py-[35px] lg:px-10 ">
                <img className='relative  hover:scale-90   transition-all duration-300 ' src={`/src/assets/images/${image}`} alt="image" />
                <h2 className="flex items-center justify-center h-0 transition-all duration-300 bg-black w-[270px] rounded-b-md absolute bottom-0 font-p font-medium  text-base text-white truncate capitalize group-hover:h-[41px] ">Add To Cart</h2>
                <div className="flex items-center justify-center absolute top-1 right-1 sm:top-3 sm:right-3 bg-white_1-white w-6 sm:w-[34px] h-6 sm:h-[34px] rounded-[50%]">
                    <Link to={"/wishlistprod"}>
                        <img className='w-4 h-4 sm:w-6 sm:h-6' src={`/src/assets/logo/${wishlist}`} alt="heart" />
                    </Link>
                </div>
                <div className="flex items-center justify-center absolute sm:top-[54px] top-8 right-1  sm:right-3 bg-white_1-white w-6 h-6 sm:w-[34px] sm:h-[34px] rounded-[50%]">
                    <img className='w-4 h-4 sm:w-6 sm:h-6' src={`/src/assets/logo/${view}`} alt="" />
                </div>
                {topnew !== undefined &&
                    <h4 className='bg-green_1-green rounded-md absolute top-2 left-2 sm:top-3 sm:left-3 text-white_1-white py-1 px-2 sm:px-3  font-normal font-p text-xs '>{topnew}</h4>
                }
            </div>
            <div className="pt-4 gap-2">
                <h1 className='font-p font-medium text-xs lg:text-base max-w-[200px] w-full truncate capitalize'>{name}</h1>
                <div className="flex gap-2 items-center ">
                    <h1 className='text-red_1-red1  font-p font-medium text-xs lg:text-base'>{price}</h1>
                    <img src={`/src/assets/logo/${ratting}`} alt="rating" />
                    <h4 className='hidden sm:block font-p text-sm font-semibold text-black opacity-[50%]'>{review}</h4>
                </div>
            </div>
            {
                colors &&
                <div className="flex gap-1 pt-2">
                    {colors.map((item, index) => (
                        <Fragment key={index}>
                            <div
                                className={`flex items-center w-5 h-5 justify-center  rounded-full border-[2px] ${isborder === index ? " border-black" : " border-transparent "
                                    }  `}>
                                <button
                                    style={{ background: item }}
                                    onClick={() => setIsborder(index)}
                                    className={`${isborder === index ? "w-3 h-3" : "h-4 w-4 "}  rounded-full bg-[${item}]`}
                                ></button>
                            </div>
                        </Fragment>
                    ))}
                </div>
            }

        </>
    )
}

export default Explore
