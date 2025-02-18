import React from 'react'
import Button from '../Components/ui/Button'
import loginimg from '../assets/images/SideImage.png'
import Signup from '../Components/Cards/Signup'


const LoginFile = () => {
  return (
    <>
    <Signup inputclass={"hidden"} loginclass={"hidden"} googleclass={"hidden"} buttontitle={"Log In"} hedding={"Log in to Exclusive"} headingtitle={"Enter your details below"}/>
       {/* <div className="flex items-center gap-[160px] pt-[60px] pr-[135px] pb-[140px]">
        <div className="">
          <img src={loginimg} alt="image" />
        </div>
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-6">
            <h1 className='capitalize truncate font-i font-medium text-4xl cursor-pointer'>Create an account</h1>
            <h6 className='capitalize truncate font-p font-normal text-base cursor-pointer'>Enter your details below</h6>
          </div>
          <div className="flex flex-col gap-10">
            <input className='border-b-2 opacity-40 border-opacity-50 w-[370px] capitalize pb-2 font-normal text-base font-p border-black_1-black text-red_1-red1' type="text" placeholder='Email or Phone Number' />
            <input className='border-b-2 opacity-40 border-opacity-50 w-[370px] capitalize pb-2 font-normal text-base font-p border-black_1-black text-red_1-red1' type="text" placeholder='Password' />
          </div>
          <div className="flex justify-between items-center">
            <Button Children={"Log In"}/>
            <h6 className='text-base font-normal font-p text-red_1-red1'>Forget Password?</h6>
           
          </div>
        </div>
      </div> */}
    </>
  )
}

export default LoginFile
