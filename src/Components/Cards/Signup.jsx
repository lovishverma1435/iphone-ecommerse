import React from 'react'
import signupimg from '../../assets/images/SideImage.png'
import google from '../../assets/logo/Google.svg'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
const Signup = ({loginclass,googleclass,buttontitle,inputclass,headingtitle,hedding,DivForButton,varient}) => {
  return (
    <>
     <section>
      <div className="flex flex-col max-w-[1305px] w-full lg:flex-row lg:items-center gap-[160px] pt-12 lg:pt-[60px]  lg:pr-[135px] pb-20 lg:pb-[140px]  lg-pl-0 justify-center lg:justify-center lg:m-auto">
        <div className="max-w-[805px]  lg:m-0 m-auto " >
          <img src={signupimg} alt="image" />
        </div>
        <div className="flex flex-col gap-11 max-w-[371px] w-full m-auto lg:m-0 ">
          <div className="flex flex-col gap-6 ">
            <h1 className='capitalize truncate font-i font-medium text-xl md:text-3xl lg:text-4xl cursor-pointer'>{hedding}</h1>
            <h6 className='capitalize truncate font-p font-normal text-base cursor-pointer'>{headingtitle}</h6>
          </div>
          <div className="flex flex-col gap-10">
            <input className={`${inputclass} border-b-2 opacity-40 border-opacity-50 w-[370px] capitalize pb-2 font-normal text-base font-p border-black_1-black text-red_1-red1 outline-none`} type="text" placeholder='Name' />
            <input className='border-b-2 opacity-40 border-opacity-50 w-[370px] capitalize pb-2 font-normal text-base font-p border-black_1-black text-red_1-red1 outline-none' type="text" placeholder='Email or Phone Number' />
            <input className='border-b-2 opacity-40 border-opacity-50 w-[370px] capitalize pb-2 font-normal text-base font-p border-black_1-black text-red_1-red1 outline-none' type="text" placeholder='Password' />
          </div>
          <div className="flex flex-col gap-4">
            {
                varient === "solid" ?(<>
                <Button Children={buttontitle} className={DivForButton}/>
                </>):(<>
                <div className="flex justify-between">
                    <Button Children={buttontitle} className={DivForButton}/>
                     <button className='font-p text-base text-red_1-red1 font-normal' >Forget Password?</button></div>
                </>)
            }
           
            <button className={`${googleclass} flex items-center justify-center border py-4 px-[86px] rounded gap-3 font-p font-normal text-base border-black_1-black border-opacity-40`}> <img src={google} alt="" />Sign up with Google</button>
            <div className={`${loginclass} flex items-center justify-center gap-4`}>
              <h4 className='font-p font-normal text-base opacity-70'>Already have account?</h4>
              
              <Link to={"/login"} >
              <button className='font-p text-base font-medium border-b border-black_1-black border-opacity-50 opacity-70'>Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Signup
