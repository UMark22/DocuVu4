import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black border border-gray-400 h-[2.5rem] bottom-0">
      <div className="flex justify-between px-4 py-2">
        <h1 className="text-sm font-semibold text-[#3C8DC2]">
          <span className="text-gray-400">Copyright &copy; 2022 </span>U-BIX
          Corporation.
          <span className="text-gray-400"> All rights reserved.</span>
          <span className="text-gray-400 pl-2"> Nov. 21, 2022 2:00 PM</span>
        </h1>
      </div>
    </footer>
  );
};
export default Footer;
