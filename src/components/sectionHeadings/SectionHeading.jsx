import React from "react";
import Rectangle from "../../assets/Rectangle.png";

const SectionHeading = ({para, title, style}) => {
  return (
    <div style={style}>
      <div className={`flex items-center`}>
        <img src={Rectangle} alt="" className="w-5 h-10 rounded-sm"/>
        <p className="text-green-500 font-medium ml-2.5 mt-2">{para}</p>
      </div>
        <h2 className="mt-2 text-2xl font-medium">{title}</h2>
    </div>
  );
};

export default SectionHeading;
