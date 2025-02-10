import React, { useState } from 'react'
import menuLinks from "../../json/menuLink.json"
import { Link, NavLink } from 'react-router-dom'
import image from '../../assets/logo/Vector.svg'
import image1 from '../../assets/logo/Wishlist.svg'
import image2 from '../../assets/logo/cart1.svg'
import image4 from '../../assets/logo/userwhite.svg'
import bagimg from '../../assets/logo/icon-mallbag.svg'
import cancelimg from '../../assets/logo/icon-cancel.svg'
import reviewimg from '../../assets/logo/icon-Reviews.svg'
import logoutimg from '../../assets/logo/icon-logout.svg'
import wishListJson from "../../json/wishlist.json"
import CartListJson from '../../json/shoppingcart.json'
const Header = () => {
  const [rotate, setRotate] = useState(false)

  return (
    <>
      <header className='bg-black' >
        <section className='container '>
          <div className=''>
            <div className=' grid grid-cols-[1fr_auto_1fr] items-center justify-center w-full'>
              <div className=""></div>
              <div className='flex items-center'>
                <h1 className='text-xs lg:text-base text-white  justify-center text-center py-2 font-p sm:text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
                <Link to={"/error"}>
                  <button className='hidden lg:text-white font-semibold underline pl-2 font-p'>Shop now</button>
                </Link>
              </div>
              <h4 className='hidden lg: text-white hover:text-red_1-red1 transition-all duration-200 lg:flex items-center justify-end w-full group cursor-pointer font-p pr-1 '>English
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" className='fill-white  transition-all duration-200 group-hover:fill-red_1-red1' />
                </svg>
              </h4>
            </div>
          </div>
        </section>
      </header>
      <header className='pt-10 pb-4 border-b-2'>
        <div className="container flex lg:flex-row flex-col gap-6 lg:gap-0 items-center justify-between">
            <h1 className='text-[24px] font-bold cursor-pointer font-i'>Exclusive</h1>
            
          <div className="flex gap-6 sm:flex-row lg:gap-0 lg:flex-row flex-col items-center  max-w-[892px] w-full justify-between">
            <ul className=' flex flex-col sm:flex-row sm:gap-4 lg:flex lg:flex-row items-center justify-between menuLinks font-p lg:w-[367px] '>
              {
                menuLinks.map((item, index) => (
                  <li className='inline-block' key={index}>
                    <NavLink to={item.to}>{item.name}</NavLink>
                  </li>
                ))
              }
            </ul>
            <div className="hidden lg:flex items-center justify-center bg-[#F5F5F5]  p-[7px_12px] gap-[34px] text-sm text-[#000000] opacity-50 hover:text-red_1-red1 transition-all duration-200 group ">
              <input type='text' placeholder='What are you looking for?' className='outline-none bg-[#F5F5F5]' />
              <img className='group-hover:text-red_1-red1 cursor-pointer' src={image} />
            </div>
            <div className="flex items-center justify-center gap-4 cursor-pointer">
            <img className='group-hover:text-red_1-red1 cursor-pointer' src={image} /> 
              <Link to={"/wishlist"} className='relative'>
                <img src={image1} />
                <span className='absolute flex items-center justify-center -top-1 -right-1 w-4 h-4 text-xs leading-[18px] font-normal font-p  text-center bg-red_1-red1 text-white rounded-full'>{wishListJson?.length}</span>
              </Link>
              <Link to={"/cart"} className='relative'>
                <img src={image2} />
                <span className='absolute flex items-center justify-center -top-2 -right-1 w-4 h-4 text-xs font-normal font-p text-center bg-red_1-red1 text-white_1-white rounded-full'>{CartListJson?.length}</span>
              </Link>
              <button onClick={() => setRotate(!rotate)} className={`transition-all duration-200 relative group${rotate && ""}`}>
                {
                  !rotate && <img src={"/src/assets/logo/userprofile.svg"} />
                }
                {
                  rotate && <img src={"/src/assets/logo/userred.svg"} alt="" />
                }
                {
                  rotate &&
                  <ul className='absolute flex flex-col gap-[13px] py-2 px-4 bg-black_1-black bg-opacity-35 text-white z-10 transition-all duration-200 ease-in right-0 rounded-md w-[224px] '>
                    <Link to={"/account"}>
                      <li className='bar-popup font-p'><img src={image4} alt="img" />Manage My Account</li>
                    </Link>
                    <li className='bar-popup font-p'><img src={bagimg} alt="img" />My Order</li>
                    <li className='bar-popup font-p'><img src={cancelimg} alt="img" />My cancellations</li>
                    <li className='bar-popup font-p'><img src={reviewimg} alt="img" />My reviews</li>
                    <li className='bar-popup font-p'><img src={logoutimg} alt="img" />LogOut</li>
                  </ul>
                }
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
