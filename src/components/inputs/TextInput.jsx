import React from "react";

const TextInput = ({
  type = "text",
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-xl bg-gray-100 px-5 py-4 text-sm text-gray-700 
      placeholder-gray-500 outline-none focus:ring-2 focus:ring-primary 
      transition ${className}`}
      {...props}
    />
  );
};

export default TextInput;
