import React from "react";
import logo1 from '../../assets/logo2.png'
import Navbar from "../navbar/Navbar";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEFT IMAGE SECTION */}
      <div className="hidden lg:flex relative bg-green-900 text-white p-16">
        <div className="absolute inset-0 bg-[url('/src/assets/auth-bg.png')] bg-cover bg-center opacity-90"></div>

        <div className="relative z-10 max-w-md flex flex-col justify-center">

          <figure className="flex w-30 h-30 items-center justify-center gap-3 mb-0">
            <img className="shadow" src={logo1} alt="" />
          </figure>

          <h1 className="text-4xl font-extrabold leading-tight">
            FUEL YOUR <br /> PERFORMANCE.
          </h1>

          <p className="mt-6 text-gray-200">
            Access your personalized training gear, exclusive offers, and
            member-only rewards. The field is waiting.
          </p>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600 mt-2 mb-8">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
    </>
  );
};

export default AuthLayout;
