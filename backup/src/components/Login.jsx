import React, { useEffect } from "react";
import LogoImg from "../assets/loginlogo.png";
import Ubixlogo from "../assets/Docuvu_logo1.png";
// import Nxp from '../assets/logonxp1.png'
import { FaUser, FaKey } from "react-icons/fa";
// import Swal from 'sweetalert2'
// import axios from "axios";
import { useState, useReducer } from "react";
// import {sha1} from 'crypto-hash';
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
// import Component from '../components/shared/Header';
// export const userContext = React.createContext();
import { AiFillWarning } from "react-icons/ai";
import Input from "../common/Input";
import userService from "../Service/userService";

const initialState = {
  userName: "",
  password: "",
  userNameError: false,
  userPassError: false,
  loginError: false,
  isLoading: false,
};

const reducer = (user, action) => {
  if (action.type === "userName") {
    initialState.userNameError = true;
  }
  if (action.type === "password") {
    initialState.userPassError = true;
  }
  if (action.type === "error") {
    initialState.loginError = true;
  }
  if (action.type === "loading") {
    initialState.isLoading = true;
  }

  return { ...user, [action.input]: action.value };
};

const Login = () => {
  const [user, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const inputOnChange = (e) => {
    const action = {
      input: e.target.id,
      value: e.target.value,
    };
    dispatch(action);

    if (action.input === "userName") {
      if (action.value === "") {
        initialState.userNameError = true;
      } else {
        initialState.userNameError = false;
      }
    } else if (action.input === "password") {
      if (action.value === "") {
        initialState.userPassError = true;
      } else {
        initialState.userPassError = false;
      }
    }
  };

  const tempResult = {
    userName: user.userName,
    password: user.password,
    Type: "Signin",
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (user.userName === "") {
      dispatch({ type: "userName" });
    }
    if (user.password === "") {
      dispatch({ type: "password" });
    } else {
      try {
        dispatch({ type: "loading" });
        initialState.loginError = false;
        const result = await userService.logIn(tempResult);
        if (result.data.ResponseMessage === "Valid User") {
          setTimeout(() => {
            navigate("/dashboard", { name: "Jane" });
          });
          initialState.loginError = false;
          initialState.isLoading = false;
        }
        if (result.data.ResponseMessage === "Invalid User") {
          dispatch({ type: "error" });
          initialState.isLoading = false;
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  useEffect(() => {
    const keyDownHandler = async (event) => {
      // console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        if (user.userName === "") {
          dispatch({ type: "userName" });
        }
        if (user.password === "") {
          dispatch({ type: "password" });
        } else {
          try {
            dispatch({ type: "loading" });
            initialState.loginError = false;
            const result = await userService.logIn(tempResult);
            if (result.data.ResponseMessage === "Valid User") {
              setTimeout(() => {
                navigate("/dashboard", { name: "Jane" });
              }, 2000);
              initialState.loginError = false;
              initialState.isLoading = false;
            }
            if (result.data.ResponseMessage === "Invalid User") {
              dispatch({ type: "error" });
              initialState.isLoading = false;
            }
          } catch (error) {
            alert(error);
          }
        }
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <div className="h-screen sm:grid-cols-1 font-body grid place-items-center bg-white">
      <div className="sm:block bg-transparent  rounded-xl">
        <div className="max-w-[430px] w-full px-8 bg-transparent">
          <div className="mb-5">
            <img src={LogoImg} alt="DocuVu" className="w-[400px] h-[100px]" />
          </div>

          <form className="block">
            <div className=" relative flex items-center text-gray-500 focus-within:text-gray-500">
              <FaUser className="w-4 h-4 absolute ml-3  pointer-events-none" />
              <Input
                name="userName"
                id="userName"
                onChange={inputOnChange}
                placeHolder="UserName"
                type="text"
              />
            </div>

            <div className="relative flex ml-2 mb-5">
              {initialState.userNameError && (
                <AiFillWarning className="mt-1 w-4 h-4 text-rose-500 absolute  pointer-events-none" />
              )}
              {initialState.userNameError && (
                <span className="ml-5 mt-[5px] text-[11.5px] italic text-rose-500 font-semibold ">
                  Enter your username
                </span>
              )}
            </div>

            <div className="relative flex items-center text-gray-500 focus-within:text-gray-500">
              <FaKey className="w-4 h-4 absolute ml-3  pointer-events-none" />
              <Input
                name="password"
                id="password"
                onChange={inputOnChange}
                placeHolder="Password"
                type="password"
              ></Input>
            </div>

            <div className="relative flex ml-2 mb-1">
              {initialState.userPassError && (
                <AiFillWarning className="mt-1 w-4 h-4 text-rose-500 absolute  pointer-events-none" />
              )}
              {initialState.userPassError ? (
                <span className="ml-5 mt-[5px] text-[11.5px] italic text-rose-500 font-semibold ">
                  Enter your password
                </span>
              ) : null}
            </div>
          </form>

          <div className="flex justify-between py-3 mb-5 ">
            <div className="text-left flex relative">
              <input type="checkbox" className="" />
              <p className="text-[12px] ml-1">Remember me </p>
            </div>

            <p className="text-blue-700 text-[13px] font-medium">
              {" "}
              <a href="/forgotpassword">Forgot Password?</a>
            </p>
          </div>

          <div className="text-center mb-2">
            {initialState.loginError ? (
              <span className="text-[10.5px] text-red-600 italic font-semibold ">
                Username and Password is incorrect, Try again!
              </span>
            ) : null}
          </div>
          {initialState.isLoading && (
            <div className="ml-[40%] mb-[10%] -mt-[10%]">
              <ReactLoading
                type="spin"
                color="#0000FF"
                height={40}
                width={60}
                className=""
              />
            </div>
          )}

          <button
            onClick={handleLogin}
            id="btnLog"
            className=" h-10 w-full px-10 mb-10 text-white transition-colors duration-150 bg-[#0972B8] rounded-full focus:shadow-outline hover:bg-blue800 justify-center tracking-widest"
          >
            <span>Login </span>
          </button>

          <div className="flex justify-center items-center mt-3">
            <a href="https://ubix.com.ph/">
              {" "}
              <img
                src={Ubixlogo}
                alt="DocuVu"
                className="w-25 h-12 mb-[40px] "
              />
            </a>
            <p className="absolute text-[12px]  mt-[50px]">
              {" "}
              © Copyright 2022 | UBIX Corporation | All Rights Reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
