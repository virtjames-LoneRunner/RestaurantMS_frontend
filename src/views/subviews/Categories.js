import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Category from "../../components/Category";

export default function Categories() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/menu-items");
  };

  return (
    <div className="pt-5 px-5">
      <div className="flex justify-end mb-2">
        <TextField size="small" className="bg-white" placeholder="Search" />
      </div>
      <div className="flex justify-end">
        <div className="grid grid-cols-5 gap-4">
          <Category handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
