import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AdminAddCategory({ category }) {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState();
  const handleAddCategory = (data) => {
    if (!category) {
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
    } else {
      axios
        .patch(`/api/categories/`, {
          data: data,
        })
        .then((res) => {
          if (res.status === 201) {
            alert(res.data.message);
            window.location.replace("/admin/menu-items");
          }
        });
    }
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <form
        onSubmit={handleSubmit(handleAddCategory)}
        className="flex flex-col space-y-2 bg-white px-4 py-4"
      >
        {category ? (
          <input className="hidden" {...register("id")} value={category?.id} />
        ) : null}
        <p className="text-lg">{category ? "Edit Category" : "Add Category"}</p>
        <TextField
          label="Category Name"
          defaultValue={category?.name ? category?.name : ""}
          {...register("category")}
          error={errors ? (errors.category ? true : false) : false}
          helperText={errors ? errors.category : ""}
        />
        <TextField
          label="Category Code"
          defaultValue={category?.code ? category?.code : ""}
          {...register("code")}
          error={errors ? (errors.code ? true : false) : false}
          helperText={errors ? errors.code : ""}
        />
        <button
          className="bg-pink-500 text-white py-3 shadow-md rounded-md"
          type="submit"
        >
          {category ? "Save Changes" : "Add"}
        </button>
      </form>
    </div>
  );
}
