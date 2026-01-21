// import React from "react";
// import UserLayout from "../../components/layout/UserLayout";
// import CartItem from "../../components/cards/CartCard";
// import CheckoutSummary from "../../components/cards/CheckoutSummaryCard";

// const Cart = () => {
//   return (
//     <UserLayout>
//       <div className="mx-10 my-10 grid grid-cols-3 gap-8">
        
//         {/* Cart Items */}
//         <div className="col-span-2">
//           <h1 className="text-2xl font-semibold mb-6">
//             Your Cart <span className="text-gray-400 text-base">(2 items)</span>
//           </h1>

//           <CartItem
//             image="/images/football.jpg"
//             title="Elite Match Soccer Ball"
//             price="45.00"
//             meta="Size: 5"
//           />

//           <CartItem
//             image="/images/bat.jpg"
//             title="Pro-Series Willow Cricket Bat"
//             price="120.00"
//             meta="Size: 5"
//           />

//           {/* Info Box */}
//           <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4 text-sm">
//             🎉 Congrats! You qualify for <b>FREE Express Delivery</b> on this order.
//           </div>
//         </div>

//         {/* Checkout */}
//         <CheckoutSummary />
//       </div>
//     </UserLayout>
//   );
// };

// export default Cart;

import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import CartItem from "../../components/cards/CartCard";
import CheckoutSummary from "../../components/cards/CheckoutSummaryCard";
import FootballCateg2 from "../../assets/FootballCateg2.png"


const Cart = () => {
  return (
    <UserLayout>
      <div className="mx-4 sm:mx-6 lg:mx-10 my-6 sm:my-10
                      grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

        {/* Cart Items */}
        <div className="md:col-span-2">
          <h1 className="text-xl sm:text-2xl font-semibold mb-6">
            Your Cart{" "}
            <span className="text-gray-400 text-sm sm:text-base">
              (2 items)
            </span>
          </h1>

          <CartItem
            image={FootballCateg2}
            title="Elite Match Soccer Ball"
            price="45.00"
            meta="Size: 5"
          />

          <CartItem
            image={FootballCateg2}
            title="Pro-Series Willow Cricket Bat"
            price="120.00"
            meta="Size: 5"
          />

          {/* Info Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4 text-sm">
            🎉 Congrats! You qualify for{" "}
            <b>FREE Express Delivery</b> on this order.
          </div>
        </div>

        {/* Checkout */}
        <div className="md:sticky md:top-24 h-fit">
          <CheckoutSummary />
        </div>

      </div>
    </UserLayout>
  );
};

export default Cart;
