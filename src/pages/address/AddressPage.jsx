import React, { useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import TextInput from "../../components/inputs/TextInput";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import useShoppingCart from "../../hooks/useShoppingCart";
import { useSelector } from "react-redux";
import axios from "axios";
import baseURL from "../../helper/baseURL";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [area, setArea] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [completeAddress, setCompleteAddress] = useState("");
  let cartData = useSelector(state => state.cart.cartData);
  let navigate = useNavigate();
  const {getCartTotalPrice, clearCart} = useShoppingCart();
  let total = getCartTotalPrice();
  console.log(total);
  let user = useSelector(state => state.user.data?._id);
  console.log(user);
  
  let products = cartData?.map((item) => {    
    return {
      id: item.product_id,
      price: item?.product?.discountPrice,
      quantity: item.quantity
    }
  })
  console.log(products);
  
  

  const createOrderAPI = async () => {
    let token = localStorage.getItem("token");
    try {
      let address = {name, email, city, state, area, postalCode, phoneNumber, completeAddress};
      let payload ={total, address, products};
      let res = await axios.post(`${baseURL}/api/order/create-order`, payload, {
          headers: {
            Authorization :`Bearer ${token}`
          }
      });
      console.log(res);
      
      if (res.data.status == "success") {
        alert("Order Created");
        clearCart();
        navigate("/my-orders")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-8">
          Shipping Address
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <TextInput type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <TextInput placeholder="Your City" value={city} onChange={(e) => setCity(e.target.value)} />
          <TextInput placeholder="Your State" value={state} onChange={(e) => setState(e.target.value)} />

          <TextInput placeholder="Your Area" value={area} onChange={(e) => setArea(e.target.value)} />
          <TextInput placeholder="Your Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>

        <div className="mt-6">
          <TextInput placeholder="Your Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>

        <div className="mt-6">
          <TextInput
            placeholder="Your Complete Address"
            className="h-24" value={completeAddress} onChange={(e) => setCompleteAddress(e.target.value)}
          />
        </div>

        <div className="mt-10 flex justify-end">
          <PrimaryBtn className={"bg-green-500 hover:bg-green-700 text-white"} onClick={createOrderAPI}>
            Save Address
          </PrimaryBtn>
        </div>
      </div>
    </UserLayout>
  );
};

export default AddressPage;
