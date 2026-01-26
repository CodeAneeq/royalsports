import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";

const CheckoutSummary = () => {
  const {getCartTotalPrice} = useShoppingCart();
  const navigate = useNavigate();
  const price = getCartTotalPrice();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm max-[767px]:mt-10">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span>Rs {price}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Estimated Delivery</span>
          <span className="text-green-600 font-medium">FREE</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Payment Type</span>
          <span>Cash On Delivery</span>
        </div>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg">TOTAL</span>
        <span className="text-green-600 font-bold text-2xl">Rs {price}</span>
      </div>

      <p className="text-xs text-gray-400 text-right">
        INCLUSIVE OF VAT
      </p>

      <button onClick={() => navigate("/address")} className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 transition rounded-lg py-3 font-semibold mt-6">
       <Link>PROCEED TO CHECKOUT →</Link> 
      </button>

      {/* Footer */}
      <div className="mt-6 text-xs text-gray-500 space-y-2">
        <p>✔ 7 Days Warranty</p>
        <p>✔ 24/7 Professional Sports Support</p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
