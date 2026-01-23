import React from 'react'
import { FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from '../../redux/features/UserSlice'

const NavBtn = () => {
  const isLogin = useSelector(state => state.user.isLogin);
  console.log(isLogin);
  const dispatch = useDispatch();
  
  
  return (
    <div
      
      className="relative overflow-hidden w-30 h-10 mr-4 rounded-md flex items-center justify-center gap-4 text-gray-700 font-medium group"
    >
      {/* Sliding background */}
      <span className="absolute inset-0 bg-[#21c45a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300 cursor-pointer">
        <FaUser />
        {isLogin ? <span onClick={() => dispatch(removeUser())}>Logout</span> : <Link to="/sign-up">Sign Up</Link>}
      </span>
    </div>
  )
}

export default NavBtn
