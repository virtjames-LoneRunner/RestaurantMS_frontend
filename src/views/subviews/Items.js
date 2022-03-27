import React, { useEffect, useState } from "react";
import { Breadcrumbs, Link, TextField } from "@mui/material";
import Categories from "./Categories";
import MenuItems from "./MenuItems";
import axios from "axios";

export default function Items({ orders, setOrders }) {
  const [tabs, setTabs] = useState(1);
  const [category, setCategory] = useState("");

  return (
    <div>
      <div className="flex items-center justify-between pr-6 pl-5">
        <Breadcrumbs aria-label="breadcrumb">
          <button
            className="bg-gray-500 rounded-md shadow-md text-white py-2 w-24"
            underline="hover"
            color="inherit"
            onClick={() => {
              setTabs(1);
            }}
          >
            Categories
          </button>
          {tabs === 2 ? (
            <button
              className="bg-gray-500 rounded-md shadow-md text-white py-2 w-24"
              underline="hover"
              color="inherit"
            >
              {category.name}
            </button>
          ) : null}
        </Breadcrumbs>
        <TextField placeholder="Search" className="bg-white" size="small" />
      </div>
      <div>
        {tabs === 1 ? (
          <Categories setTabs={setTabs} setCategory={setCategory} />
        ) : (
          <MenuItems
            category={category}
            orders={orders}
            setOrders={setOrders}
          />
        )}
      </div>
    </div>
  );
}
