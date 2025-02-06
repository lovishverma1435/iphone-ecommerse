import React from 'react'
import abouticon from '../json/about.json'
import { NavLink } from 'react-router-dom'
import aboutimg from '../json/aboutimage.json'
import aboutlogo from '../json/newarrivalfooter.json'
const About = () => {
  return (
    <>
      <section>
        <div className="flex items-center py-[143px] justify-center gap-[75px]">
          <div className="flex flex-col gap-10">
            <h1 className='font-i font-semibold text-[54px] leading-[64px] tracking-[0.06em]'>Our Story</h1>
            <div className="w-[505px] flex flex-col gap-6">
              <h6 className='font-p font-normal text-base'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </h6>
              <h6 className='font-p font-normal text-base'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</h6>
            </div>
          </div>
          <div className="">
            <img src={`src/assets/images/${"aboutimg.png"}`} alt="image" />
          </div>
        </div>
        <div className="container">
          <div className="flex justify-between mb-[140px] ">
            {
              abouticon.map((item, index) => (
                <div key={index}>
                  <NavLink to={item.to}>
                    <div className="flex flex-col items-center text-center justify-center rounded w-[270px] border border-opacity-30 py-[30px] pl-[50px] pr-[51px] gap-6 group hover:bg-red_1-red1 transition-all duration-300 ">
                      <img className='group-hover:hidden ' src={`src/assets/logo/${item.image}`} alt="" />
                      <img className='group-hover:block  hidden ' src={`src/assets/logo/${item.image1}`} alt="" />
                      <div className="flex flex-col gap-3 w-[215px]">
                        <h2 className='font-i font-bold text-[32px] leading-[30px] tracking-[0.04em]  group-hover:text-white_1-white '>{item.title}</h2>
                        <h6 className='font-p font-normal text-base group-hover:text-white_1-white '>{item.other}</h6>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))
            }
          </div>
          <div className="flex gap-10 rounded pb-[196px]">
            {
              aboutimg.map((item,index) => (
                <div key={index}>
                  <NavLink to={item.to}>
                    <div className="flex flex-col ">
                      <div className="pb-8">
                      <img className='bg-gray_2-gray py-[39px] px-[67px]' src={`src/assets/images/${item.image}`} alt="image" />
                      </div>
                      <div className="flex flex-col gap-2">
                      <h2 className='font-p font-medium text-[32px] tracking-[0.04em] leading-[30px]'>{item.name}</h2>
                      <h6 className='font-p font-normal text-base'>{item.work}</h6>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <img src={`src/assets/logo/${item.twitter}`} alt="image" />
                        <img src={`src/assets/logo/${item.insta}`} alt="image" />
                        <img src={`src/assets/logo/${item.linkedin}`} alt="image" />
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))
            }
          </div>
          <div className=" flex items-center justify-evenly mb-[140px]">
                    {
                        aboutlogo.map((item, index) => (
                            <div key={index + Date.now() + item}>
                                <NavLink to={item.to}>
                                    <div className="flex flex-col items-center justify-center">
                                        <img src={`src/assets/logo/${item.image}`} alt="image" />
                                        <h2 className='font-p font-semibold text-xl pt-5 pb-2'>{item.title}</h2>
                                        <h6 className='font-p font-normal text-sm'>{item.detail}</h6>
                                    </div>

                                </NavLink>
                            </div>
                        ))}

                </div>
        </div>
      </section>
    </>
  )
}

export default About
