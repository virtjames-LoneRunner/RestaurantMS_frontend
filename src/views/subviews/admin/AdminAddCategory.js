import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

export default function AdminAddCategory() {
  const [data, setData] = useState({
    category: "",
    code: "",
  });
  const [errors, setErrors] = useState();
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddCategory = () => {
    axios
      .post(`/api/categories/`, {
        data: data,
      })
      .then((res) => {
        if (res.status === 201) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col space-y-2 bg-white px-4 py-4">
        <p className="text-lg">Add A Category</p>
        <TextField
          label="Category Name"
          name="category"
          onChange={handleInput}
          error={errors ? (errors.category ? true : false) : false}
          helperText={errors ? errors.category : ""}
        />
        <TextField
          label="Category Code"
          name="code"
          onChange={handleInput}
          error={errors ? (errors.code ? true : false) : false}
          helperText={errors ? errors.code : ""}
        />
        <button
          className="bg-pink-500 text-white py-3 shadow-md rounded-md"
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>
    </div>
  );
}
