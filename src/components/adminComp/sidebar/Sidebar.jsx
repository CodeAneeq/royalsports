import { useState } from "react";
import {LuLayoutDashboard} from "react-icons/lu"
import {MdOutlineCategory, MdOutlineShoppingBag} from "react-icons/md"
import {GoPackage} from "react-icons/go"
import {CiLogout} from "react-icons/ci"
import {RxCross1} from "react-icons/rx"
import logo from "../../../assets/logo2.png" 
import { useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";


const AdminSidebar = ({ isOpen, setIsOpen }) => {
const navigate = useNavigate();
const pathName = window.location.pathname;


  const menuItems = [
    { id: "dashboard", url: "/", label: "Dashboard", icon: <LuLayoutDashboard size={18} /> },
    { id: "orders", url: "/admin/orders" ,label: "Orders", icon: <MdOutlineShoppingBag size={18} /> },
    { id: "products", url: "/admin/products" ,label: "Products", icon: <GoPackage size={18} /> },
    { id: "categories", url: "/admin/categories", label: "Categories", icon: <MdOutlineCategory size={18} /> },
    { id: "add-category", url: "/admin/add-category", label: "Add Category", icon: < IoAdd size={18} /> },
    { id: "add-product", url: "/admin/add-product", label: "Add Product", icon: <IoAdd size={18} /> },
  ];

  return (
    <>
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          h-screen w-64
          bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]
          text-white
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          flex flex-col justify-between p-5
        `}
      >
        {/* Top */}
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <div>
                <h2 className="font-bold text-lg">Royal Sports</h2>
                <p className="text-xs text-gray-400">ADMIN PANEL</p>
              </div>
            </div>

            {/* Close Button (Mobile) */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <RxCross1 size={22} />
            </button>
          </div>

          {/* Menu */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {setIsOpen(false), navigate(item.url)}}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                  ${
                    pathName === item.url
                      ? "bg-green-500 text-black"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm">
          <CiLogout size={18} />
          Logout
        </button>
      </aside>
    </>
  );
};

export default AdminSidebar;
