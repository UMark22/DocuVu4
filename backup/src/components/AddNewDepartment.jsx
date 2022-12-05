import axios from "axios";
import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { json, useNavigate, Link } from "react-router-dom";
// import Swal from 'sweetalert2'
import Modal from "react-modal";
import { MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";
import { RiBuilding4Fill } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";

import CheckboxTree from "react-checkbox-tree";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

// const Sample = [
//   {
//     Parent : ["Mark",
//     children :
//      [

//       "Zack, Wassup"
//     ], "Joseph" , "Jason"],

//   }
// ];

const nodes = [
  {
    id: 1,
    value: "HR",
    label: "Admin",
    children: [
      {
        pid: 1,
        value: "201 Files",
        label: "Delivery Receipt",
      },
      {
        pid: 1,
        value: "P1 child 2",
        label: "Payment Request",
      },

      { pid: 1, value: "P1 child 3", label: "Purchase Request Form" },
    ],
  },
  {
    id: 2,
    value: "Parent 2",
    label: "IT",
    children: [
      { pid: 2, value: "P2 child 1", label: "Service Report" },
      { pid: 2, value: "P2 child 2", label: "Maintenance Request Form" },
    ],
  },
  {
    id: 3,
    value: "Parent 3",
    label: "Sales",
    children: [
      { pid: 3, value: "P3 child 3.1", label: "Invoices" },
      { pid: 3, value: "P3 child 3.2", label: "Official Receipt" },
      {
        pid: 3,
        value: "P3 child 4",
        label: "Contract",
      },
    ],
  },
];
// const ield = { dataSource: nodes, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };

// const data = {
//   checked: [],
//   expanded: [],
// };

const AddNewDepartment = () => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
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
      <div className="px-10 mt-10 ml-[25%] bg-white w-[50%] h-[400px] shadow-2xl shadow-secondary-600 border rounded-lg">
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
            <p className="text-[16px] font-semibold">Setup New Department</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
          <div className="w-full  px-3  md:mb-0 mt-4  ">
            <input
              className="text-xs appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Department"
            />
            {/* {firstNameError ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill out the firstname.
                  </p>
                ) : null} */}
          </div>
        </div>
        <div className="ml-5 w-full mb-3 h-[150px] overflow-y-scroll overflow--scroll ">
          {" "}
          <CheckboxTree
            nodes={nodes}
            checked={checked}
            expanded={expanded}
            onCheck={(checkedData) => {
              setChecked(checkedData);
            }}
            onExpand={(expandedData) => {
              setExpanded(expandedData);
            }}
          />
        </div>

        <button className="relative min-w-[30%] float-right mr-3 h-10 m px-10 mb-4 text-white transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-blue800 justify-center tracking-widest">
          <RiBuilding4Fill className="absolute mr-2 mt-1 text-[17px]" />{" "}
          <span className="ml-5 text-[11px]">New Department</span>
        </button>
      </div>
    </>
  );
};

export default AddNewDepartment;
