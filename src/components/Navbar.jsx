import React from 'react'
import Logo from "../assets/Smoothie_Logo.png"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {Card_Items , isSuccess} = useSelector((state) => state.Menu)


 return (
  <nav data-aos="fade-up" className="fixed top-0 w-full bg-white shadow-sm z-50">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <Link to="/" className="text-2xl font-bold"><img src={Logo} width={"80"} alt="" /></Link>
    <div className="hidden md:flex space-x-6">
      <Link to="/" href="#" className="hover:text-red-600">Home</Link>
      <a href="#menu" className="hover:text-red-600">Menu</a>
      <a href="#about" className="hover:text-red-600">About</a>
      <a href="#footer" className="hover:text-red-600">Contact</a>
    </div>
    <Link to="/ordernow" className="hover:bg-black bg-white text-black border hover:text-white px-4 py-2 rounded">Order Now {Card_Items.length} </Link>
  </div>
</nav>
 )
}

export default Navbar
