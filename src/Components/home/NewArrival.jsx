import React from 'react'
import logos from '../../json/newarrivalfooter.json'
import { NavLink } from 'react-router-dom'
const NewArrival = () => {
    return (
        <>
            <section>
                <div className="container py-16 lg:py-[140px]">
                    <div className="flex items-center gap-4 ">
                        <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                        <div className="text-red_1-red1 font-p font-semibold capitalize">Featured</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="pt-6 flex max-w-[600px] justify-between items-end w-full ">
                            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold font-i tracking-wide capitalize'>New Arrival</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 lg:flex lg:flex-row pt-[60px] justify-between">
                        <div className="bg-black_1-black pt-[89px] pl-[29px] pr-[30px] relative rounded-[4px]">
                            <div className="bg-[url('src/assets/images/playstation.png')] bg-cover bg-left w-[305px] h-[320px]  sm:w-[511px] sm:h-[511px] ">
                                <div className="flex flex-col w-[242px] gap-4 pb-4 absolute bottom-[56px]">
                                    <h2 className=' text-white_1-white font-i text-2xl leading-6 font-semibold tracking-[1px]'>PlayStation 5</h2>
                                    <h5 className='text-white_1-white font-p font-normal text-sm'>Black and White version of the PS5 coming out on sale.</h5>
                                </div>
                                <button className='text-white_1-white border-b font-p font-medium text-base absolute bottom-8'>Shop Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[32px]">
                            <div className="bg-[#0D0D0D]  relative rounded-[4px] max-w-[570px] w-full h-[286px] ">
                                <div className="bg-[url('src/assets/images/woman.png')] sm:w-full h-full bg-no-repeat  sm:bg-cover  ">
                                    <div className="absolute flex flex-col left-4 w-[255px] bottom-12 gap-4 pb-4">
                                        <h2 className='text-white_1-white font-i text-2xl leading-6 font-semibold tracking-[1px] capitalize truncate'>Women’s Collections</h2>
                                        <h6 className='text-white_1-white font-p font-normal text-sm capitalize truncate'>Featured woman collections that give you another vibe.</h6>
                                    </div>
                                    <button className='text-white_1-white border-b font-p font-medium text-base absolute bottom-6 left-4'>Shop now</button>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-[30px] ">
                                <div className=" bg-[#303030] max-w-[270px] w-full py-[31px] px-[30px] relative rounded-[4px]">
                                    <div className="bg-[url('src/assets/images/speakers.png')] bg-cover bg-center w-full  h-[222px] ">
                                        <div className=" absolute flex flex-col bottom-12 gap-2 pb-2">
                                            <h2 className='text-white_1-white font-i text-2xl leading-6 font-semibold tracking-[1px] capitalize truncate'>Speakers</h2>
                                            <h6 className='text-white_1-white font-p font-normal text-sm capitalize truncate'>Amazon wireless speakers </h6>
                                        </div>
                                        <button className='text-white_1-white border-b font-p font-medium text-base absolute bottom-6'>Shop now</button>
                                    </div>
                                </div>
                                <div className="bg-[#303030] max-w-[270px] w-full py-[31px] px-[30px] relative rounded-[4px]">
                                    <div className="bg-[url('src/assets/images/perfume.png')] bg-cover bg-center w-full h-[222px] ">
                                        <div className=" absolute flex flex-col bottom-12 gap-2 pb-2">
                                            <h2 className='text-white_1-white font-i text-2xl leading-6 font-semibold tracking-[1px] capitalize truncate'>Perfume</h2>
                                            <h6 className='text-white_1-white font-p font-normal text-sm'>GUCCI INTENSE OUD EDP </h6>
                                        </div>
                                        <button className='text-white_1-white border-b font-p font-medium text-base absolute bottom-6'>Shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container flex-wrap md:flex items-center justify-evenly mb-[140px]">
                    {
                        logos.map((item, index) => (
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

            </section >
        </>
    )
}

export default NewArrival
