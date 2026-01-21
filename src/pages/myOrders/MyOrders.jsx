import React, { useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import SectionHeading from "../../components/sectionHeadings/SectionHeading";
import OrderCard from "../../components/cards/OrdersCard";
import FootballCateg2 from "../../assets/FootballCateg2.png"


const ordersData = [
  {
    id: "RS-8821",
    date: "October 12, 2023",
    amount: "124.99",
    status: "Shipped",
    image: FootballCateg2,
  },
  {
    id: "RS-8902",
    date: "October 24, 2023",
    amount: "89.50",
    status: "Processing",
    image: FootballCateg2,
  },
  {
    id: "RS-8794",
    date: "September 28, 2023",
    amount: "210.00",
    status: "Delivered",
    image: FootballCateg2,
  },
];

const tabs = ["All Orders", "Processing", "Shipped"];

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  const filteredOrders =
    activeTab === "All Orders"
      ? ordersData
      : ordersData.filter((order) => order.status === activeTab);

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
              className={`pb-3 font-medium max-[365px]:text-sm max-[330px]:text-[12px] ${
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
          {filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              image={order.image}
              orderId={order.id}
              date={order.date}
              amount={order.amount}
              status={order.status}
            />
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default MyOrders;
