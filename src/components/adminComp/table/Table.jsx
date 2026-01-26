import React from 'react'

const Table = ({order}) => {
  return (
    <table className="w-full border-1 border-gray-300 bg-white shadow rounded-lg overflow-hidden">
        <thead>
          <tr className="border-b-1 border-b-gray-300 text-left ">
            <th className="py-3 px-4 max-sm:px-1">OrderID</th>
            <th className="py-3 px-4 max-sm:px-1 max-sm:text-center">Customer</th>
            <th className="py-3 px-4 max-sm:hidden">Date</th>
            <th className="py-3 px-4 max-sm:px-1">Amount</th>
            <th className="py-3 px-4 max-sm:px-1">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-1 border-b-gray-300">
      <td className="flex items-center gap-3 py-3 px-4">
        <span className="font-medium max-sm:hidden">
            {order?._id || "'"}
            </span>
      </td>
      <td className="flex items-center gap-3 py-3 px-4">
        <span className="font-medium max-sm:hidden">
            {order?.title || "'"}
            </span>
      </td>

      {/* Category */}
      <td className="px-4 text-gray-600 max-sm:px-1">
        {order?.category || "'"}
        </td>

      {/* Price */}
      <td className="px-4 font-medium max-sm:hidden">
        ${order?.discountedPrice || "'"}
        </td>

      {/* In Stock Toggle */}
      <td className="px-4 ">
        {/* <ToggleButton status={status} onChange={() => changeStock(product._id, status === 'stock' ? "out of stock" : "stock")}/> */}
      </td>
    </tr>
        </tbody>
      </table>
  )
}

export default Table