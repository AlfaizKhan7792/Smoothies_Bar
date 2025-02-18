import React, { useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import OrderCart from './Pages/OrderCart'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import { ToastContainer } from 'react-toastify'
import Aos from 'aos'
import "aos/dist/aos.css"

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,  // Animation speed (ms)
      once: true,      // Sirf ek baar animation chale
      offset: 100,     // Jab element 100px tak scroll ho tab animation chale
    });
    Aos.refresh()
  }, []);


  return (
    <Router>
    <div className="min-h-screen">
      <Navbar />
    <Routes>      
      <Route path='*' element={<PageNotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/ordernow' element={<OrderCart />} />
    </Routes>
      <Footer />
    </div>
    <ToastContainer />
    </Router>
  )
}

export default App
