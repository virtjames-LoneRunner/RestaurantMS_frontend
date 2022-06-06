import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "../../components/MenuItem";

export default function MenuItems({ category, orders, setOrders }) {
  // Manipulate customer's orders
  const handleAddOrder = (e) => {
    let ordersList = orders;
    let item = {
      id: e.target.dataset.id,
      item: e.target.dataset.item,
      unit_price: e.target.dataset.unit_price,
      unit: e.target.dataset.unit,
      pcs: 1,
    };
    if (ordersList.length === 0) {
      ordersList.push(item);
    } else {
      let matchFound = false;
      for (var i = 0; i < ordersList.length; i++) {
        if (ordersList[i].id === item.id) {
          ordersList[i].pcs = parseInt(ordersList[i].pcs) + 1;
          matchFound = true;
        }
      }
      if (!matchFound) {
        ordersList.push(item);
      }
    }
    setOrders([...orders]);
    ////////////////////////////////////////// Working Version
  };

  // Display Menu Items when category changes (user clicks on category)
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    axios.get(`/api/menu-items/?category=${category.id}`).then((res) => {
      setMenuItems(res.data);
    });
  }, [category]);

  return (
    <div className="flex flex-col py-2 md:py-5 px-2 md:px-5">
      <div className="flex-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
        {menuItems.map((menuItem) => (
          <MenuItem
            disabled={menuItem.available ? false : true}
            handleAddOrder={handleAddOrder}
            menuItem={menuItem}
            key={menuItem.id + "-key"}
          />
        ))}
      </div>
    </div>
  );
}
