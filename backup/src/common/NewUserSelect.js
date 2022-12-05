import React from "react";

const NewUserSelect = ({ value, onChange, options, name, id, type }) => {
  return (
    <select
      name={name}
      id={id}
      type={type}
      options={options}
      value={value}
      onChange={onChange}
      className="text-xs cursor-pointer appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    >
      <option value="" selected>
        Select
      </option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default NewUserSelect;
