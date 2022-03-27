import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import ComboBox from "../../../components/Autocomplete";

export default function AdminAddInventory() {
  const [data, setData] = useState({
    inventory_item: "",
    unit: "",
    quantity: "",
    reorder_quantity: "",
  });
  const handleInput = (e) => {
    console.log(category);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState();

  const handleAddInventoryItem = () => {
    axios
      .post(`/api/inventory-items/`, {
        data: {
          inventory_item: data.inventory_item,
          category: category,
          unit: data.unit,
          quantity: parseFloat(data.quantity),
          reorder_quantity: data.reorder_quantity,
          // unit_price: parseFloat(data.unit_price),
        },
      })
      .then((res) => {
        if (res.status === 201) {
          alert(res.data.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col space-y-2 bg-white rounded shadow px-8 py-5">
        <p className="text-lg">Add a new inventory item</p>
        <TextField
          label="Item Name"
          name="inventory_item"
          value={data.inventory_item}
          onChange={handleInput}
          error={errors ? (errors.inventory_item ? true : false) : false}
          helperText={errors ? errors.inventory_item : ""}
        />
        <ComboBox
          options={options}
          label={"Category"}
          setSelected={setCategory}
          selected={category}
        />
        <TextField
          label="Unit"
          name="unit"
          value={data.unit}
          onChange={handleInput}
          error={errors ? (errors.unit ? true : false) : false}
          helperText={errors ? errors.unit : ""}
        />
        <TextField
          label="Quantity"
          name="quantity"
          value={data.quantity}
          onChange={handleInput}
          error={errors ? (errors.quantity ? true : false) : false}
          helperText={errors ? errors.quantity : ""}
        />
        <TextField
          label="Reorder Quantity"
          name="reorder_quantity"
          value={data.reorder_quantity}
          onChange={handleInput}
          error={errors ? (errors.reorder_quantity ? true : false) : false}
          helperText={errors ? errors.reorder_quantity : ""}
        />
        <button
          className="bg-pink-500 text-white py-3 shadow-md rounded-md"
          onClick={handleAddInventoryItem}
        >
          Add Inventory Item
        </button>
      </div>
    </div>
  );
}
