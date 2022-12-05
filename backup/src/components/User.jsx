import React from "react";
import { useState, useEffect } from "react";
// import AddUser from './Modals/AddUsersModal';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaLock } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import { AiOutlineLeft } from "react-icons/ai";
import { RiUserAddLine } from "react-icons/ri";

//Sample Json data of Department Users

//Sample Departments
var departments = [
  {
    id: "1",
    Name: [
      "Charlie Tuplano",
      "Jeyllou Maru",
      "Mark Joseph Rubio",
      "Mark Jason Antipala",
    ],
    Department: "IT",
    requestBy: "Mary Diane Villamor",
  },
  {
    id: "2",
    Name: [
      "Charlie Tuplano",
      "Jeyllou Maru",
      "Mark Joseph Rubio",
      "Mark Jason Antipala",
    ],
    Department: "Sales",
    requestBy: "Nancy Mabagos",
  },
  {
    id: "3",
    Name: [
      "Charlie Tuplano",
      "Jeyllou Maru",
      "Mark Joseph Rubio",
      "Mark Jason Antipala",
    ],
    Department: "Admin",
    requestBy: "Neil Morales",
  },
  {
    id: "3",
    Name: [
      "Charlie Tuplano",
      "Jeyllou Maru",
      "Mark Joseph Rubio",
      "Mark Jason Antipala",
    ],
    Department: "Production",
    requestBy: "Nancy Mabagos",
  },
];

