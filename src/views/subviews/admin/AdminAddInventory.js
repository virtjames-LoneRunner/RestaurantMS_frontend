import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ComboBox from "../../../components/Autocomplete";

export default function AdminAddInventory({ inventoryData = {} }) {
  const { register, handleSubmit } = useForm();
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState();

  const getCategories = () => {
    axios.get(`/api/categories/`).then((res) => {
      if (res.status === 200) {
        let options_temp = [];
        res.data?.map((opt) => {
          options_temp.push({ value: opt.id, name: opt.category });
        });
        setOptions(options_temp);
      }
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleAddInventoryItem = (data) => {
    axios
      .post(`/api/inventory-items/`, {
        data: {
          inventory_item: data.inventory_item,
          item_category: category,
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
      <form
        onSubmit={handleSubmit(handleAddInventoryItem)}
        className="flex flex-col space-y-2 bg-white rounded shadow px-8 py-5"
      >
        <p className="text-lg">
          {`${inventoryData ? "Edit" : "Add"} Inventory Item`}
        </p>
        <TextField
          label="Item Name"
          {...register("inventory_item")}
          error={errors ? (errors.inventory_item ? true : false) : false}
          helperText={errors ? errors.inventory_item : ""}
          defaultValue={inventoryData?.inventory_item}
        />
        <ComboBox
          options={options}
          label={"Category"}
          setSelected={setCategory}
          selected={category}
        />
        <TextField
          label="Unit"
          {...register("unit")}
          error={errors ? (errors.unit ? true : false) : false}
          helperText={errors ? errors.unit : ""}
          defaultValue={inventoryData?.unit}
        />
        <TextField
          label="Quantity"
          {...register("quantity")}
          error={errors ? (errors.quantity ? true : false) : false}
          helperText={errors ? errors.quantity : ""}
          defaultValue={inventoryData?.quantity}
        />
        <TextField
          label="Reorder Quantity"
          {...register("reorder_quantity")}
          error={errors ? (errors.reorder_quantity ? true : false) : false}
          helperText={errors ? errors.reorder_quantity : ""}
          defaultValue={inventoryData?.reorder_quantity}
        />
        <button
          className="bg-pink-500 text-white py-3 shadow-md rounded-md"
          type="submit"
        >
          {`${inventoryData ? "Edit" : "Add"} Inventory Item`}
        </button>
      </form>
    </div>
  );
}
