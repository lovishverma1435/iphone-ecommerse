import React from 'react'
import signupimg from '../assets/images/SideImage.png'
import google from '../assets/logo/Google.svg'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <section>
      <div className="flex items-center gap-[160px] pt-[60px] pr-[135px] pb-[140px]">
        <div className="">
          <img src={signupimg} alt="image" />
        </div>
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-6">
            <h1 className='capitalize truncate font-i font-medium text-4xl cursor-pointer'>Create an account</h1>
            <h6 className='capitalize truncate font-p font-normal text-base cursor-pointer'>Enter your details below</h6>
          </div>
          <div className="flex flex-col gap-10">
            <input className='border-b-2 opacity-40 border-opacity-50 w-[370px] capitalize pb-2 font-normal text-base font-p border-black_1-black text-red_1-red1' type="text" placeholder='Name' />
            <input className='border-b-2 opacity-40 border-opacity-50 w-[370px] capitalize pb-2 font-normal text-base font-p border-black_1-black text-red_1-red1' type="text" placeholder='Email or Phone Number' />
            <input className='border-b-2 opacity-40 border-opacity-50 w-[370px] capitalize pb-2 font-normal text-base font-p border-black_1-black text-red_1-red1' type="text" placeholder='Password' />
          </div>
          <div className="flex flex-col gap-4">
            <button className='inline-block bg-red_1-red1 py-4 px-[122px] rounded w-[371px] text-white_1-white font-p font-medium text-base'>Create Account</button>
            <button className='flex items-center justify-center border py-4 px-[86px] rounded gap-4 font-p font-normal text-base border-black_1-black border-opacity-40'> <img src={google} alt="" />Sign up with Google</button>
            <div className="flex items-center justify-center gap-4">
              <h4 className='font-p font-normal text-base opacity-70'>Already have account?</h4>
              
              <Link to={"/login"} >
              <button className='font-p text-base font-medium border-b border-black_1-black border-opacity-50 opacity-70'>Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
