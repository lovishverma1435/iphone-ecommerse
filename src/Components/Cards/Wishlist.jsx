import React from 'react'
const Wishlist = ({image,discount,heading,price,offprice}) => {
  return (
      <>
      <div className="container">
            <div className="">
                <img className='w-[270px] h-[250px]'  src={`/src/assets/images/${image}`} alt="image" />
            </div>
            <div className="">
                <h1>{heading}</h1>
                <h2>{price}</h2>
            </div>

      </div>
    </>
  )
}

export default Wishlist
