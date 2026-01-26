import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import CartItem from "../../components/cards/CartCard";
import CheckoutSummary from "../../components/cards/CheckoutSummaryCard";
import FootballCateg2 from "../../assets/FootballCateg2.png"
import useShoppingCart from "../../hooks/useShoppingCart";


const Cart = () => {
  const {getCartProducts, removeProductInCart, clearCart, getCartCount} = useShoppingCart();
  const products = getCartProducts();
  const count = getCartCount();
  console.log(products);
  
  return (
    <UserLayout>
      <div className="mx-4 sm:mx-6 lg:mx-10 my-6 sm:my-10
                      grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

        <div className="md:col-span-2">
          <div className="flex justify-between">

          <h1 className="text-xl sm:text-2xl font-semibold mb-6">
            Your Cart{" "}
            <span className="text-gray-400 text-sm sm:text-base">
              ({count} Items)
            </span>
          </h1>
          {
            count >= 1 ?   <h3 className="text-xl font-semibold mb-6 cursor-pointer text-red-500 mt-1 max-[350px]:text-[17px]" onClick={clearCart}>Clear All Cart</h3> : <></>
          }
        
          </div>

          {
            products.length > 0 ? products?.map((item) => (
              <CartItem
              product={item?.product}
              key={item?._id}
            image={item?.product?.image[0]}
            title={item?.product?.name}
            price={item?.product?.discountPrice}
            quantity={item?.quantity}
            onRemove={() => removeProductInCart(item?.product)}
          />
            )) : <></>
          }
        



          {/* Info Box */}
          {count >= 1 ? <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4 text-sm">
            🎉 Congrats! You qualify for{" "}
            <b>FREE Express Delivery</b> on this order.
          </div> : <></>}
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
