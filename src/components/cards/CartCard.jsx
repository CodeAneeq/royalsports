import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";

const CartCard = ({ image, title, price, meta }) => {
  return (
    <div className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm mb-4">
      
      {/* Left */}
      <div className="flex gap-4 items-center">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-semibold text-lg">{title}</h3>

          <p className="text-green-600 text-sm font-medium flex items-center gap-1">
            ● IN STOCK
          </p>

          <p className="text-gray-400 text-sm">{meta}</p>

          {/* Quantity */}
          <div className="flex items-center gap-3 mt-3 bg-gray-100 w-fit rounded-lg px-3 py-1">
            <button><FaMinus  size={16} /></button>
            <span className="font-medium">1</span>
            <button><FaPlus size={16} /></button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="text-right">
        <p className="text-blue-600 font-bold text-lg">${price}</p>

        <button className="flex cursor-pointer items-center gap-1 text-gray-400 text-sm mt-6 hover:text-red-500">
          <CiTrash size={16} /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
