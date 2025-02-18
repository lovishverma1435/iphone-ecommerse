import React from 'react'
import Wishlist from '../Components/Cards/Wishlist';
import { NavLink } from 'react-router-dom'
import Button from '../Components/ui/Button';
import jsonmap from '../json/wishlist.json'
import WishlistData from "../json/wishlistcard.json"
import WishlistCard from '../json/wishlist.json'

const Wishlistproducts = () => {
    return (

        <section>
            <div className="container">
                <div className="pt-20 pb-20">
                    <div className=" flex items-center justify-between pb-[60px]">
                        <div className="flex items-center justify-center gap-4">
                            {/* <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div> */}
                                <h3 className='font-p font-normal text-xl'>Wishlist ({jsonmap.length})</h3>
                            
                        </div>
                        <Button className={"shadow-custom"} varient={"white"} Children={"Move All To Bag"} />
                    </div>
                    <div className='flex  gap-[30px] items-center justify-center'>
                        {
                            WishlistCard.map((item, index) => (
                                <div key={index}>
                                    <NavLink to={item.to}>

                                        <Wishlist image={item.image} heading={item.heading} price={item.price} offprice={item.offprice} discount={item.discount} deleted={item.deleted} />
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="pt-20 pb-20">
                    <div className=" flex items-center justify-between pb-[60px]">
                        <div className="flex items-center justify-center gap-4">
                            <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                                <h3 className='font-p font-normal text-xl'>Just For You</h3>
                            
                        </div>
                        <Button className={"shadow-custom"} varient={"white"} Children={"See All"} />
                    </div>
                    <div className='flex gap-[30px] items-center justify-center'>
                        {
                            WishlistData.map((item, index) => (
                                <div key={index}>
                                    <NavLink to={item.to}>
                                        <Wishlist image={item.image} heading={item.heading} price={item.price} offprice={item.offprice} discount={item.discount} deleted={item.deleted} rating={item.rating} view={item.view} viewer={item.viewer} topnew={item.topnew} />
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wishlistproducts
