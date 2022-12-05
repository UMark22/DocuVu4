import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineSearch } from "react-icons/hi";
import UserMe from "./users/me.jpg";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Logo from "../components/shared/img/DocuVu-A.png";

const MngHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen mb-3 flex items-center absolute inset-x-0 top-0 h-14  bg-[#0972B8] border-gray-200 justify-between">
      <div className="relative ml-3 mt-3">
        <img
          src={Logo}
          alt=""
          className="h-[40px] w-[125px] ml-3 -mt-3  bg-cover bg-no-repeat bg-center"
        />
      </div>
      <div className="flex items-center gap-2 mr-6 ">
        <Menu as="div">
          <div className="">
            <Menu.Button className="ml- flex text-sm rounded-none focus:outline-none  focus:ring-[#3C8DBC]">
              <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center">
                <img
                  src={UserMe}
                  alt=""
                  className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                />
              </div>
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
            <Menu.Items className="origin-top-right- z-10 absolute right-[1.35rem] mt-3 w-64 rounded-sm shadow-md p-1 bg-[#3C8DBC] ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="h-auto">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "",
                        "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                      )}
                    >
                      <img
                        src={UserMe}
                        alt=""
                        className="rounded-full w-20 ml-16"
                      />
                      <span className="ml-16 text-white">Jeyllou Maru</span>
                      <br />
                      <span className="text-[13px] text-white font-normal sm:ml-16 self-auto">
                        Administrator
                      </span>
                    </div>
                  )}
                </Menu.Item>
              </div>
              <div className="flex justify-between bg-white ">
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/home")}
                        className={classNames(
                          active && "",
                          "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                        )}
                      >
                        <button
                          type="submit"
                          className="border hover:border-gray-400 w-20 h-[3rem] hover:bg-gray-200 text-sm rounded-md"
                        >
                          Manage Account
                        </button>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/logout")}
                        className={classNames(
                          active && "",
                          "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                        )}
                      >
                        <button
                          type="submit"
                          className="border w-20 h-[3rem] hover:border-gray-400 hover:bg-gray-200 text-sm rounded-md"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
export default MngHeader;
