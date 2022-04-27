import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "../../../components/MenuItem";

export default function AdminMenuItems({ category }) {
  // Manipulate customer's orders
  const handleAddOrder = (e) => {};

  // Display Menu Items when category changes (user clicks on category)
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    axios.get(`/api/menu-items?category=${category.id}`).then((res) => {
      setMenuItems(res.data);
    });
  }, [category]);

  return (
    <div className="flex flex-col pt-5">
      <div className="flex-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2">
        {menuItems.map((menuItem) => (
          <MenuItem
            handleAddOrder={handleAddOrder}
            menuItem={menuItem}
            key={menuItem.id + "-key"}
          />
        ))}
      </div>
    </div>
  );
}
