import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../../../components/Category";

export default function AdminCategories({ setTabs, setCategory }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("/api/categories").then((res) => {
      if (res.status === 200) {
        setCategories(res.data);
      }
    });
  }, []);

  const handleClick = (e) => {
    if (e.target.dataset.id === undefined) {
      return;
    }
    setCategory({ id: e.target.dataset.id, name: e.target.dataset.name });
    setTabs(2);
  };

  return (
    <div className="flex flex-col pt-5">
      <div className="flex-auto grid grid-cols-3 md:grid-cols-6 gap-2">
        {categories.map((category) => (
          <Category
            handleClick={handleClick}
            category={category}
            key={category.code + "-key"}
          />
        ))}
      </div>
    </div>
  );
}
