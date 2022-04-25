import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DrawerMenu from "./DrawerMenu";

export default function Header({ role }) {
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
      <div className={`flex h-10 bg-blue-500 w-full px-5 ${"justify-between"}`}>
        <div
          className={`flex py-1 space-x-2 ${role === "admin" ? "hidden" : ""}`}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              navigate("/admin");
            }}
          >
            Admin View
          </Button>
          <Button variant="contained" size="small">
            Reservations
          </Button>
        </div>
        <div className={`flex py-1 ${role === "admin" ? "" : "hidden"}`}>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            POS View
          </Button>
        </div>
        {role === "admin" ? (
          <DrawerMenu handleLogout={handleLogout} />
        ) : (
          <button
            className="text-white"
            onClick={() => {
              handleLogout();
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
