import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DrawerMenu from "./DrawerMenu";

export default function Header({ role, auth }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className={`fixed top-0 w-full shadow-md z-50`}>
      <div
        className={`flex h-10 bg-[#00A7E1] w-full pl-1 pr-2 md:px-5 ${"justify-between"}`}
      >
        <div
          className={`flex py-1 md:space-x-2 text-xs md:text-base ${
            role === "admin" ? "hidden" : ""
          }`}
        >
          <button
            className={`px-1 md:px-2 text-white font-medium ${
              auth === "true" ? "" : "hidden"
            }`}
            onClick={() => {
              navigate("/admin");
            }}
          >
            Admin View
          </button>
          <button
            className={`px-1 md:px-2 text-white font-medium ${
              role === "chef" ? "hidden" : ""
            }`}
            onClick={() => {
              navigate("/chef");
            }}
          >
            Chef View
          </button>
          <button
            className={`px-1 md:px-2 text-white font-medium ${
              role === "non-admin" ? "hidden" : ""
            }`}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            POS View
          </button>
          <button
            className={`px-1 md:px-2 text-white font-medium ${
              role === "non-admin" ? "" : "hidden"
            }`}
          >
            Reservations
          </button>
        </div>
        <div
          className={`flex py-1 md:space-x-2 text-xs md:text-base ${
            role === "admin" ? "" : "hidden"
          }`}
        >
          <button
            className={`px-1 md:px-2 text-white font-medium ${
              role === "chef" ? "hidden" : ""
            }`}
            onClick={() => {
              navigate("/chef");
            }}
          >
            Chef View
          </button>
          <button
            className="px-1 md:px-2 text-white font-medium"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            POS View
          </button>
        </div>
        {role === "admin" ? (
          <DrawerMenu handleLogout={handleLogout} />
        ) : (
          <button
            className="text-white text-xs md:text-base"
            onClick={() => {
              if (window.confirm("Are you sure you want to log out?")) {
                handleLogout();
              }
            }}
          >
            Logout
          </button>
        )}

        {/* <div className="flex py-1 space-x-2">
          <button
            className={`${role === "admin" ? "md:hidden" : ""}`}
            // onClick={() => {
            //   (true);
            // }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
}
