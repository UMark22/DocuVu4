const Input = ({ onChange, placeHolder, type, id, value, name }) => {
  return (
    <input
      name={name}
      value={value}
      id={id}
      onChange={onChange}
      className="pr-3 pl-10 py-2 w-full placeholder-gray-400 text-current rounded-md border-none ring-1 ring-gray-300 focus:ring-gray-200 focus:ring-1"
      placeholder={placeHolder}
      type={type}
    />
  );
};
export default Input;
