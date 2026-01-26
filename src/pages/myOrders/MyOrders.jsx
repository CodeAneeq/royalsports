import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import SectionHeading from "../../components/sectionHeadings/SectionHeading";
import OrderCard from "../../components/cards/OrdersCard";
import FootballCateg2 from "../../assets/FootballCateg2.png"
import baseURL from "../../helper/baseURL";
import { useSelector } from "react-redux";
import axios from "axios";


// const ordersData = [
//   {
//     id: "RS-8821",
//     date: "October 12, 2023",
//     amount: "124.99",
//     status: "Shipped",
//     image: FootballCateg2,
//   },
//   {
//     id: "RS-8902",
//     date: "October 24, 2023",
//     amount: "89.50",
//     status: "Processing",
//     image: FootballCateg2,
//   },
//   {
//     id: "RS-8794",
//     date: "September 28, 2023",
//     amount: "210.00",
//     status: "Delivered",
//     image: FootballCateg2,
//   },
// ];

const tabs = ["All Orders", "Pending", "Shipping", "Delivered"];

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [order, setOrders] = useState(null);
  const user = useSelector(state => state.user.data);
  const [products, setProducts] = useState([]);

    
        const getProducts = async () => {
            try {
                const res = await axios.get(`${baseURL}/api/product/get-all-products`);
                const data = res?.data?.data;
                console.log(data);
                
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
    
        useEffect(() => {
          getProducts()
        }, [])


  const getMyOrders = async () => {
    let token = localStorage.getItem("token");    
    try {
      let res = await axios.get(`${baseURL}/api/order/get-my-orders`, {
        headers: {
          Authorization :`Bearer ${token}`
        }
      });
      let data = res?.data?.data;
      console.log(data);
      
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    getMyOrders()
  }, [])

  const filteredOrders =
    activeTab === "All Orders"
      ? order
      : order?.filter(
        (order) => {
          console.log(order);
          console.log(activeTab);
          console.log(activeTab == order.status);
          
         return order.status == activeTab
        });

  return (
    <UserLayout>
      <div className="mx-10 my-10">
        <SectionHeading title="My Orders" para="My Past History" />

        {/* Tabs */}
        <div className="flex gap-8 border-b mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-medium max-[365px]:text-sm max-[330px]:text-[8px] ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div className="mt-6">
          {filteredOrders?.length > 0 ? filteredOrders?.map((order) => {
            const prod = products.filter((item) => item._id == order.products[0].id);
            console.log(prod);
            console.log(activeTab);
            
            return <OrderCard
              key={order._id}
              image={prod[0].image[0]}
              orderId={order._id}
              amount={order.total}
              status={order.status}
            />
}) : <p>You dont order any thing from royal Sports</p>}
        </div>
      </div>
    </UserLayout>
  );
};

export default MyOrders;
