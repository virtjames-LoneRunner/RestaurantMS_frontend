import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ComboBox from "../../../components/Autocomplete";

export default function AdminAddMenuItems({ category }) {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState();
  const [ingredientsOptions, setIngredientsOptions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});
  useEffect(() => {
    axios.get(`/api/inventory-items`).then((res) => {
      if (res.status === 200) {
        setIngredientsOptions(res.data);
      }
    });
  }, []);

  const handleSelection = (e) => {
    console.log(e.target.value);
    setCurrentIngredient({
      ...currentIngredient,
      [e.target.name]: JSON.parse(e.target.value),
    });
  };
  const handleInput = (e) => {
    setCurrentIngredient({
      ...currentIngredient,
      [e.target.name]: e.target.value,
    });
  };

  const handleRemoveItem = (e) => {
    console.log(e.target.id);
    const item_toRemove = parseInt(e.target.id);
    setIngredients(
      ingredients.filter((item) => item.item.id !== item_toRemove)
    );
  };

  const handleAddMenuItem = (data) => {
    axios
      .post(`/api/menu-items/`, {
        data: {
          ingredient_set: ingredients,
          category: parseInt(category.id),
          available: data.available,
          menu_item: data.menu_item,
          unit: data.unit,
          unit_price: parseFloat(data.unit_price),
        },
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
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleAddMenuItem)}
        className="flex flex-col space-y-2 bg-white px-4 py-4"
      >
        <p className="text-lg">Add Menu Item</p>
        <div className="flex space-x-2">
          <div className="flex flex-col space-y-2">
            <TextField
              label="Category"
              defaultValue={category.name}
              {...register("category")}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox {...register("available")} />}
                label="Available"
                defaultChecked={true}
              />
            </FormGroup>
            <TextField
              {...register("menu_item")}
              label="Item Name"
              error={errors ? (errors.menu_item ? true : false) : false}
              helperText={errors ? errors.menu_item : ""}
            />
            <TextField
              {...register("unit")}
              label="Unit"
              error={errors ? (errors.unit ? true : false) : false}
              helperText={errors ? errors.unit : ""}
            />
            <TextField
              {...register("unit_price")}
              label="Unit Price"
              error={errors ? (errors.unit_price ? true : false) : false}
              helperText={errors ? errors.unit_price : ""}
            />
          </div>
          <div className="flex flex-col justify-between">
            <table className="w-full text-sm text-left text-gray-500 shadow">
              <thead className="text-xs text-gray-700 uppercase bg-blue-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((ingredient, index) => (
                  <tr
                    className="bg-white border-b hover:bg-gray-50"
                    key={ingredient.item.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {ingredient.item.item}
                    </th>
                    <td className="px-6 py-4">{ingredient.unit}</td>
                    <td className="px-6 py-4">{ingredient.quantity}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        className="font-medium text-blue-600 hover:underline"
                        type="button"
                        id={ingredient.item.id}
                        onClick={handleRemoveItem}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="sticky bottom-0">
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <select
                      className="border rounded py-1 pl-1 focus:outline-none focus:ring-blue-500 focus:ring-1 w-26"
                      onChange={handleSelection}
                      name="item"
                    >
                      <option value="">Select Item</option>
                      {ingredientsOptions.map((option) => (
                        <option
                          value={`{ "id": ${option.id}, "item": "${option.inventory_item}", "unit": "${option.unit}" }`}
                          key={option.id}
                        >
                          {option.inventory_item}
                        </option>
                      ))}
                    </select>
                  </th>
                  <td className="px-6 py-4">
                    <input
                      className="border rounded py-1 pl-1 focus:outline-none focus:ring-blue-500 focus:ring-1 w-20"
                      // onChange={handleInput}
                      placeholder="Unit"
                      name="unit"
                      value={currentIngredient.item.unit}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      className="border rounded py-1 pl-1 focus:outline-none focus:ring-blue-500 focus:ring-1 w-20"
                      onChange={handleInput}
                      placeholder="Qty."
                      name="quantity"
                    />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => {
                        setIngredients([...ingredients, currentIngredient]);
                        console.log(ingredients);
                        setCurrentIngredient({});
                      }}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Add
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <button
          className="bg-pink-500 text-white py-3 shadow-md rounded-md"
          type="submit"
        >
          Add Menu Item
        </button>
      </form>
    </div>
  );
}
