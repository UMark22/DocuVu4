import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import UserMe from "./users/me.jpg";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { SlUser } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { BiCheck } from "react-icons/bi";

const request = [
  {
    userId: "1",
    name: "Mark Joseph Rubio",
    docName: "SEAPS CO. LTD_SBKK1084360_ARRIVAL NOTICE_04192022",
    dateRequested: "November, 28 2022",
    requestStatus: "Pending",
  },
  {
    userId: "2",
    name: "Mark Jason Antipala",
    docName: "SEAPS CO. LTD_SBKK1084360_ARRIVAL NOTICE_04192022",
    dateRequested: "November, 26 2022",
    requestStatus: "Declined",
  },
  {
    userId: "3",
    name: "Jeyllou Maru",
    docName: "SEAPS CO. LTD_SBKK1084360_ARRIVAL NOTICE_04192022",
    dateRequested: "November, 28 2022",
    requestStatus: "Pending",
  },
  {
    userId: "4",
    name: "Charlie Tuplano",
    docName: "SEAPS CO. LTD_SBKK1084360_ARRIVAL NOTICE_04192022",
    dateRequested: "November, 26 2022",
    requestStatus: "Approved",
  },
  {
    userId: "5",
    name: "Zack Tabudlo",
    docName: "SEAPS CO. LTD_SBKK1084360_ARRIVAL NOTICE_04192022",
    dateRequested: "November, 23 2022",
    requestStatus: "Approved",
  },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-14 shadow-md px-1 flex items-center border-b border-gray-200 justify-end">
      <div className="flex gap-2 mr-4">
        <Menu as="div" className="relative right-6">
          <div className="">
            <Menu.Button className="ml- flex text-sm outline-0">
              <div className="h-8 w-8 rounded-full  bg-cover bg-no-repeat bg-center ">
                <IoIosNotifications
                  size={20}
                  className="absolute left-[5px] rounded-full bg-cover bg-no-repeat bg-center text-amber-300 w-[30px] h-[30px] "
                />
                <span className="absolute -top-2 left-[25px] text-white  h-4 w-5 rounded-full ">
                  <p className="text-white font-semibold text-[13px] bg-red-600 rounded-2xl">
                    {" "}
                    {(() => {
                      const count = request.filter(
                        (status) => status.requestStatus === "Pending"
                      );

                      return <span>{count.length}</span>;
                    })()}{" "}
                  </p>
                </span>
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
            <Menu.Items className="origin-top-right z-10 absolute -right-[4.5rem] mt-3 w-[530px] rounded-lg shadow-xl p-1 bg-white">
              <div className=" mb-2 bg-[#0972B8] rounded-tl-lg rounded-tr-lg h-[40px] p-2">
                <span className="text-white ml-3 text-[16px] ">
                  Notification
                </span>
              </div>
              <div className=" h-[320px] scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                {request &&
                  request

                    .sort(
                      (a, b) =>
                        new Date(b.dateRequested) - new Date(a.dateRequested)
                    )
                    .map((request, index) => {
                      return (
                        <div
                          className="flex justify-start border-b "
                          key={index}
                          border
                        >
                          <Menu.Item>
                            <div className="active:bg-white rounded-sm px-4 py-2 ">
                              <div className="relative ">
                                <div className="w-full text-black text-[14px] pr-4 ">
                                  <span className="text-[12px] italic">
                                    {request.docName}
                                  </span>
                                  <br />
                                  <span className="text-[12px]">
                                    {request.name}
                                  </span>
                                  <br />
                                  <span className="text-[12px]">
                                    {request.dateRequested}
                                  </span>
                                  {(() => {
                                    if (request.requestStatus === "Pending") {
                                      return (
                                        <div>
                                          <BiCheck
                                            size={20}
                                            className="border rounded-2xl text-green-500 absolute w-[30px] h-[28px] top-[35%] -right-[20%] -translate-y-1/2 cursor-pointer"
                                            onClick={() => alert("Approved")}
                                          />
                                          <TiDelete
                                            size={20}
                                            className="border rounded-2xl text-red-500 absolute w-[30px] h-[28px] top-[35%] -right-[30%] -translate-y-1/2 cursor-pointer"
                                            onClick={() => alert("Remove")}
                                          />
                                        </div>
                                      );
                                    } else if (
                                      request.requestStatus === "Approved"
                                    ) {
                                      return (
                                        <span className="text-green-500 absolute top-[35%] -right-[36%] text-[12px]">
                                          Approved Request
                                        </span>
                                      );
                                    } else if (
                                      request.requestStatus === "Declined"
                                    ) {
                                      return (
                                        <span className="text-red-500 absolute top-[35%] -right-[36%] text-[12px]">
                                          Declined Request
                                        </span>
                                      );
                                    }

                                    return null;
                                  })()}
                                  {}
                                </div>
                              </div>
                            </div>
                          </Menu.Item>
                        </div>
                      );
                    })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
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
              {/* <span className="text-black text-base py-1 ml-2">
                Jeyllou Maru
              </span> */}
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
