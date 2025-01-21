import React, { useState } from 'react'
import menuLinks from "../json/menuLink.json"
import { NavLink } from 'react-router-dom'
import image from '../../assets/images/Vector.svg'
import image1 from '../../assets/images/Wishlist.svg'
import image2 from '../../assets/images/cart1.svg'
import image3 from '../../assets/images/userprofile.svg'
import image4 from '../../assets/userwhite.svg'
import bagimg from '../../assets/images/icon-mallbag.svg'
import cancelimg from '../../assets/images/icon-cancel.svg'
import reviewimg from '../../assets/images/icon-Reviews.svg'
import logoutimg from '../../assets/images/icon-logout.svg'
const Header = () => {
  const [rotate, setRotate] = useState(false)

  return (
    <>
      <header className='bg-black'>
        <div className='container'>
          <div className=' grid grid-cols-[1fr_auto_1fr] items-center justify-center w-full'>
            <div className=""></div>
            <div className='flex items-center'>
              <h1 className=' text-base text-white  justify-center text-center py-2 font-p'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
              <h5 className=' text-white font-semibold underline pl-2 font-p'>Shop now</h5>
            </div>
            <h4 className=' text-white hover:text-red_1-red1 transition-all duration-200 flex items-center justify-end w-full group cursor-pointer font-p pr-1'>English
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" className='fill-white  transition-all duration-200 group-hover:fill-red_1-red1' />
              </svg>
            </h4>
          </div>
        </div>

      </header>
      <header className='pt-10 pb-4 border-b-2'>
        <div className="container">
          <div className="grid grid-cols-[1fr_1fr_1fr] items-center justify-between">
            <h1 className='text-[24px] font-bold cursor-pointer font-i'>Exclusive</h1>
            <ul className='flex items-center gap-9 menuLinks font-p '>
              {
                menuLinks.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.to}>{item.name}</NavLink>
                  </li>

                ))
              }
            </ul>
            <div className="flex items-center justify-end gap-[24px]">
              <div className="flex items-center justify-center bg-[#F5F5F5]  p-[7px_12px] gap-[34px] text-sm text-[#000000] opacity-50 hover:text-red_1-red1 transition-all duration-200 group">
                <h5>What are you looking for?</h5>
                <img className='group-hover:text-red_1-red1 cursor-pointer' src={image} />
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <img src={image1} />
                <img src={image2} />
                <button onClick={() => setRotate(!rotate)} className={`transition-all duration-200 relative group${rotate && ""}`}>
                  {
                    !rotate && <img src={"/src/assets/images/userprofile.svg"} />
                  }
                  {
                    rotate && <img src={"/src/assets/userred.svg"} alt="" />
                  }

                  {rotate && <ul className='absolute flex flex-col gap-[13px] py-2 px-4 backdrop-blur-3xl text-white z-10 transition-all duration-200 ease-in right-0 rounded-md w-[224px]'>
                    <li className='bar-popup font-p'><img src={image4} alt="img" />Manage My Account</li>
                    <li className='bar-popup font-p'><img src={bagimg} alt="img" />My Order</li>
                    <li className='bar-popup font-p'><img src={cancelimg} alt="img" />My cancellations</li>
                    <li className='bar-popup font-p'><img src={reviewimg} alt="img" />My reviews</li>
                    <li className='bar-popup font-p'><img src={logoutimg} alt="img" />LogOut</li>
                  </ul>}
                </button>
              </div>
            </div>
          </div>

        </div>
      </header>
    </>

  )
}

export default Header
