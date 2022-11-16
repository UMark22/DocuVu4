import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSecurity, MdPrivacyTip } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import MngHeader from "./MngHeader";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";

import Profile from "./users/me.jpg";
const Home = () => {
  const navigate = useNavigate();
  const Menus = [
    { title: "Home", path: "/home", gap: true },
    {
      title: "Personal Info",
      src: <BsFillFileEarmarkPersonFill />,
      path: "",
      gap: true,
      color: true,
    },
    { title: "Security", src: <MdSecurity />, path: "/mngsecurity", gap: true },
    {
      title: "Access Control",
      src: <MdPrivacyTip />,
      path: "/accesscontrol",
      gap: true,
    },
  ];
  return (
    <>
      <div className="flex flex-row   h-screen w-screen overflow-hidden bg-gray-100">
        <div className="flex flex-row flex-1">
          <div
            className={`w-60  p-2 flex flex-col text-white relative duration-100`}
          >
            {/* Session for Links */}
            <div className="flex-1">
              <ul>
                <div className="mt-[26%] w-70 absolute ml-1 left-0 h-[320px] bg-gray-100 shadow-xm rounded-md">
                  <div className="ml-2 mt-2 mb-2">
                    <button
                      onClick={() => navigate(-1)}
                      className="text-[25px] text-black font-semibold"
                    >
                      <HiOutlineArrowLeft />
                    </button>
                  </div>
                  <p className="text-black text-left  px-6  pb-2  font-semibold text-xl">
                    Manage Account
                  </p>
                  {Menus.map((menu, index) => (
                    <li
                      key={index}
                      className={`text-black rounded-tr-2xl rounded-bl-2xl text-sm flex items-center gap-x-4 cursor-pointer p-2
                             ${menu.gap ? "mt-5" : "mt-2"} ${
                        menu.color
                          ? "bg-gray-100 border shadow-md border-gray-200 w-[90%] ml-3 text-blue-700 "
                          : ""
                      }`}
                    >
                      <Link to={menu?.path} key={index}>
                        <div className="w-[210px]">
                          <span className="text-xl block float-left ml-5">
                            {menu.src ? menu.src : <AiFillHome />}
                          </span>
                          <span
                            className={`text-sm font-extralight flex-1 duration-200 ml-2 `}
                          >
                            {menu.title}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-[5%]  w-[85%]">
            <MngHeader />

            <div className="flex-1 p-4 min-h-0 overflow-auto">
              <div className="w-full border h-full shadow-xl rounded-lg bg-white overflow-auto">
                <div className="text-center py-5 mb-5 text-[30px]">
                  <span className="text-center justify-center font-semibold">
                    Personal Info
                  </span>
                </div>
                <div className="w-[90%] h-[450px] ml-[60px] border border-gray-300 rounded-2xl">
                  <div className="ml-5 py-4">
                    <span className="text-[20px] font-semibold">
                      Basic Info
                    </span>
                  </div>
                  <div className=" flex ml-10 w-[90%] h-[90px] border-t border-gray-300 mt-[20px] bg-gray-100 cursor-pointer">
                    <div class="flex-none  px-5 py-7 text-[13px]">Photo</div>
                    <div class="flex-1 px-[130px] py-7 text-[12px] ">
                      Add a photo to personalize your account
                    </div>
                    <div class="flex-none w-32 py-4 text-[20px] -mr-[7%] -mt-1">
                      <img
                        src={Profile}
                        alt=""
                        className="rounded-full w-[60px] "
                      />
                    </div>
                  </div>

                  <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 ">
                    <div class="flex-none  px-5 py-4 text-[13px]">Name</div>
                    <div class="flex-1 px-[170px] py-4 text-[12px] ">
                      Jeyllou Maru
                    </div>
                    <div class="flex-none w-32 py-4 text-[20px] -mr-[10%] "></div>
                  </div>
                  <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 ">
                    <div class="flex-none  px-5 py-4 text-[13px]">
                      Employee No.
                    </div>
                    <div class="flex-1   px-[120px] py-4 text-[12px] ">
                      Employee000001
                    </div>
                  </div>
                  <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 ">
                    <div class="flex-none  px-5 py-4 text-[13px]">
                      Department
                    </div>
                    <div class="flex-1  px-[130px] py-4 text-[12px] ">MIS</div>
                  </div>
                  <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 ">
                    <div class="flex-none  px-5 py-4 text-[13px]">
                      Document Access
                    </div>
                    <div class="flex-1  px-[86px] py-4 text-[12px] ">
                      All Access
                    </div>
                  </div>
                </div>

                <div className="w-[90%] h-[250px] ml-[60px] mt-10 border border-gray-300 rounded-2xl mb-10">
                  <div className="ml-5 py-4">
                    <span className="text-[20px] font-semibold">
                      Contact Info
                    </span>
                  </div>
                  <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 mt-10 cursor-pointer">
                    <div class="flex-none  px-5 py-4 text-[13px]">Email</div>
                    <div class="flex-1 px-[130px] py-4 text-[12px] ">
                      JeyllouMaru@gmail.com
                    </div>
                    <div class="flex-none w-32 py-4 text-[20px] -mr-[10%]"></div>
                  </div>
                  <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 cursor-pointer">
                    <div class="flex-none  px-5 py-4 text-[13px]">Phone</div>
                    <div class="flex-1  px-[120px] py-4 text-[12px] ">
                      +639219278512
                    </div>
                  </div>
                </div>

                <div className="w-[45%] h-[250px] ml-[60px] mt-10 border border-gray-300 rounded-2xl mb-5">
                  <div className="ml-5 py-4">
                    <span className="text-[20px] font-semibold">Password</span>
                  </div>
                  <div className=" flex w-[90%] h-[60px]">
                    <span className="text-[13px] ml-5">
                      Secure your password to protect your account.
                    </span>
                  </div>

                  <div className="flex justify-between border border-gray-200 h-[18%] bg-gray-200 cursor-pointer">
                    <div className="ml-5 py-2">
                      <span className="text-[13px] ">Last change Oct 30</span>
                    </div>

                    <div className="text-[23px] py-2 mr-8">
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
