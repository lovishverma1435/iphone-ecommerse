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
  const [click, setclick] = useState(false)

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
          <h1 className='flex justify-start lg:text-[24px] font-bold cursor-pointer font-i'>Exclusive</h1>
          <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-between max-w-[892px] w-full gap-4 lg:gap-0">
            <ul className="flex flex-row  sm:flex-row gap-4 lg:w-[367px] menuLinks font-p items-center">
              {menuLinks.map((item, index) => (
                <li key={index} className="inline-block">
                  <NavLink to={item.to} className="hover:text-red-500 transition-all">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center bg-[#F5F5F5] p-2 gap-2 text-sm text-black opacity-50 hover:text-red-500 transition-all duration-200 group ">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="outline-none bg-[#F5F5F5] p-1 w-48"
              />
              <img className="cursor-pointer" src={image} alt="search" />
            </div>

            <div className="flex items-center gap-4 cursor-pointer">
              <Link to="/wishlist" className="relative">
                <img src={image1} alt="wishlist" />
                <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">
                  {wishListJson.length}
                </span>
              </Link>

              <Link to="/cart" className="relative">
                <img src={image2} alt="cart" />
                <span className="absolute -top-2 -right-1 w-4 h-4 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">
                  {CartListJson.length}
                </span>
              </Link>

              <button onClick={() => setRotate(!rotate)} className="relative group transition-all duration-200">
                <img src={rotate ? "/src/assets/logo/userred.svg" : "/src/assets/logo/userprofile.svg"} alt="profile" />
                {rotate && (
                  <ul className="absolute right-0 mt-2 py-2 px-4 bg-black bg-opacity-35 text-white rounded-md w-56 z-10 transition-all duration-200 ease-in">
                    <Link to="/account">
                      <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
                        <img src={image4} alt="account" />Manage My Account
                      </li>
                    </Link>
                    <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
                      <img src={bagimg} alt="orders" />My Order
                    </li>
                    <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
                      <img src={cancelimg} alt="cancellations" />My Cancellations
                    </li>
                    <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
                      <img src={reviewimg} alt="reviews" />My Reviews
                    </li>
                    <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
                      <img src={logoutimg} alt="logout" />Log Out
                    </li>
                  </ul>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
