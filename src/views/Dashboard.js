import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";
import Categories from "./subviews/Categories";
import CheckoutKeypad from "./subviews/CheckoutKeypad";
import Keypad from "./subviews/Keypad";
import MenuItems from "./subviews/MenuItems";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex h-screen">
        <OrderSummary />
        <div className="w-3/4 pt-12 bg-[#ebefff]">
          <Routes>
            <Route path="categories" element={<Categories />}></Route>
            <Route path="menu-items" element={<MenuItems />}></Route>
            <Route path="keypad" element={<Keypad />}></Route>
            <Route path="checkout" element={<CheckoutKeypad />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
