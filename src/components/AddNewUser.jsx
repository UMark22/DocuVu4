import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import dateFormat from "dateformat";
import { json, useNavigate, Link } from "react-router-dom";
// import Swal from 'sweetalert2'
import Modal from "react-modal";
import { RiArrowGoBackLine } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";

import Input from "../common/NewUserInput";
import Select from "../common/NewUserSelect";
import "react-toastify/dist/ReactToastify.css";

// import { Controller } from "react-hook-form";

//Sample Departments

var dataDept = [
  { value: "Admin", label: "Admin" },
  { value: "IT", label: "IT" },
  { value: "Sales", label: "Sales" },
  { value: "HR", label: "HR" },
  { value: "Accountant", label: "Accountant" },
];

var dataLockOut = [
  { value: "0", label: "No Lock Out" },
  { value: "3", label: "Lock Out 3" },
  { value: "5", label: "Lock Out 5" },
];

const userData = {
  firstName: "",
  lastName: "",
  employeeId: "",
  phoneNumber: "",
  emailAddress: "",
  // userName: "",
  generateUsername: "",
  department: [],
  lockOut: [],
  requestBy: "",
  firstNameError: false,
  lastNameError: false,
  employeeIdError: false,
  phoneNumberError: false,
  phoneNumberValid: false,
  emailAddressError: false,
  departmentError: "",
  lockOutError: "",
  requestByError: "",
};

const reducer = (user, action) => {
  if (action.type === "userName") {
    userData.userNameError = true;
  }
  if (action.type === "password") {
    userData.userPassError = true;
  }
  if (action.type === "error") {
    userData.loginError = true;
  }
  if (action.type === "loading") {
    userData.isLoading = true;
  }

  return { ...user, [action.input]: action.value };
};

