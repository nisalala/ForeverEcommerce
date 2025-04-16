// rafce garera just basic code lyako (es7 extension chaixa)
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import  Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
// for toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const App = () => {
  return (
    //root container
    //diiferent screen size ko lago
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>

      {/* outside of routes = available on all pages */}
      <Navbar />
<SearchBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* id vako product aauxa */}
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
