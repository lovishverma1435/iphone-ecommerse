import React, { useState } from 'react'
import CartProducts from '../../json/shoppingcart.json'
import { Link, NavLink } from 'react-router-dom'
import cross from "../../assets/logo/cross.svg"
import DropUp from "../../assets/logo/DropUpSmall.svg"
import DropDown from "../../assets/logo/DropDownSmall.svg"
import Button from '../ui/Button'
const Cart = () => {
    const [count, setcount] = useState({})

    const handleIncrease = (index) => {
        setcount((prevCounts) => ({
            ...prevCounts,
            [index]: (prevCounts[index] || 1) + 1,
        }));
    };

    const handleDecrease = (index) => {
        setcount((prevCounts) => ({
            ...prevCounts,
            [index]: prevCounts[index] > 1 ? prevCounts[index] - 1 : 1,
        }));
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="pt-24 pb-10">
                        <ul className='flex items-center justify-between bg-gray_2-gray shadow-Customnew py-6 px-10 rounded'>
                            <li className='font-p font-normal text-base sm:w-[220px]'>Product</li>
                            <li className='font-p font-normal text-base  sm:w-[90px]'>Price</li>
                            <li className='font-p font-normal text-base'>Quantity</li>
                            <li className='font-p font-normal text-base'>Sub-Total</li>
                        </ul>
                    </div>
                    <div className="flex flex-col  gap-10 pb-10">
                        {
                            CartProducts.map((item, index) => (
                                <div key={index}>
                                    <NavLink to={item.to}>
                                        <div className="flex bg-gray_2-gray shadow-Customnew py-6 px-10 rounded max-w-[1170px]     w-full">
                                            <div className="flex items-center w-full justify-between">
                                                <div className="flex mr-0 xl:mr-[177px] items-center ">
                                                    <div className="relative group flex items-center justify-center gap-5  w-[177px]">
                                                        <img className='' src={`src/assets/logo/${item.image}`} alt="image" />
                                                        <h2 className=' absolute -top-[8px] -left-[8px] bg-red_1-red1 scale-0 group-hover:scale-100 transition-all duration-300 flex p-[6px] rounded-full max-w-5 w-full items-center justify-center text-center opacity-0 group-hover:opacity-100'><img src={cross} alt="" /></h2>
                                                        <h2 className='font-p font-normal text-base'>{item.name}</h2>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center mr-0 xl:mr-[282px]">
                                                    <h2 className='font-p font-normal text-base'>{item.price}</h2>
                                                </div>
                                                <div className="mr-0 xl:mr-[281px]">
                                                    <div className="flex items-center justify-center gap-4 border rounded border-black_1-black w-[72px] h-11">
                                                        <h2>{count[index] || 1}</h2>
                                                        <div className="flex flex-col">
                                                            <button onClick={() => handleIncrease(index)}> <img src={DropUp} alt="icon" /> </button>
                                                            <button onClick={() => handleDecrease(index)}> <img src={DropDown} alt="icon" /> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <h2>{item.subtotal}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-0 pb-20">
                        <Button className={"shadow-custom"} varient={"white"} Children={"Return To Shop"} />
                        <Button className={"shadow-custom w-[219px]"} varient={"white"} Children={"Update Cart"} />
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between pb-[140px] items-start">
                        <div className="flex flex-col md:flex-row gap-4 ">
                            <input className='py-4 px-6 border-black_1-black border rounded w-[330px]' type="email" placeholder='Coupan Code' />
                            <Button className={" w-[330px]"} Children={"Apply Coupan"} />
                        </div>
                        <div className="flex flex-col max-w-[470px] w-full border-[2px] border-black py-8 px-6 rounded">
                            <h2 className='font-p font-medium text-xl pb-6'>Card Total</h2>
                            <div className='border-b pb-2 border-black_1-black border-opacity-70 flex justify-between'>
                                <h2 className='font-p font-normal text-base'>Subtotal:</h2>
                                <h2 className='font-p text-base font-normal '>$650</h2>
                            </div>
                            <div className='border-b pb-4 border-black_1-black border-opacity-70 pt-4 flex justify-between'>
                                <h2 className='font-p font-normal text-base'>Shipping:</h2>
                                <h2 className='font-p text-base font-normal'>Free</h2>
                            </div>
                            <div className="flex justify-between items-center">
                                <h2 className='font-p font-normal text-base py-4'>Total:</h2>
                                <h2 className='font-p text-base font-normal'>$1100</h2>
                            </div>
                            <Link to={"/checkout"} >
                                <Button Children={"Procees to checkout"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
