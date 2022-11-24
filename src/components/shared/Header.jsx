import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import UserMe from "./users/me.jpg";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { SlUser } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-14 shadow-md px-1 flex items-center border-b border-gray-200 justify-end">
      <div className="flex items-center gap-2 mr-2">
        <Menu as="div" className="relative right-5">
          <div className="">
            <Menu.Button className="ml- flex text-sm outline-0">
              <div className="h-8 w-8 rounded-full bg-[#0972B8] bg-cover bg-no-repeat bg-center">
                <img
                  src={UserMe}
                  alt=""
                  className="h-8 w-8 rounded-full bg-[#0972B8] bg-cover bg-no-repeat bg-center"
                />
              </div>
              <span className="text-black text-base py-1 ml-2">
                Jeyllou Maru
              </span>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute -right-6 mt-3 w-[210px] rounded-lg shadow-xl p-1 bg-white">
              <div className="h-auto">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "",
                        "active:rounded-sm px-4 py-2 cursor-pointer text-center"
                      )}
                    >
                      <span className="text-[15px] text-black font-normal self-auto">
                        Administrator
                      </span>
                    </div>
                  )}
                </Menu.Item>
              </div>
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/home")}
                      className={classNames(
                        active && "",
                        "active:bg-gray-200 rounded-sm px-4 py-2  cursor-pointer  "
                      )}
                    >
                      <div className="relative ">
                        <button
                          type="submit"
                          className="w-full text-black text-[14px] pr-4"
                        >
                          <SlUser className=" absolute top-[50%] w-[30px] h-[17px] -ml-2 -translate-y-1/2" />
                          <span className="ml-[20%]">Manage Account</span>
                        </button>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </div>
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => navigate("/")}
                      className={classNames(
                        active && "",
                        "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200"
                      )}
                    >
                      <div className="relative">
                        <button
                          type="submit"
                          className="w-full text-[14px] pr-4"
                        >
                          <IoIosLogOut className="absolute top-[50%] w-[30px] h-[17px] -ml-2 -translate-y-1/2" />
                          <span className="ml-20%">Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
