import React from "react";

const TextField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  rightElement,
}) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {rightElement && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextField;
