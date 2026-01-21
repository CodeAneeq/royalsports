import React from "react";
import { motion } from "framer-motion";
import SportsImage from "../../assets/about-sports.png"; // image path change kar lena

const WhoWeAreSection = () => {
  return (
    <section className="mx-10 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={SportsImage}
            alt="Sports Gear"
            className="rounded-2xl object-cover w-full h-full"
          />

          {/* Experience Badge */}
          <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4">
            <h4 className="text-green-500 text-2xl font-extrabold">14+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Years of Innovation
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Small heading */}
          <p className="text-blue-600 font-semibold tracking-widest uppercase mb-4">
            Who We Are
          </p>

          {/* Main heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
         Your Trusted Sports Store {" "}
            <span className="text-green-500 underline underline-offset-8">
               in Lahore
            </span>
          </h2>

          {/* Paragraphs */}
          <p className="mt-6 text-gray-600 leading-relaxed">
           Royal Sports is your one-stop shop for all sports needs. We offer a complete range of sports products including bats, balls, footballs, basketballs, sports kits, tracksuits, gym equipment, and swimming accessories.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
           Whether you’re a professional athlete, a student, or someone who enjoys staying active, we provide quality gear that supports performance, comfort, and durability.
          </p>

          {/* Features */}
          <div className="flex gap-8 mt-8 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                ✔
              </span>
              <p className="font-medium text-gray-700">
                Certified Pro Gear
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                🌱
              </span>
              <p className="font-medium text-gray-700">
                Eco-Sourced Fabrics
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
