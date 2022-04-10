import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/input/CustomInput";
import hnjlogo from "../static/img/HNJplus.png";

import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const handleLogin = (data) => {
    axios
      .post(`/api/auth/`, data)
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem("user_id", response.data.user_id);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("token", "Token " + response.data.token);
          localStorage.setItem("auth", response.data.auth);
          if (response.data.auth === true) {
            navigate("/admin/");
          } else {
            navigate("/dashboard");
          }
        }
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div className="bg-blue-500 flex justify-center items-center w-full h-full">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col justify-center bg-white px-5 pb-5 w-1/4 shadow-md space-y-2"
      >
        <img src={hnjlogo} alt="Company Logo" className="pt-5 px-5" />
        <div>
          <CustomInput
            name="username"
            register={register}
            errors={errors}
            label="Username"
            required={true}
          />
        </div>
        <div>
          <CustomInput
            name="password"
            register={register}
            errors={errors}
            label="Password"
            type="password"
            required={true}
          />
        </div>
        <div>
          <Button variant="contained" fullWidth type="submit">
            Login
          </Button>
        </div>
        <a href="/login-code">Login with Code</a>
      </form>
    </div>
  );
}
