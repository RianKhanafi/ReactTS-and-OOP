import React from "react";

interface InputProps {
  error?: string;
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string | number | null;
  setState(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  placeholder,
  type,
  error,
  setState,
}) => {
  return (
    <div>
      <div className="flex flex-col mb-4">
        {label && (
          <label
            htmlFor="email"
            className={[
              "text-lg mb-2",
              error ? "text-red-500" : "text-gray-900",
            ].join(" ")}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          className={[
            "border border-gray-600 w-full focus:border-teal-500 bg-white focus:outline-none border-0 px-6 py-3 w-1/2",
            error
              ? "border-red-500 text-red-500"
              : "focus:border-teal-500 text-gray-600",
          ].join(" ")}
          placeholder={placeholder}
          onChange={setState}
          value={value || ""}
        />
      </div>

      <span className="text-red-500 pt-2">{error}</span>
    </div>
  );
};

export default Input;
