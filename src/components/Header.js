import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header({ role }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="fixed top-0 w-full shadow-md">
      <div
        className={`flex h-10 bg-blue-500 w-full px-5 ${
          role === "admin" ? "justify-end" : "justify-between"
        }`}
      >
        <div className={`flex py-1 ${role === "admin" ? "hidden" : ""}`}>
          <Button variant="contained" size="small">
            Reservations
          </Button>
        </div>
        <div className="flex py-1 space-x-2">
          <Button variant="contained" size="small">
            User's Name
          </Button>
          <Button variant="contained" size="small" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
