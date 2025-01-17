import React from 'react'
import menuLinks from "../json/menuLink.json"
import { NavLink } from 'react-router-dom'
const Header = () => {


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
            <h4 className=' text-white hover:text-blue-800 transition-all duration-200 flex items-center justify-end w-full group cursor-pointer font-p pr-1'>English
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" className='fill-white  transition-all duration-200 group-hover:fill-blue-800' />
              </svg>
            </h4>
          </div>
        </div>

      </header>
      <header className='pt-10 pb-4 border-b-2'>
        <div className="container">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center justify-between">
            <h1 className='text-[24px] font-bold cursor-pointer font-i'>Exclusive</h1>
            <ul className='flex items-center gap-9 menuLinks font-p'>
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

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"
                  className='cursor-pointer'>
                  <path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" strokeWidth="1.5" strokeLinecap="round" className='group-hover:stroke-red-400 stroke-black' />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='hover:-translate-y-1 transition-all duration-300'>
                  <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  className='hover:-translate-y-1 transition-all duration-300'>
                  <path d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.25 3.75H5.25L7.5 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
                  className='hover:-translate-y-1 transition-all duration-300'>
                  <rect width="32" height="32" rx="16" fill="gray" />
                  <path d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </header>
    </>

  )
}

export default Header
