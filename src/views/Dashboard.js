import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";
import CheckoutKeypad from "./subviews/CheckoutKeypad";
import Items from "./subviews/Items";
import Keypad from "./subviews/Keypad";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [final, setFinal] = useState(0);

  const [dineType, setDineType] = useState("");

  const [editIndex, setEditIndex] = useState({ i: 0, id: "" });
  return (
    <div>
      <Header role="non-admin" />
      <div className="flex h-screen">
        <OrderSummary
          orders={orders}
          setOrders={setOrders}
          setEditIndex={setEditIndex}
          total={total}
          setTotal={setTotal}
          discount={discount}
          setDiscount={setDiscount}
          final={final}
          setFinal={setFinal}
          dineType={dineType}
          setDineType={setDineType}
        />
        <div className="w-3/4 pt-12 bg-[#ebefff]">
          <Routes>
            <Route
              path="items"
              element={<Items setOrders={setOrders} orders={orders} />}
            ></Route>
            <Route
              path="keypad"
              element={
                <Keypad
                  editIndex={editIndex}
                  setOrders={setOrders}
                  orders={orders}
                />
              }
            ></Route>
            <Route path="checkout" element={<CheckoutKeypad />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
