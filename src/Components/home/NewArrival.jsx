import React from 'react'

const NewArrival = () => {
    return (
        <>
            <section>
                <div className="container pb-[140px]">
                    <div className="flex items-center gap-4 ">
                        <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                        <div className="text-red_1-red1 font-p font-semibold capitalize">Featured</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="pt-6 flex max-w-[600px] justify-between items-end w-full ">
                            <h1 className='text-4xl font-semibold font-i tracking-wide capitalize'>New Arrival</h1>
                        </div>
                    </div>
                    <div className="flex pt-[60px] justify-between">
                        <div className="bg-black_1-black pt-[89px] pl-[29px] pr-[30px] rounded-[4px]">
                            <div className=" bg-[url('src/assets/images/playstation.png')] relative bg-cover w-[511px] h-[511px]">
                                <div className="flex flex-col w-[242px] gap-4 pb-4 absolute bottom-[56px]">
                                    <h2 className=' text-white_1-white font-i text-2xl leading-6 font-semibold tracking-[1px]'>PlayStation 5</h2>
                                    <h5 className='text-white_1-white font-p font-normal text-sm'>Black and White version of the PS5 coming out on sale.</h5>
                                </div>
                                <button className='text-white_1-white border-b font-p font-medium text-base absolute bottom-8'>Shop now</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[32px]">
                            <div className="bg-black_2-black pl-[138px] pb-[2px] relative rounded-[4px]">
                                <div className="bg-[url('src/assets/images/woman.png')]  bg-cover w-[432px] h-[284px]">
                                    <div className="absolute flex flex-col left-4 w-[255px] bottom-12 gap-4 pb-4">
                                        <h2 className='text-white_1-white font-i text-2xl leading-6 font-semibold tracking-[1px] capitalize truncate'>Women’s Collections</h2>
                                        <h6 className='text-white_1-white font-p font-normal text-sm capitalize truncate'>Featured woman collections that give you another vibe.</h6>
                                    </div>
                                    <button className='text-white_1-white border-b font-p font-medium text-base absolute bottom-6 left-4'>Shop now</button>
                                </div>
                            </div>
                            <div className="flex gap-[30px]">
                                <div className="bg-black_1-black py-[31px] px-[30px] relative rounded-[4px]">
                                    <div className="bg-[url('src/assets/images/speakers.png')] bg-cover w-[210px] h-[222px] ">
                                        <div className=" absolute flex flex-col bottom-12 gap-2 pb-2">
                                            <h2 className='text-white_1-white font-i text-2xl leading-6 font-semibold tracking-[1px] capitalize truncate'>Speakers</h2>
                                            <h6 className='text-white_1-white font-p font-normal text-sm capitalize truncate'>Amazon wireless speakers </h6>
                                        </div>
                                        <button className='text-white_1-white border-b font-p font-medium text-base absolute bottom-6'>Shop now</button>
                                    </div>
                                </div>
                                <div className="bg-black_1-black py-[31px] px-[30px] relative rounded-[4px]">
                                    <div className="bg-[url('src/assets/images/perfume.png')] bg-cover w-[210px] h-[222px] ">
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
                <div className="container flex items-center justify-evenly mb-[140px]">
                    <div className="flex flex-col items-center justify-center">
                        <img src="src/assets/logo/Services.svg" alt="image" />
                        <h2 className='font-p font-semibold text-xl pt-5 pb-2'>FREE AND FAST DELIVERY</h2>
                        <h6 className='font-p font-normal text-sm'>Free delivery for all orders over $140</h6>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src="src/assets/logo/Services2.svg" alt="image" />
                        <h2 className='font-p font-semibold text-xl pt-5 pb-2'>24/7 CUSTOMER SERVICE</h2>
                        <h6 className='font-p font-normal text-sm'>Friendly 24/7 customer support</h6>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src="src/assets/logo/Services3.svg" alt="image" />
                        <h2 className='font-p font-semibold text-xl pt-5 pb-2'>MONEY BACK GUARANTEE</h2>
                        <h6 className='font-p font-normal text-sm'>We return money within 30 days</h6>
                    </div>
                </div>

            </section>
        </>
    )
}

export default NewArrival
