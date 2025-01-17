/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import Orders from './Pages/Orders';
import Verify from './Pages/Verify';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Privacy from './Pages/Privacy';
import DeliveryShipping from './Pages/DeliveryShipping';
import TermsConditions from './Pages/TermsConditions';
import ContactForm from './Pages/ContactForm';
import ShopByStyle from './Pages/ShopByStyle';
import Newarrivals from './Pages/Newarrivals';
import Celebrity from './Pages/Celebrity';
import Jewellery from './Pages/Jewellery';
import Cordset from './Pages/Cordset';
import Gown from './Pages/Gown';
import Lehengas from './Pages/Lehengas';
import Handbag from './Pages/Handbag';
import Saree from './Pages/Saree';

const App = () => {
  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/collection" element={<Collection />}/>
        <Route path="/shop" element={<ShopByStyle />}/>
        <Route path="/arrive" element={<Newarrivals />}/>
        <Route path="/celebrity" element={<Celebrity />}/>
        <Route path="/jewellery" element={<Jewellery />}/>
        <Route path="/cordset" element={<Cordset />}/>
        <Route path="/gown" element={<Gown />}/>
        <Route path="/lehengas" element={<Lehengas />}/>
        <Route path="/handbags" element={<Handbag />}/>
        <Route path="/saree" element={<Saree />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term" element={<TermsConditions />} />
        <Route path="/delivery" element={<DeliveryShipping />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/connect" element={<ContactForm />}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/place-order" element={<PlaceOrder />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/verify" element={<Verify />}/>
      </Routes>
      </div>
      <Footer />
      </>
    
  )
}

export default App