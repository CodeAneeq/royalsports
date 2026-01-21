import React, { useState } from "react";

const CategoryCard = ({
  title = "Football",
  description = "Gear for every match day",
  image,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`relative w-48 h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg 
      transition-transform duration-300 hover:scale-105`}
      onClick={() => setActive(!active)}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
        transition-opacity duration-300
        ${active ? "opacity-100" : "opacity-0"} 
        md:group-hover:opacity-100`}
      />

      {/* Title + Description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h3
          className={`text-white text-3xl font-semibold tracking-wide 
          transition-all duration-300
          ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          md:group-hover:opacity-100 md:group-hover:translate-y-0`}
        >
          {title}
        </h3>

        <p
          className={`mt-2 text-sm text-white/80 
          transition-all duration-300 delay-75
          ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          md:group-hover:opacity-100 md:group-hover:translate-y-0`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
