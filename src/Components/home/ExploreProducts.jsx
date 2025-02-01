import React, { } from 'react'
import Button from '../ui/Button'
import Explore from '../Cards/Explore'

const ExploreProducts = ({ data }) => {

    return (
        <>
            <section>
                <div className="container pb-[60px]">
                    <div className="flex items-center gap-4 ">
                        <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                        <div className="text-red_1-red1 font-p font-semibold capitalize">Our Products</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="pt-6 flex max-w-[600px] justify-between items-end w-full ">
                            <h1 className='text-4xl font-semibold font-i tracking-wide capitalize'>Explore Our Products</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] pt-[60px]">
                        {
                            data.map((item, index) => (
                                <div key={index + Date.now() + item}>
                                    {
                                        <Explore image={item.image}  wishlist={item.wishlist} view={item.view} name={item.name} price={item.price} ratting={item.ratting} review={item.review} topnew={item.topnew} colors={item.colors} />
                                    }
                                </div>
                            ))
                        }</div>

                </div>
                    <Button Children={"View All Products"} />
                    
            </section>
        </>
    )
}

export default ExploreProducts
