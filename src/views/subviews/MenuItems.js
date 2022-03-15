import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "../../components/MenuItem";

export default function MenuItems() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/categories");
  };
  return (
    <div className="pt-5 px-5">
      <div className="flex justify-between mb-2 pl-11">
        <div
          className="bg-white flex items-center px-1 shadow-md text-sm"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          Back to Categories
        </div>
        <TextField size="small" className="bg-white" placeholder="Search" />
      </div>
      <div className="flex justify-end">
        <div className="grid grid-cols-5 gap-4">
          <MenuItem />
        </div>
      </div>
    </div>
  );
}
