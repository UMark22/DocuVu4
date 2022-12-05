import React, { useEffect, useState } from "react";
import { FcInfo } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import copy from "copy-to-clipboard";

const GeneratePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let params = useParams();

  var CryptoJS = require("crypto-js");
  var ciphertext = CryptoJS.AES.decrypt(params.pass, "my-secret-key@123");
  var data = JSON.parse(ciphertext.toString(CryptoJS.enc.Utf8));
  // toast.success("User Added");

  const [copyText, setCopyText] = useState("");

  useEffect(() => {
    toast.success("User Added!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }, []);

  const copyToClipboard = () => {
    copy(data);
    alert(`You have copied "${data}"`);
    const message = "Copied";
  };

  return (
    <div>
      <ToastContainer />

      <div className="fixed inset-0 bg-transparent flex justify-center items-center">
        <div className="bg-white w-[34%] h-[40%] ml-[18%] rounded-2xl border ">
          <div className="flex justify-between bg-[#3C8DBC]  h-[30%] rounded-t-lg">
            <div className="">
              <p className="px-2 py-3 text-2xl font-semibold text-white tracking-wide">
                Password Generated
              </p>
              <p className="px-2 -mt-4 text-xm  text-white">
                {location.state.userName}
              </p>
            </div>

            <div className="flex justify-center w-10 h-10 -ml-8 mt-4 mr-3 bg-gray-600  rounded-xl">
              <button
                onClick={() => navigate("/user/addusers")}
                className="text-[18px] text-white"
              >
                <MdArrowBackIosNew />
              </button>
            </div>
          </div>

          <div>
            <p className="py-4 ml-4 text-gray-400 font-semibold text-[12px]">
              Password
            </p>
            <div className="-mt-3 border border-gray-100 ml-4 w-[60%] h-[45px] ">
              <p className="ml-2 py-2 text-[15px]">{data}</p>
            </div>
            {/* <div>{message}</div> */}
            <button onClick={copyToClipboard}>
              <p className="ml-8 mt-1 text-[13px] font-semibold text-blue-700 mb-3 cursor-pointer">
                COPY PASSWORD
              </p>
            </button>

            <div className="ml-4 border border-blue-600 w-[93%] h-[55px] rounded-xl bg-blue-100">
              <FcInfo className="ml-2 h-[30px] w-[20px] " />
            </div>
            <div className=" w-[80%] ml-[60px] -mt-[50px] ">
              <p className="text-[13px] font-mono text-gray-500">
                {" "}
                Save time by letting users recover their passwords by setting a{" "}
                <span className="text-blue-700">self recovery policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePassword;
