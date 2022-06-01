import React, { useEffect, useState } from "react";
import { Breadcrumbs, Button, Link, TextField } from "@mui/material";
import axios from "axios";
import AdminCategories from "./AdminCategories";
import AdminMenuItems from "./AdminMenuItems";
import AdminAddCategory from "./AdminAddCategory";
import AdminAddMenuItems from "./AdminAddMenuItems";

export default function AdminItems() {
  const [tabs, setTabs] = useState(1);
  const [category, setCategory] = useState(null);
  const [menuItem, setMenuItem] = useState(null);

  return (
    <div className="h-full pt-5">
      <div className="flex items-center justify-between pr-5">
        <Breadcrumbs aria-label="breadcrumb">
          <button
            className="bg-gray-500 text-white py-1 px-2 md:py-2 md:w-24 text-sm md:text-base"
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
              className="bg-gray-500 text-white py-1 px-2 md:py-2 md:w-24 text-sm md:text-base"
              underline="hover"
              color="inherit"
            >
              {category.name}
            </button>
          ) : null}
        </Breadcrumbs>
        <div className="">
          {tabs === 1 ? (
            <div className="space-x-1">
              <button
                onClick={() => {
                  setCategory(null);
                  setTabs(3);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 text-xs md:text-base"
              >
                Add Category
              </button>
              {/* <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 text-xs md:text-base">
                Filter
              </button> */}
            </div>
          ) : null}
          {tabs === 2 ? (
            <div className="flex flex-row space-x-1">
              <button
                onClick={() => {
                  setMenuItem(null);
                  setTabs(4);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 text-xs md:text-base"
              >
                Add Item
              </button>
              <button
                onClick={() => setTabs(3)}
                className="bg-pink-500 hover:bg-pink-600 text-white p-2 text-xs md:text-base"
              >
                Edit Category
              </button>
              {/* <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 text-xs md:text-base">
                Filter
              </button> */}
            </div>
          ) : null}
        </div>
      </div>
      <div>
        {tabs === 1 ? (
          <AdminCategories setTabs={setTabs} setCategory={setCategory} />
        ) : null}
        {tabs === 2 ? (
          <AdminMenuItems
            category={category}
            setMenuItem={setMenuItem}
            setTabs={setTabs}
          />
        ) : null}
        {tabs === 3 ? <AdminAddCategory category={category} /> : null}
        {tabs === 4 ? (
          <AdminAddMenuItems category={category} menuItem={menuItem} />
        ) : null}
      </div>
    </div>
  );
}
