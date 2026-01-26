import React, { useState } from 'react'
import logo from "../../assets/logo2.png"
import NavBtn from '../buttons/NavBtn'
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import CartBtn from '../buttons/CartBtn'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isLogin = useSelector(state => state.user.isLogin);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `font-bold cursor-pointer transition pb-1 hover:text-[#21c45a] ${isActive
      ? "text-black border-b-2 border-[#21c45a]"
      : "text-gray-600 border-b-2 border-transparent"
    }`

  return (
    <nav className='w-full bg-white shadow px-6 md:px-10'>
      {/* Top Bar */}
      <div className='h-18 flex justify-between items-center'>
        <figure>
          <Link to="/">
          <img className='h-14 md:h-20' src={logo} alt="Royal Sports Logo" />
          </Link>
        </figure>

        {/* Desktop Links */}
        <ul className='hidden md:flex gap-6 items-center'>
          <NavLink to="/" className={linkClass}>HOME</NavLink>
          <NavLink to="/all-products" className={linkClass}>ALL PRODUCTS</NavLink>
          <NavLink to="/about-us" className={linkClass}>ABOUT US</NavLink>
          {isLogin && <NavLink to="/my-orders" className={linkClass}>MY ORDERS</NavLink>}
        </ul>

        {/* Desktop Buttons */}
        <div className='hidden md:flex items-center gap-3'>
          <NavBtn />
          <CartBtn  onClick={() => navigate('/cart')}/>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-2xl bg-[#21c45a] w-9 h-9 rounded-md text-white flex justify-center items-center'
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden flex flex-col gap-4 pb-4'>
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            HOME
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/all-products" className={linkClass}>
            ALL PRODUCTS
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about-us" className={linkClass}>
            ABOUT US
          </NavLink>

          {isLogin && <NavLink onClick={() => setOpen(false)} to="/my-orders" className={linkClass}>
            MY ORDERS
          </NavLink>}

          {/* Mobile Actions */}
          <div className='flex items-center gap-4 pt-4 border-t'>
            <NavBtn />
            <CartBtn onClick={() => navigate('/cart')}/>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

