import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({
  title,
  description,
  image,
  id
}) => {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`group relative w-48 h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 ${
        !isMobile ? "hover:scale-105" : ""
      }`}
      onClick={() => {isMobile && setActive(!active), navigate(`/filter-by-category/${id}`)}}
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-full object-cover"/>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 ${
          isMobile
            ? active
              ? "opacity-100"
              : "opacity-0"
            : "opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Title + Description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h3
          className={`text-white text-3xl font-semibold tracking-wide transition-all duration-300 ${
            isMobile
              ? active
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
              : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          }`} 
        >
          {title}
        </h3>

        <p
          className={`mt-2 text-sm text-white/80 transition-all duration-300 delay-75 ${
            isMobile
              ? active
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
              : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
