import React from 'react'
import footer from '../../json/Footer.json'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
  const LinkNames = footer[0].title.map((link) => link.name)
  const LinkNames1 = footer[1].title.map((link) => link.name)
  const LinkNames2 = footer[2].title.map((link) => link.name)


  return (
    <>
      <footer>
        <section className=' bg-black text-white pt-[80px] '>
          <div className="container flex flex-col gap-8 sm:flex justify-between pb-[60px]">
            <div className="flex flex-col gap-[16px] max-w-[217px]">
              <div className="  flex flex-col gap-[24px]">
                <h1 className='font-customfont font-bold text-2xl leading-6 tracking-[0.03em]'>Exclusive</h1>
                <h2 className='text-[#FAFAFA] font-customfont12 font-medium text-xl leading-7'>Subscribe</h2>
                <h3 className='text-[#FAFAFA] font-customfont12 font-normal text-base leading-6'>Get 10% off your first order</h3>
              </div>
              <div className="max-w-[217px] gap-[32px]  flex border border-white rounded p-[12px_15px_12px_16px]">
                <input className='w-[130px] bg-black outline-none text-white_1-white font-p opacity-40 font-normal text-base leading-6' type="text" placeholder='Enter your email' />
                <img src="/src/assets/logo/icon-send.svg" alt="img1" />
              </div>
            </div>
            <div className="flex flex-col max-w-[175px] ">
              <div className="">
                <h4 className='pb-6 font-p font-medium text-xl'>Support</h4>
              </div>
              <div className="flex flex-col gap-4">
                {
                  LinkNames.map((item, index) => (
                    <div key={index + Date.now() + item}>
                      <NavLink to={item.to}>
                        <div className="font-normal font-p text-base capitalize truncate">{item}</div>
                      </NavLink>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="">
              <div className="">
                <h4 className='pb-6 font-p font-medium text-xl' >Account</h4>
              </div>
              <div className="flex flex-col gap-4">
                {
                  LinkNames1.map((item, index) => (
                    <div key={index + Date.now() + item}>
                      <NavLink to={item.to}>
                        <div className="font-normal font-p text-base capitalize truncate">{item}</div>
                      </NavLink>
                    </div>
                  ))
                }
              </div>

            </div>
            <div className="">
              <div className="">
                <h4 className='pb-6 font-p font-medium text-xl'>Quick Links</h4>
              </div>
              <div className="flex flex-col gap-4">
                {
                  LinkNames2.map((item, index) => (
                    <div key={index + Date.now() + item}>
                      <NavLink to={item.to}>
                       <div className="font-normal font-p text-base capitalize truncate">{item}</div>
                      </NavLink>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h1 className='font-customfont12 font-medium text-xl leading-7'>Download App</h1>
              <div className="flex flex-col gap-[8px] ">
                <h2 className=' text-[#FAFAFA] opacity-[70%] font-customfont12 font-medium text-xs leading-[18px]'>Save $3 with App New User Only</h2>
                <div className="flex gap-[8px] items-center">
                  <div className="">
                    <img src="/src/assets/logo/QrCode.svg" alt="qr" />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="p-[5px_3px_5px_3px]">
                      <img className=' w-[104px] h-[30px]' src="/src/assets/logo/playstore.svg" alt="playstore" /> </div>
                    <div className="p-[3px]">  <img className='w-[104px] h-[34px]' src="/src/assets/logo/GooglePlay.svg" alt="appstore" />
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex items-center gap-[24px]">
                <img src="/src/assets/logo/Facebook.svg" alt="Facebook" />
                <img className='mt-[2px] w-[18px] h-[18px]' src="/src/assets/logo/Twitter.svg" alt="x" />
                <img src="/src/assets/logo/instagram.svg" alt="instagram" />
                <img src="/src/assets/logo/Linkedin.svg" alt="Linkedin" />
              </div>
            </div>
          </div>
          <div className="border-t pt-4 flex items-center justify-center gap-[6px] pb-6 opacity-40 border-white_1-white">
            <div className="pt-[2px] pb-[2px] opacity-60">
            <img src="/src/assets/logo/copyright.svg" alt="iamge" />
            </div>
            <h6 className='opacity-60 font-p text-base font-normal'>Copyright Rimel 2022. All right reserved</h6>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
