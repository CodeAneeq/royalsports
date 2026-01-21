import React from 'react';
import { IoCartOutline } from "react-icons/io5"
import { Link } from 'react-router-dom';


const CartBtn = () => {
    return (
        <Link to="/cart" className='w-10 h-10 bg-[#21c45a] text-white rounded-md text-xl flex justify-center items-center cursor-pointer'>
            <IoCartOutline />
        </Link>
    )
}

export default CartBtn