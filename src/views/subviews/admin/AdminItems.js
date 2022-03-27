import React, { useEffect, useState } from "react";
import { Breadcrumbs, Button, Link, TextField } from "@mui/material";
import axios from "axios";
import AdminCategories from "./AdminCategories";
import AdminMenuItems from "./AdminMenuItems";
import AdminAddCategory from "./AdminAddCategory";
import AdminAddMenuItems from "./AdminAddMenuItems";

export default function AdminItems({}) {
  const [tabs, setTabs] = useState(1);
  const [category, setCategory] = useState("");

  return (
    <div className="h-full">
      <div className="flex items-center justify-between pr-5 pl-5">
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
        <div>
          {tabs === 1 ? (
            <div className="space-x-1">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setTabs(3)}
              >
                Add Category
              </Button>
              <Button variant="contained" color="secondary">
                Filter
              </Button>
            </div>
          ) : null}
          {tabs === 2 ? (
            <div className="space-x-1">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setTabs(4)}
              >
                Add Menu Item
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setTabs(3)}
              >
                Edit Category
              </Button>
              <Button variant="contained" color="secondary">
                Filter
              </Button>
            </div>
          ) : null}
        </div>
      </div>
      <div>
        {tabs === 1 ? (
          <AdminCategories setTabs={setTabs} setCategory={setCategory} />
        ) : null}
        {tabs === 2 ? <AdminMenuItems category={category} /> : null}
        {tabs === 3 ? <AdminAddCategory /> : null}
        {tabs === 4 ? <AdminAddMenuItems category={category} /> : null}
      </div>
    </div>
  );
}
