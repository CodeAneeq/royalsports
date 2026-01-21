import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition"
    >
      {/* Icon */}
      <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-white shadow flex items-center justify-center text-green-500 text-2xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
