import React from 'react'
import Wishlist from '../Components/Cards/Wishlist';
import { NavLink } from 'react-router-dom'
const Wishlistproducts = ({data}) => {
  return (
    
    <div>
      {
        data.map((item,index) => (
          <div key={index}>
            <NavLink to={item.to}>
                <Wishlist image={item.image} discount={item.discount}/>
            </NavLink>
          </div>
        ))
      }
    </div>
  )
}

export default Wishlistproducts
