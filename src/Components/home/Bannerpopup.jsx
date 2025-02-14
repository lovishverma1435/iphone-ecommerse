import React, { Fragment, useState } from 'react'
import Dropdown from '../DropDown'
import { NavLink } from 'react-router-dom'
import categoryLink from '../../json/categories.json'
import arrow from '../../assets/logo/arrow.svg'
const data = categoryLink.map((item, index) => item.categorydata.woman.tags);
const mensdata = categoryLink.map((item, index) => item.categorydata.man.tags);

const Bannerpopup = () => {
    const LinkNames = categoryLink[0].links.map((link) => link.name)
    const [popup, setpopup] = useState(false)
    return (
        <>
            <div className="flex relative mt-[40px]">
                <div className="flex  absolute">
                    <div className={` bg-black bg-opacity-95 text-white flex flex-col  pt-1 lg:pt-10  transition-all duration-300 ${popup ? "w-[217px] z-50 opacity-100" : "w-0 -z-10  opacity-0"}`}>
                        <Dropdown items={data} label="Woman's Fashion" />
                        <Dropdown items={mensdata} label="Men's Fashion" />
                        {
                            categoryLink.map((item, index) => (
                                <div key={index} className=''>
                                    <NavLink to={item.to} className="font-p flex items-center  group cursor-pointer w-[217px] leading-6 text-base font-normal ">
                                        <div className=" flex flex-col w-[217px] gap-4">
                                            {
                                                LinkNames.map((item, index) => {
                                                    return (
                                                        <Fragment key={index + index + "links"}>
                                                            <h4 className=' hover:text-red_1-red1 transition-all duration-300'>{item}</h4>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                    <div className="z-50">
                        <button onClick={() => setpopup(!popup)} className='w-[30px] flex justify-center items-center lg:hidden  '>
                            <div className='flex items-center justify-center bg-red_1-red1 w-[30px] h-[50px] rounded-r rounded-br' > <img src={arrow} alt="arrow" className={`transition-all duration-300 ${popup ? "rotate-180" : "rotate-0"}`} />  </div>
                        </button></div>
                </div>
            </div>
        </>
    )
}

export default Bannerpopup
