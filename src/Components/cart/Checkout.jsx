import React, { Fragment, useState } from 'react'
import Cartproducts from '../../json/shoppingcart.json'
import cartitem from '../../json/cart.json'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
const Checkout = () => {
    const [isborder, setIsborder] = useState(0);

    return (
        <>
            <section>
                <div className="container ">
                    <div className="pt-24 pb-32 flex items-center gap-[170px]">
                        <div className="flex flex-col">
                            <h1 className='font-medium font-i text-3xl tracking-[0.04em] pb-12'>Billing Details</h1>
                            <div className="flex flex-col gap-8 pb-6">
                                <div className="flex flex-col gap-2">
                                    <h2 className='font-normal text-base font-p opacity-50'>First Name<span className='text-red_1-red1'>*</span></h2>
                                    <input className='w-[470px] h-[50px] pl-2 bg-gray_2-gray rounded opacity-40 outline-none' type="text" placeholder='md rimel' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className='font-normal text-base font-p opacity-50'>Company Name</h2>
                                    <input className='w-[470px] h-[50px] bg-gray_2-gray rounded opacity-40 outline-none' type="text" placeholder='Mad Brains' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className='font-normal text-base font-p opacity-50'>Street Address<span className='text-red_1-red1'>*</span></h2>
                                    <input className='w-[470px] h-[50px] bg-gray_2-gray rounded opacity-40 outline-none' type="text" placeholder='New York Street' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className='font-normal text-base font-p opacity-50'>Apartment, floor, etc. (optional)</h2>
                                    <input className='w-[470px] h-[50px] bg-gray_2-gray rounded opacity-40 outline-none' type="text" placeholder='Apartment Floor-2' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className='font-normal text-base font-p opacity-50'>Town/City<span className='text-red_1-red1'>*</span></h2>
                                    <input className='w-[470px] h-[50px] bg-gray_2-gray rounded opacity-40 outline-none' type="text" placeholder='Kingston, 5236, United State' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className='font-normal text-base font-p opacity-50'>Phone Number<span className='text-red_1-red1'>*</span></h2>
                                    <input className='w-[470px] h-[50px] bg-gray_2-gray rounded opacity-40 outline-none' type="number" placeholder='+91 0000000000' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className='font-normal text-base font-p opacity-50'>Email Address<sup className='text-red_1-red1'>*</sup></h2>
                                    <input className='w-[470px] h-[50px] bg-gray_2-gray rounded opacity-40 outline-none' type="email" placeholder='rimel1111@gmail.com' />
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input className='h-6 w-6 rounded ' type="checkbox" />
                                <h2 className='font-normal text-base font-p'>Save this information for faster check-out next time</h2>
                            </div>
                        </div>
                        <div className="w-[425px] ">
                            {
                                Cartproducts.map((item, index) => (
                                    <div key={index}>
                                        <NavLink to={item.to}>
                                            <div className="flex   rounded w-[425px] justify-between">
                                                <div className="flex gap-[282px]">
                                                    <div className="flex gap-[177px]">
                                                        <div className="relative group flex items-center justify-center gap-5  w-[180px]">
                                                            <img className='' src={`src/assets/logo/${item.image}`} alt="image" />

                                                            <h2 className='font-p font-normal text-base'>{item.name}</h2>
                                                        </div>
                                                        <div className="flex items-center justify-center">
                                                            <h2 className='font-p font-normal text-base'>{item.price}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                ))
                            }
                            <div className="pt-8">
                                <div className='border-b pb-2 border-black_1-black border-opacity-70'>
                                    <h2 className='font-p font-normal text-base'>Subtotal:</h2>
                                </div>
                                <div className='border-b pb-4 border-black_1-black border-opacity-70 pt-4'>
                                    <h2 className='font-p font-normal text-base'>Shipping:</h2>
                                </div>
                                <div className="">
                                    <h2 className='font-p font-normal text-base py-4'>Total:</h2>
                                </div>
                            </div>
                            {
                                cartitem &&
                                <div className="flex flex-col gap-1 pt-2">
                                    {cartitem.map((item, index) => (
                                        <Fragment key={index}>
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className={`flex items-center w-5 h-5 justify-center  rounded-full border-[2px] border-black `}>
                                                        <button
                                                            onClick={() => setIsborder(index)}
                                                            className={`${isborder === index ? "w-3 h-3 bg-black" : "h-4 w-4 bg-white"}  rounded-full `}
                                                        ></button>
                                                    </div>
                                                    <h4>{item.title}</h4>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <img src={`/src/assets/logo/${item.bkash}`} alt="" />
                                                    <img src={`/src/assets/logo/${item.visa}`} alt="" />
                                                    <img src={`/src/assets/logo/${item.mastercard}`} alt="" />
                                                    <img src={`/src/assets/logo/${item.nagad}`} alt="" /></div></div>
                                        </Fragment>
                                    ))}
                                </div>
                            }
                            <div className="pt-8 flex gap-2 w-[527px]">
                                <input className=' py-4 px-6 w-[300px] border border-black_1-black rounded font-p font-normal text-base' placeholder='Coupan Code' />
                                <Button Children={"Apply Coupan"} />
                            </div>
                            <div className="flex justify-start pt-8">
                                <Button Children={"Place Order"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout
