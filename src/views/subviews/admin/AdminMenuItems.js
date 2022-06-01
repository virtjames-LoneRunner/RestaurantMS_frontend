import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "../../../components/MenuItem";
import { useNavigate } from "react-router-dom";

export default function AdminMenuItems({ category, setMenuItem, setTabs }) {
  // Manipulate customer's orders
  const handleAddOrder = (e) => {
    setMenuItem({
      id: e.target.dataset.id,
      menu_item: e.target.dataset.item,
      unit_price: e.target.dataset.unit_price,
      unit: e.target.dataset.unit,
    });
    setTabs(4);
  };

  // Display Menu Items when category changes (user clicks on category)
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    axios.get(`/api/menu-items?category=${category.id}`).then((res) => {
      setMenuItems(res.data);
    });
  }, [category]);

  return (
    <div className="flex flex-col pt-5">
      <div className="flex-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 pr-5">
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
