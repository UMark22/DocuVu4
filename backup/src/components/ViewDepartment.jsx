import axios from "axios";
import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { json, useNavigate, Link } from "react-router-dom";
// import Swal from 'sweetalert2'
import Modal from "react-modal";
import { RiArrowGoBackLine } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";

var data = [
  { id: "1", Name: "Charlie Tuplano", requestBy: "Mary Diane Villamor" },
  {
    id: "2",
    Name: "Jeyllou Maru",
    requestBy: "Nancy Mabagos",
  },
  {
    id: "3",
    Name: "Mark Joseph Rubio",
    requestBy: "Neil Morales",
  },
  {
    id: "4",
    Name: "Mark Jason G. Antipala",
    requestBy: "Mary Diane Villamor",
  },
  {
    id: "5",
    Name: "Joaqiuin Sanggano",
    requestBy: "Nancy Mabagos",
  },
];

const ViewDepartment = () => {
  const navigate = useNavigate();

  //   const data = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     emailAddress: emailAdd,
  //     userName: generateUsername,
  //     password: genratedPassword,
  //     groupID: groupID,
  //     creationDate: createdDate,
  //     expireDate: newDateExpire,
  //     lockOut: lockOut,
  //     Type: "Add",
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (
  //       firstName === "" ||
  //       lastName === "" ||
  //       emailAdd === "" ||
  //       lockOut === "NoValue" ||
  //       groupID === "NoValue"
  //     ) {
  //       setFirstNameError(true);
  //     } else {
  //       const url = "http://192.168.6.52:9090/";
  //       axios
  //         .post(`${url}api/Users/AddUsers`, data)
  //         .then((result) => {
  //           json(result.ResponseMessage);

  //           if (result.data.ResponseMessage === "User Added") {
  //             var CryptoJS = require("crypto-js");
  //             var ciphertext = CryptoJS.AES.encrypt(
  //               JSON.stringify(genratedPassword),
  //               "my-secret-key@123"
  //             ).toString();
  //             navigate(`/user/addusers/${ciphertext}/`, {
  //               state: { userName: generateUsername },
  //             });
  //           } else if (result.data.ResponseMessage === "Existing User") {
  //             alert("Username is Already Exist ");
  //           } else {
  //             alert("Looks Like Something Happens");
  //           }
  //         })
  //         .catch((error) => {
  //           alert(error);
  //         });
  //     }
  //   };

  return (
    <>
      <div className="px-10 mt-10 ml-[25%] bg-white w-[50%] h-[450px] shadow-2xl shadow-secondary-600 border rounded-lg">
        <div className="flex  ">
          <div className="flex justify-center w-[45px] h-[40px] -ml-8 mt-2  bg-gray-200  rounded-lg">
            <button
              onClick={() => navigate("/user")}
              className="text-[22px] text-black relative"
            >
              <RiArrowGoBackLine />
            </button>
          </div>

          <div className="ml-4 py-3.5 w-30 h-7">
            <p className="text-[16px] font-semibold">Delete Member</p>
          </div>
        </div>

        <table className=" mt-3 mx-auto max-w-4xl border whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-y-scroll">
          <div className="h-[280px] scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            <thead className="bg-gray-500">
              <tr className="text-white text-left">
                <th className="font-semibold text-sm uppercase px-6 py-4">
                  Name
                </th>
                <th className="font-semibold text-sm uppercase px-6 py-4">
                  {" "}
                  Requested by{" "}
                </th>

                <th className="font-semibold text-sm uppercase px-6 py-4"> </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              {data && data.length > 0
                ? data.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div>
                              <input
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label inline-block text-gray-800 ml-5 text-[12px]"
                                for="flexCheckDefault"
                              >
                                {data.Name}
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-[12px]"> {data.requestBy} </p>
                        </td>
                      </tr>
                    );
                  })
                : "No Data"}
            </tbody>
          </div>
        </table>

        <button className="mt-5 min-w-[20%] float-right mr-3 text-xs h-10 m px-10 mb-4 text-white transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-blue800 justify-center tracking-widest">
          Remove Member
        </button>
      </div>
    </>
  );
};

export default ViewDepartment;
