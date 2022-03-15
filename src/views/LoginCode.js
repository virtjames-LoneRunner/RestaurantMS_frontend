import { TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginKeypad from "./subviews/LoginKeypad";

export default function LoginCode() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard/categories");
  };
  return (
    <div className="bg-blue-500 flex justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center bg-white px-5 py-5 w-1/4 shadow-md space-y-2">
        <div>
          <LoginKeypad />
        </div>
        <div>
          <Button variant="contained" fullWidth onClick={handleLogin}>
            Login
          </Button>
        </div>
        <a href="/login">Login with username</a>
      </div>
    </div>
  );
}