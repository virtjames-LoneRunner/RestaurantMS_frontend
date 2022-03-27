import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function AdminAddMenuItems({ category }) {
  const [data, setData] = useState({
    category: category.id,
    available: true,
    menu_item: "",
    unit: "",
    unit_price: "",
  });
  const [errors, setErrors] = useState();
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleToggle = (e) => {
    setData({
      ...data,
      [e.target.name]: data[e.target.name] ? false : true,
    });
  };
  const handleAddMenuItem = () => {
    axios
      .post(`/api/menu-items/`, {
        data: {
          category: parseInt(data.category),
          available: data.available,
          menu_item: data.menu_item,
          unit: data.unit,
          unit_price: parseFloat(data.unit_price),
        },
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
        <p className="text-lg">Add Menu Item</p>
        <TextField label="Category" value={category.name} />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.available}
                name="available"
                onChange={handleToggle}
              />
            }
            label="Available"
          />
        </FormGroup>
        <TextField
          label="Item Name"
          onChange={handleInput}
          name="menu_item"
          error={errors ? (errors.menu_item ? true : false) : false}
          helperText={errors ? errors.menu_item : ""}
        />
        <TextField
          label="Unit"
          onChange={handleInput}
          name="unit"
          error={errors ? (errors.unit ? true : false) : false}
          helperText={errors ? errors.unit : ""}
        />
        <TextField
          label="Unit Price"
          onChange={handleInput}
          name="unit_price"
          error={errors ? (errors.unit_price ? true : false) : false}
          helperText={errors ? errors.unit_price : ""}
        />
        <button
          className="bg-pink-500 text-white py-3 shadow-md rounded-md"
          onClick={handleAddMenuItem}
        >
          Add Menu Item
        </button>
      </div>
    </div>
  );
}
