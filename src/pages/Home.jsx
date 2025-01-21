import React from 'react'
import { Link } from 'react-router-dom'
import BannerSec from '../Components/home/BannerSec'
import Bannersec2 from '../Components/home/bannersec2'
import Categroy from '../Components/home/Categroy'
const Home = () => {
  return (
    <>
      <BannerSec/>
      <Bannersec2/>
      <Categroy/>
    </>
  )
}

export default Home
