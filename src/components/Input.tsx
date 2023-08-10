import React from "react";

interface InputProps {
  placeholder?: string;
  label: string;
  type?: string;
  value: string;
  otherProps?: any;
  onChange: any;
}

const Input = ({
  placeholder,
  label,
  type,
  value,
  otherProps,
  onChange,
}: InputProps) => {
  return (
    <div className="w-full h-full">
      <label
        htmlFor={label}
        className={`relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-4 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600`}
      >
        <input
          {...otherProps}
          type={type || "text"}
          id={label}
          placeholder={placeholder || ""}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          {label}
        </span>
      </label>
    </div>
  );
};

export default Input;