const User = () => {
  console.log(departments);
  // const [showUserModal, setShowUserModal] = useState(false);
  // const handleClose = () => setShowUserModal(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const url = "http://localhost:9090/";

  const getUser = () => {
    axios
      .get(`${url}/api/Users/GetUsers`)
      .then((json) => {
        setUsers(json.data.listUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = (id) => {
    const deletedata = {
      ID: id,
      Type: "Delete",
    };

    Swal.fire({
      title: "Delete User!",
      text: "Are you sure you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "blue",
      cancelButtonColor: "red",
      confirmButtonText: "Yes",
      // dangerMode: true, //set this in case the focus should be on cancel button
      buttons: [true, "Yes!"],
    }).then(function (result) {
      if (result.isConfirmed) {
        axios
          .post(`${url}/api/Users/AddUsers`, deletedata)
          .then((json) => {
            toast.success("User deleted successfully");
            getUser();
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire("Terhapus!", "Data berhasil terhapus.", "success");
      }
    });
  };

  const handleEdit = (id) => {
    navigate("/user/editusers", id);
  };

  return (
    <div className="flex col-auto  h-full bg-white overflow-hidden">
      <ToastContainer />
      <div className="border  w-full bg-white overflow-hidden rounded-lg shadow-lg   ">
        <div className=" ">
          <div className="flex  w-full  divide-x divide-slate-400/25 ">
            <div className="p-4 w-full 2xl:w-full xl:w-full lg:w-full md:w-full xmd:w-[95%] sm:w-[88%] xsm:w-[70%]">
              <button
                onClick={() => navigate("/user/addusers")}
                className="mb-4 ml-2 mt-4 inline-block px-6 py-2 border-2 border-blue-600 bg-blue-200 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                <div className="relative">
                  <RiUserAddLine className="w-4 h-4 absolute  pointer-events-none" />
                  <span className="ml-6">New User</span>
                </div>
              </button>
              <div className="p-3 w-full h-[490px] lg:h-[470px] 2xl:w-full  scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <table className=" w-full ">
                  <thead className="bg-gray-100 ">
                    <tr className=" text-left  ">
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-900 px-3 py-3  "
                      >
                        Employee Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-900 px-3 py-3   "
                      >
                        User Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-3  "
                      ></th>
                    </tr>
                  </thead>

                  <tbody className="">
                    {users && users.length > 0
                      ? users.map((user, index) => {
                          var msg = "";

                          if (users.active === "true") {
                            msg = "Active";
                          } else {
                            msg = "Not Active";
                          }
                          return (
                            <tr
                              className="text-left border-b  p-2 "
                              key={index}
                            >
                              {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                           
                                            </td> */}
                              <td className=" p-3 text-sm text-gray-700 whitespace-nowrap ">
                                {user.firstName} {user.lastName}
                              </td>

                              <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                                {user.userName}
                              </td>

                              <td className="p-2 text-sm text-gray-700 whitespace-nowrap block ">
                                <div className=" flex justify-end  ">
                                  <div className="dropdownUser relative w-[50px] ">
                                    <div className="bg-gray-200 text-gray-700 cursor-pointer font-semibold py-2 px-4 rounded inline-flex items-center mr-6">
                                      <span className="mr-1 text-[12px]">
                                        <AiOutlineLeft />
                                      </span>
                                    </div>

                                    <div className="border border-gray-300 dropdownUser-menu absolute hidden text-gray-700 pt-1 w-[280px] h-[300px] -ml-[285px] -mt-[30px] rounded-md">
                                      <div className="bg-white w-full h-full ">
                                        <div className="flex w-full">
                                          <div className="md:w-1/6 mt-5 ml-5">
                                            <label className="block mb-1 md:mb-0">
                                              Department
                                            </label>
                                          </div>
                                          <div className="md:w-1/3 ml-[25%] mt-5">
                                            <label className="block mb-1 md:mb-0">
                                              IT
                                            </label>
                                          </div>
                                        </div>
                                        <div className="flex w-full">
                                          <div className="md:w-1/6 mt-5 ml-5">
                                            <label className="block mb-1 md:mb-0">
                                              Login Status
                                            </label>
                                          </div>
                                          <div className="md:w-1/3 ml-[25%] mt-5">
                                            <label className="block mb-1 md:mb-0">
                                              Active
                                            </label>
                                          </div>
                                        </div>
                                        <div className="flex w-full">
                                          <div className="md:w-1/6 mt-5 ml-5">
                                            <label className="block mb-1 md:mb-0">
                                              Access Rights
                                            </label>
                                          </div>
                                          <div className="md:w-1/3 ml-[25%] mt-5">
                                            <label className="block mb-1 md:mb-0">
                                              <ul className="list-disc ml-3">
                                                <li>Print</li>
                                                <li>Edit</li>
                                                <li>View</li>
                                                <li>Upload</li>
                                                <li>Download</li>
                                                <li>Delete</li>
                                              </ul>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="flex w-full mt-10 ml-5">
                                          <Link
                                            to={`/user/editusers/${user.ID}`}
                                          >
                                            <button className="text-green-600 mr-2 mt-1">
                                              <FaUserEdit className="w-[20px] h-[15px]" />
                                            </button>
                                          </Link>
                                          <button className="text-gray-700 mr-2">
                                            <MdLogout className="w-[20px] h-[15px]" />
                                          </button>
                                          <button className="text-blue-500 mr-2">
                                            <FaLock className="w-[20px] h-[15px]" />
                                          </button>
                                          <button
                                            className="text-red-700 mr-2  "
                                            onClick={() =>
                                              handleDelete(user.ID)
                                            }
                                          >
                                            <BsTrash className="w-[20px] h-[15px]" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      : "No Data"}
                  </tbody>
                </table>
              </div>
            </div>

            <div className=" p-4 2xl:w-full xl:w-full lg:w-full md:w-full xmd:w-[95%] sm:w-[88%] xsm:w-[70%]  ">
              <button
                onClick={() => navigate("/user/department")}
                className="mb-4 ml-2 mt-4 inline-block px-6 py-2 border-2 border-blue-600 bg-blue-200 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                <div className="relative">
                  <RiUserAddLine className="w-4 h-4 absolute  pointer-events-none" />
                  <span className="ml-6">New Department</span>
                </div>
              </button>
              <div className=" p-3 w-full h-[460px] 2xl:w-full  scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b ">
                    <tr className=" text-left ">
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-900 px-3 py-3  w-[300px] "
                      >
                        Department
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-semibold text-gray-900 px-3 py-3  w-[200px]"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {departments.map((department, index) => {
                      return (
                        <tr className="text-left border p-2 " key={index}>
                          <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                            {department.Department}
                          </td>
                          <td className=" p-3 text-sm text-gray-700 whitespace-nowrap">
                            <div className=" flex justify-end  ">
                              <div className="dropdown inline-block relative">
                                <div className="bg-gray-200 text-gray-700 cursor-pointer font-semibold py-2 px-4 rounded inline-flex items-center mr-6">
                                  <span className="mr-1 text-[12px]">
                                    <AiOutlineLeft />
                                  </span>
                                </div>

                                <div className="border border-gray-300 dropdown-menu absolute hidden text-gray-700 pt-1 w-[280px] h-[300px] -ml-[285px] -mt-[30px] rounded-md">
                                  <div className="bg-white w-full h-full ">
                                    <div className="flex w-full">
                                      <div className="md:w-1/6 mt-7 ml-3">
                                        <label className="block mb-1 md:mb-0">
                                          Members
                                        </label>
                                      </div>

                                      <div className=" ml-[12%] mt-5 w-[60%] h-[200px]  text-[11px] shadow-inner overflow-y-auto overflow-auto scrollbar-hide md:scrollbar-default">
                                        <li>Charlie Tuplano</li>
                                        <li>Jeyllou Maru</li>
                                        <li>Mark Joseph Rubio</li>
                                        <li>Mark Jason G. Antipala</li>

                                        {/* {console.log(department.Name)}
                                      <ul>
                                        {departments.map((item) => (
                                          <li>{item.Name} </li>
                                        ))}
                                      </ul> */}
                                      </div>
                                    </div>

                                    <div className="flex w-full mt-10 ml-5">
                                      <Link to={`/user/viewdepartment`}>
                                        <button className="text-green-600 mr-2">
                                          <FaUserEdit className="w-[20px] h-[15px]" />
                                        </button>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
