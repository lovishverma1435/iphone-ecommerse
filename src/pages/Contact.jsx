import React from 'react'
import Input from '../Components/ui/Input'
import Button from '../Components/ui/Button'

function Contact() {
  return (
    <>
      <section>
        <div className='container'>
          <div className="flex flex-col lg:flex-row pt-20 lg:pt-[181px] pb-[140px] gap-[30px]">
            <div className="w-[340px] shadow-Customnew pt-10 px-[35px] pb-[51px] ">
              <div className="w-[262px] flex flex-col gap-6">
                <div className="flex gap-4 items-center">
                  <img src={`src/assets/logo/${"iconsphone.svg"}`} alt="" />
                  <h2 className='font-p font-medium text-base'>Call To Us</h2>
                </div>
                <div className="flex flex-col gap-4 border-b border-opacity-50 border-black_1-black pb-8">
                  <h6 className='font-p font-normal text-sm'>We are available 24/7, 7 days a week.</h6>
                  <h6 className='font-p font-normal text-sm'>Phone: +8801611112222</h6>
                </div>
              </div>
              <div className="w-[262px] flex flex-col gap-6 pt-8">
                <div className="flex gap-4 items-center">
                  <img src={`src/assets/logo/${"iconsmail.svg"}`} alt="" />
                  <h2 className='font-p font-medium text-base'>Write To US</h2>
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className='font-p font-normal text-sm'>Fill out our form and we will contact you within 24 hours.</h6>
                  <h6 className='font-p font-normal text-sm'>Emails: customer@exclusive.com</h6>
                  <h6 className='font-p font-normal text-sm'>Emails: support@exclusive.com</h6>
                </div>
              </div>
            </div>
            <div className="max-w-[800px] w-full shadow-Customnew py-10 px-8">
              <div className="flex flex-col gap-8 justify-between">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                  <Input id={"type6"} type={"text"} placeholder={"Your Name"} />
                  <Input id={"type7"} type={"email"} placeholder={"Your Email"} />
                  <Input id={"type8"} type={"number"} placeholder={"Your Phone"} />
                </div>
                <div className="">
                  <div className="">
                    <textarea
                      className="bg-[#F5F5F5] p-[13px_14px] max-w-[737px] w-full  outline-none h-[207px]"
                      rows="3"
                      placeholder="Your Massage"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-end">
                <Button Children={"Send Massage"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
