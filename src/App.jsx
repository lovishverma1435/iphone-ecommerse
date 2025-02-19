import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Components/Common/Footer'
import Header from './Components/Common/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Products from './pages/Products'
import LoginFile from './pages/LoginFile'
import Wishlistproducts from './pages/Wishlistproducts'
import CartList from './Components/cart/Cart'
import Checkout from './Components/cart/Checkout'
import Account from './Components/account/Account'
import Gamepads from './pages/Gamepad'
import Errorpage from './pages/Error'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<LoginFile />} />
          <Route path='/wishlist' element={<Wishlistproducts />} />
          <Route path='/cart' element={<CartList />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/account' element={<Account />} />
          <Route path='/wishlistprod' element={<Gamepads />} />
          <Route path='/error' element={<Errorpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
