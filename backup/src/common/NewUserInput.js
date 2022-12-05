import React from "react";

const NewUserInput = ({
  name,
  value,
  id,
  onChange,
  placeHolder,
  type,
  maxLength,
  disabled,
}) => {
  return (
    <input
      disabled={disabled}
      maxLength={maxLength}
      name={name}
      value={value}
      id={id}
      onChange={onChange}
      className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      placeholder={placeHolder}
      type={type}
    />
  );
};

export default NewUserInput;
