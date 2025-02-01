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
import Wishlist from './Components/Cards/Wishlist'

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
          <Route path='/wishlist' element={<Wishlist/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
