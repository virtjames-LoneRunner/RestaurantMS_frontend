import React, { useEffect, useState } from "react";
import { Breadcrumbs, Link, TextField } from "@mui/material";
import Categories from "./Categories";
import MenuItems from "./MenuItems";
import axios from "axios";

export default function Items({ orders, setOrders }) {
  const [tabs, setTabs] = useState(1);
  const [category, setCategory] = useState("");

  return (
    <div className="h-full">
      <div className="flex items-center justify-between pl-5 py-2 shadow-md sticky top-0 z-20 bg-white">
        <Breadcrumbs aria-label="breadcrumb">
          <button
            className="text-xs md:text-base bg-gray-300 hover:bg-gray-400 py-1 px-1 md:w-24"
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
              className="text-xs md:text-base bg-gray-300 hover:bg-gray-400 py-1 px-1 md:w-24"
              underline="hover"
              color="inherit"
            >
              {category.name}
            </button>
          ) : null}
        </Breadcrumbs>
        {/* <TextField
          placeholder="Search"
          className="bg-white"
          size="small"
          style={{ width: "30%" }}
        /> */}
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
