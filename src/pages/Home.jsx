import React from 'react'
import BannerSec from '../Components/home/BannerSec'
import FlashSales from '../Components/home/FlashSale'
import Categroy from '../Components/home/Categroy'
import JblSpeaker from '../Components/home/JblSpeaker'
import bannerdata from "../json/bannerimage.json"
import bestdata from "../json/bestproducts.json"
import ExploreProducts from '../Components/home/ExploreProducts'
const Home = () => {
  return (
    <>
      <BannerSec/>
      <FlashSales time={true} showbutton={true} disoffer={true}  title={"flash sales"} info={"todays"} data={bannerdata}/>
      <Categroy/>
      <FlashSales arrow={"set"} showbutton={false} title={"best selling products"} info={"This Month"} data={bestdata}/>
      <JblSpeaker/>
      <ExploreProducts/>
    </>
  )
}

export default Home