const AddUNewUSer = () => {
  const [user, dispatch] = useReducer(reducer, userData);

  // const selectOnChange = (e) => {
  //   const actionSelect = {
  //     input: e.target.id,
  //     value: e.target.value,
  //   };
  // };

  const inputOnChange = (e) => {
    const action = {
      input: e.target.id,
      value: e.target.value,
    };
    dispatch(action);

    if (action.input === "phoneNumber") {
      var phoneno = /^[0-9\b]+$/;
      var sample = action.value;
      if (sample !== phoneno) {
        //  alert('Please provide valid phone number');
        userData.phoneNumberValid = false;
      } else {
        userData.phoneNumberValid = true;
      }
    }

    if (action.input === "firstName") {
      if (action.value === "") {
        userData.firstNameError = true;
      } else {
        userData.firstNameError = false;
      }
    } else if (action.input === "lastName") {
      if (action.value === "") {
        userData.lastNameError = true;
      } else {
        userData.lastNameError = false;
      }
    } else if (action.input === "employeeId") {
      if (action.value === "") {
        userData.employeeIdError = true;
      } else {
        userData.employeeIdError = false;
      }
    } else if (action.input === "phoneNumber") {
      if (action.value === "") {
        userData.phoneNumberError = true;
      } else {
        userData.phoneNumberError = false;
      }
    } else if (action.input === "emailAddress") {
      if (action.value === "") {
        userData.emailAddressError = true;
      } else {
        userData.emailAddressError = false;
      }
    }
  };

  const navigate = useNavigate();
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [emailAdd, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [groupID, setGroupID] = useState("");
  // const [lockOut, setLockOut] = useState("");
  // const [dateExpiration, setDateExpiration] = useState("");

  // const [firstNameError, setFirstNameError] = useState("");
  // const [lastNameError, setLastNameError] = useState("");
  // const [emailAddError, setEmailError] = useState("");
  // // const [userNameError, setUserNameError] = useState("");
  // // const [passwordError, setPasswordError] = useState("");
  // // const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // const [groupIDError, setGroupIDError] = useState("");
  // const [lockOutError, setLockOutError] = useState("");
  // const [dateExpirationError, setDateExpirationError] = useState("");

  const [showResults, setShowResults] = useState(false);

  // //Empty FirstName
  // function handleFirstName(e) {
  //   let firstNameValue = e.target.value;
  //   if (firstNameValue === "") {
  //     setFirstNameError(true);
  //   } else {
  //     setFirstNameError(false);
  //     setFirstName(firstNameValue);
  //   }
  // }

  //Empty LastName
  // function handleLastName(e) {
  //   let lastNameValue = e.target.value;

  //   if (lastNameValue === "") {
  //     setLastNameError(true);
  //   } else {
  //     setLastNameError(false);
  //     setLastName(lastNameValue);
  //   }
  // }

  //Empty EmailAddress
  // function handleEmailAddress(e) {
  //   let emailAddressValue = e.target.value;

  //   if (emailAddressValue === "") {
  //     setEmailError(true);
  //   } else {
  //     setEmailError(false);
  //     setEmail(emailAddressValue);
  //   }
  // }

  //Empty UserName
  // function handleUserName(e) {
  //   let userNameValue = e.target.value;

  //   if (userNameValue === "") {
  //     //    setUserNameError(true);
  //   } else {
  //     //    setUserNameError(false);
  //     setUserName(userNameValue);
  //   }
  // }

  // //Empty Password
  // function handlePassword (e)
  // {
  //    let passwordValue = e.target.value;

  //    if (passwordValue === "" )
  //    {
  //        setPasswordError(true);

  //    }else {
  //        setPasswordError(false);
  //        setPassword(passwordValue);
  //    }

  // }

  // //Empty ConfirmPassword
  // function handleConfirmPassword (e)
  // {
  //    let confirmPasswordValue = e.target.value;

  //    if (confirmPasswordValue === "" )
  //    {
  //        setConfirmPasswordError(true);

  //    }else {
  //        setConfirmPasswordError(false);
  //        setConfirmPassword(confirmPasswordValue);
  //    }

  // }

  //Empty DateExpiration
  // function handleDateExpire(e) {
  //   let dateExpirevalue = e.target.value;

  //   if (dateExpirevalue === "") {
  //     setDateExpirationError(true);
  //   } else {
  //     setDateExpirationError(false);
  //     setDateExpiration(dateExpirevalue);
  //   }
  // }

  //Empty Group ID
  // function handleGroupId(e) {
  //   let groupIdValue = e.target.value;

  //   if (groupIdValue === "NoValue") {
  //     setGroupIDError(true);
  //   } else {
  //     setGroupIDError(false);
  //     setGroupID(groupIdValue);
  //   }
  // }

  // Empty LockOut
  // function handleLockOut(e) {
  //   let lockOutValue = e.target.value;
  //   if (lockOutValue === "NoValue") {
  //     setLockOutError(true);
  //   } else {
  //     setLockOutError(false);
  //     setLockOut(lockOutValue);
  //   }
  // }

  var newFirst = user.firstName
    .split(" ")
    .map((word) => word[0])
    .join("");
  const generateUsername =
    newFirst.toLocaleLowerCase() + user.lastName.toLowerCase();

  const createdDate = dateFormat("yyyy-mm-dd");
  // const newDateExpire = dateFormat(dateExpiration, "yyyy-mm-dd");

  var characters =
    "1234567890ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*()_+";
  var lenString = 12;
  var randomstring = "";

  //loop to select a new character in each iteration
  for (var i = 0; i < lenString; i++) {
    var rnum = Math.floor(Math.random() * characters.length);
    randomstring += characters.substring(rnum, rnum + 1);
  }

  const genratedPassword = randomstring;

  const data = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    employeeId: userData.employeeId,
    phoneNumber: userData.phoneNumber,
    emailAddress: userData.emailAdd,
    userName: generateUsername,
    password: genratedPassword,
    groupID: userData.groupID,
    creationDate: createdDate,
    // expireDate: newDateExpire,
    lockOut: userData.lockOut,
    requestBy: userData.requestBy,
    Type: "Add",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (
    //   firstName === "" ||
    //   lastName === "" ||
    //   emailAdd === "" ||
    //   lockOut === "NoValue" ||
    //   groupID === "NoValue"
    // ) {
    //   setFirstNameError(true);
    //   setLastNameError(true);
    //   setEmailError(true);
    //   //  setUserNameError(true);
    //   //  setPasswordError(true);
    //   //  setConfirmPasswordError(true);
    //   setLockOutError(true);
    //   setGroupIDError(true);
    //   setShowResults(true);

    //   //   <Link to={``} />

    //   //  setUserPassError(true);
    // } else {
    //   const url = "http://192.168.6.52:9090/";
    //   axios
    //     .post(`${url}api/Users/AddUsers`, data)
    //     .then((result) => {
    //       json(result.ResponseMessage);

    //       if (result.data.ResponseMessage === "User Added") {
    //         var CryptoJS = require("crypto-js");
    //         var ciphertext = CryptoJS.AES.encrypt(
    //           JSON.stringify(genratedPassword),
    //           "my-secret-key@123"
    //         ).toString();
    //         navigate(`/user/addusers/${ciphertext}/`, {
    //           state: { userName: generateUsername },
    //         });
    //       } else if (result.data.ResponseMessage === "Existing User") {
    //         alert("Username is Already Exist ");
    //       } else {
    //         alert("Looks Like Something Happens");
    //       }
    //     })
    //     .catch((error) => {
    //       alert(error);
    //     });
    // }
  };

  return (
    <>
      <div className="w-full h-full bg-gray-100 overflow-hidden">
        <div className=" px-10  mb-10 mt-2 ml-[25%]  w-[45%] h-[98%] border bg-white border-gray-300 shadow-md  rounded-lg">
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
              <p className="text-[16px] font-semibold">Add New User</p>
            </div>
          </div>

          {/* start */}

          <form className=" w-full h-full">
            <div className="w-full text-center md:mb-0 shadow-2xl  ">
              <p className="text-xm text-center  font-semibold">
                Basic Information
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
              <div className="w-full md:w-1/2 px-3  md:mb-0 mt-4  ">
                <Input
                  name="firstName"
                  id="firstName"
                  onChange={inputOnChange}
                  placeHolder="FirstName"
                  type="text"
                />
                {userData.firstNameError ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill out the firstname.
                  </p>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3 mt-4 ">
                <Input
                  name="lastName"
                  id="lastName"
                  onChange={inputOnChange}
                  placeHolder="LastName"
                  type="text"
                />
                {userData.lastNameError ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill out the lastname.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
              <div className="w-full md:w-1/2 px-3  md:mb-0   ">
                <Input
                  name="employeeId"
                  id="employeeId"
                  onChange={inputOnChange}
                  placeHolder="Employee ID"
                  type="text"
                />
                {userData.employeeIdError ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill out the Employee ID.
                  </p>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3 ">
                <Input
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={inputOnChange}
                  placeHolder="Phone Number"
                  type="text"
                  maxLength={12}
                />

                {userData.phoneNumberValid ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill valid Phone Number.
                  </p>
                ) : null}

                {userData.phoneNumberError ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill out the Phone Number.
                  </p>
                ) : null}
              </div>
            </div>

            <div className=" w-full px-3  mb-2 ">
              <div className="px-3">
                <Input
                  name="emailAddress"
                  id="emailAddress"
                  onChange={inputOnChange}
                  placeHolder="Email Address"
                  type="email"
                />
                {userData.emailAddressError ? (
                  <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                    Please fill out the Email Address.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="w-full text-center md:mb-0 shadow-2xl">
              <p className="text-xm text-center  font-semibold">
                Account Setup
              </p>
            </div>

            <div className=" flex justify-end">
              <div className="dropdown inline-block relative">
                <div className="bg-gray-200 text-gray-700 cursor-pointer font-semibold py-2 px-4 rounded inline-flex items-center mr-6">
                  <span className="mr-1 text-[12px]">
                    <AiOutlineRight />
                  </span>
                </div>

                <div className="border border-gray-300 dropdown-menu absolute hidden text-gray-700 pt-1 w-[240px] h-[300px] ml-[70px] -mt-[80px] rounded-md">
                  <div className="bg-white w-full h-full ">
                    <div className="justify-center text-center mb-1">
                      Access Control
                    </div>

                    <ul class="w-full font-medium text-gray-900 bg-white ">
                      <li class="w-full  border-b border-gray-200  ">
                        <div class="flex items-center pl-3">
                          <input
                            id="view-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="view-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            View Document
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 ">
                        <div class="flex items-center pl-3">
                          <input
                            id="upload-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="upload-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Upload Document
                          </label>
                        </div>
                      </li>
                      <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="donwload-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="donwload-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Download Document
                          </label>
                        </div>
                      </li>
                      <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="edit-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="edit-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Edit Document Properties
                          </label>
                        </div>
                      </li>
                      <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="delete-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="delete-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Delete Uploaded Document
                          </label>
                        </div>
                      </li>
                      <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="print-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="print-checkbox"
                            class="py-3 ml-2 w-full text-[13px] font-medium text-gray-900 dark:text-gray-300"
                          >
                            Print Document
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-2">
                <Input
                  name="userName"
                  id="userName"
                  value={generateUsername}
                  onChange={inputOnChange}
                  placeHolder="UserName"
                  type="text"
                  disabled
                />
                {/* {userNameError? <p className="text-red-500 text-xs italic ml-4">Please fill out this field.</p>  :null} */}
              </div>

              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 mt-2">
                <div className=" ">
                  <Select
                    id="selectDept"
                    options={dataDept}
                    onChange={inputOnChange}
                  />

                  {userData.groupIDError ? (
                    <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                      Please Select Group
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-3 ml-2 mr-2 ">
              <div className="w-full md:w-1/2 px-3 ">
                <div className="">
                  <Select
                    options={dataLockOut}
                    onChange={(e) => alert(e.target.value)}
                  />

                  {userData.lockOutError ? (
                    <p className="text-red-500 text-[11px] italic ml-4 -mt-2">
                      Please Select Lock Out
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-1 md:mb-0 ">
                <Input
                  name="requestBy"
                  id="requestBy"
                  onChange={inputOnChange}
                  placeHolder="Requested By"
                  type="text"
                />
                {userData.userNameError ? (
                  <p className="text-red-500 text-xs italic ml-4">
                    Please fill out this field.
                  </p>
                ) : null}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="min-w-[30%] float-right mr-3 -mt-1 text-xs h-10  px-10  text-white transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-blue800 justify-center tracking-widest"
            >
              Save New User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUNewUSer;
