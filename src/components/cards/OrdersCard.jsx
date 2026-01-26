// import React from "react";

// const statusColors = {
//   Shipped: "bg-blue-600",
//   Processing: "bg-orange-500",
//   Delivered: "bg-green-600",
// };

// const OrderCard = ({ image, orderId, date, amount, status }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between mb-4">
      
//       {/* Left side */}
//       <div className="flex items-center gap-4">
//         <img
//           src={image}
//           alt="product"
//           className="w-20 h-20 rounded-lg object-cover"
//         />

//         <div>
//           <h3 className="font-semibold text-lg">Order #{orderId}</h3>
//           <p className="text-sm text-gray-500">Placed on {date}</p>

//           <p className="text-xs text-gray-400 mt-2">TOTAL AMOUNT</p>
//           <p className="text-lg font-bold text-blue-600">${amount}</p>
//         </div>
//       </div>

//       {/* Right side */}
//       <div className="text-right">
//         {/* <p className={`font-medium mb-3 ${statusColors[status]}`}>
//           {status}
//         </p> */}

//         <button className={`transition px-4 py-2 rounded-lg font-medium text-white ${statusColors[status]}`}>
//          {status}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderCard;


import React from "react";

const statusColors = {
  Shipping: "bg-blue-600",
  Pending: "bg-orange-500",
  Delivered: "bg-green-600",
};

const OrderCard = ({ image, orderId, date, amount, status }) => {
  return (
    <div
      className="
        bg-white rounded-xl shadow-sm p-4 sm:p-5
        flex flex-col sm:flex-row
        sm:items-center sm:justify-between
        gap-4 mb-4
      "
    >
      {/* Left side */}
      <div className="flex items-start sm:items-center gap-4">
        <img
          src={image}
          alt="product"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-semibold text-base sm:text-lg">
            Order #{orderId}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500">
            Placed on {date}
          </p>

          <p className="text-xs text-gray-400 mt-2">TOTAL AMOUNT</p>

          <p className="text-base sm:text-lg font-bold text-blue-600">
            ${amount}
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full sm:w-auto sm:text-right">
        <button
          className={`
            w-full sm:w-auto
            px-4 py-2
            rounded-lg font-medium text-white
            ${statusColors[status]}
          `}
        >
          {status}
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
