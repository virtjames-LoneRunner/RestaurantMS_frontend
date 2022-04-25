import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AdminAddCategory() {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState();
  const handleAddCategory = (data) => {
    axios
      .post(`/api/categories/`, {
        data: data,
      })
      .then((res) => {
        if (res.status === 201) {
          alert(res.data.message);
          window.location.replace("/admin/menu-items");
        }
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div className="flex justify-center items-center mt-5">
      <form
        onSubmit={handleSubmit(handleAddCategory)}
        className="flex flex-col space-y-2 bg-white px-4 py-4"
      >
        <p className="text-lg">Add A Category</p>
        <TextField
          label="Category Name"
          {...register("category")}
          error={errors ? (errors.category ? true : false) : false}
          helperText={errors ? errors.category : ""}
        />
        <TextField
          label="Category Code"
          {...register("code")}
          error={errors ? (errors.code ? true : false) : false}
          helperText={errors ? errors.code : ""}
        />
        <button
          className="bg-pink-500 text-white py-3 shadow-md rounded-md"
          type="submit"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
