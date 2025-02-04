import React, { useState } from 'react'
import CartProducts from '../json/shoppingcart.json'
import { Link, NavLink } from 'react-router-dom'
import cross from "../assets/logo/cross.svg"
import DropUp from "../assets/logo/DropUpSmall.svg"
import DropDown from "../assets/logo/DropDownSmall.svg"
import Button from '../Components/ui/Button'
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
                    <div className="pt-[181px] pb-10">
                        <ul className='flex items-center justify-between bg-gray-100 shadow-custom_1 py-6 px-10 rounded'>
                            <li className='font-p font-normal text-base'>Product</li>
                            <li className='font-p font-normal text-base'>Price</li>
                            <li className='font-p font-normal text-base'>Quantity</li>
                            <li className='font-p font-normal text-base'>Sub-Total</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-10 pb-10">
                        {
                            CartProducts.map((item, index) => (
                                <div key={index}>
                                    <NavLink to={item.to}>
                                        <div className="flex bg-gray_2-gray shadow-custom_1 py-6 px-10 rounded w-[1170px] justify-between">
                                            <div className="flex gap-[280px]">
                                                <div className="flex gap-[175px]">
                                                    <div className="relative group flex items-center justify-center gap-5  w-[170px]">
                                                        <img className='' src={`src/assets/logo/${item.image}`} alt="image" />
                                                        <h2 className=' absolute -top-[8px] -left-[8px] bg-red_1-red1 scale-0 group-hover:scale-100 transition-all duration-300 flex p-[6px] rounded-full max-w-5 w-full items-center justify-center text-center opacity-0 group-hover:opacity-100'><img src={cross} alt="" /></h2>
                                                        <h2 className='font-p font-normal text-base'>{item.name}</h2>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                        <h2 className='font-p font-normal text-base'>{item.price}</h2>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="flex items-center justify-center gap-4 border rounded border-black_1-black w-[72px] h-11">
                                                        <h2>{count[index] || 1}</h2>
                                                        <div className="flex flex-col">
                                                            <button onClick={() => handleIncrease(index)}> <img src={DropUp} alt="icon" /> </button>
                                                            <button onClick={() => handleDecrease(index)}> <img src={DropDown} alt="icon" /> </button>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <h2>{item.subtotal}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-between pb-20">
                        <Button className={`bg-gray-100  text-black border-black hover:border-black hover:text-black`} Children={"Return To Shop"} />
                        <Button className={`bg-gray-100 text-black border-black hover:border-black hover:text-black`} Children={"Update Cart"} />
                    </div>
                    <div className="flex justify-between pb-[140px] items-start">
                        <div className="flex gap-4 ">
                            <input className='py-4 pr-[164px] pl-6 border-black_1-black' type="text" placeholder='Coupan Code' />
                            <Button Children={"Apply Coupan"} />
                        </div>
                        <div className="flex flex-col w-[470px] border-[2px] border-black py-8 px-6 rounded">
                            <h2 className='font-p font-medium text-xl pb-6'>Card Total</h2>
                            <div className='border-b pb-2 border-black_1-black border-opacity-70'>
                                <h2 className='font-p font-normal text-base'>Subtotal:</h2>
                            </div>
                            <div className='border-b pb-4 border-black_1-black border-opacity-70 pt-4'>
                                <h2 className='font-p font-normal text-base'>Shipping:</h2>
                            </div>
                            <div className="">
                            <h2 className='font-p font-normal text-base py-4'>Total:</h2>
                            </div>
                            <Link to={"/checkout"} >
                            <Button varient={"white"} Children={"Procees to checkout"}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
