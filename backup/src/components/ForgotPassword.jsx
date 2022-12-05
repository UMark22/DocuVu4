import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import LogoImg from "../assets/loginlogo.png";

const ForgotPassword = () => {
  // const navigate = useNavigate();

  const [userName, setuserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [userPassword, setuserPassword] = useState("");
  const [userPassError, setUserPassError] = useState(false);

  return (
    <div className="h-screen sm:grid-cols-1 font-body grid place-items-center  ">
      <div className="max-w-[450px] h-[400px] px-8 bg-transparent ">
        <div className="mb-3 -mt-5">
          <img src={LogoImg} alt="DocuVu" className='"object-fill h-38 w-96 ' />
        </div>

        <div className=" mb-4 border-b-2 border-gray-400">
          <div className="mb-4">
            <span className="text-xl">Find Your Account </span>
          </div>
        </div>

        <div className=" mb-6 ">
          <span className="text-[15px]">
            For verification, Please enter your username{" "}
          </span>
        </div>

        <form className="block mb-10">
          <div className=" relative flex items-center text-gray-500 focus-within:text-gray-500">
            {/* <FaUser className='w-4 h-4 absolute ml-3  pointer-events-none'/> */}
            <input
              className="pr-3 pl-10 py-2 w-full h-[45px] placeholder-gray-400 text-current rounded-xl border-none ring-1 ring-gray-300 focus:ring-gray-400 focus:ring-2"
              placeholder="Username"
              type="text"
            />
          </div>

          <div className="relative flex ml-2 mb-5">
            {/* {userNameError? <RiErrorWarningFill className='mt-1 w-4 h-4 text-rose-500 absolute  pointer-events-none'/> :null } */}
            {userNameError ? (
              <span className="ml-5 mt-1 text-[11px] text-rose-500 font-semibold ">
                {" "}
                Enter your username
              </span>
            ) : null}
          </div>
        </form>

        <div className="flex justify-end">
          <button
            id="btnLog"
            className="w-[30%] h-[40px] text-white transition-colors duration-150 bg-blue-700 rounded-md focus:shadow-outline hover:bg-blue-800  tracking-widest "
          >
            <span className="text-[13px]">Search </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
