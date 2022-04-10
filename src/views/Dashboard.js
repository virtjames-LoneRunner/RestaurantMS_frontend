import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";
import CheckoutKeypad from "./subviews/CheckoutKeypad";
import Items from "./subviews/Items";
import Keypad from "./subviews/Keypad";
import Tables from "./subviews/Tables";

import axios from "axios";

export default function Dashboard() {
  const auth_token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  axios.defaults.headers.common["Authorization"] = auth_token;
  useEffect(() => {
    if (!auth_token) {
      window.location.replace("/login");
    }
  }, []);

  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [amountGiven, setAmountGiven] = useState("");
  const [discount, setDiscount] = useState(0);
  const [final, setFinal] = useState(0);

  const [dineType, setDineType] = useState("in");

  const [editIndex, setEditIndex] = useState({ i: 0, id: "" });

  const handleSubmitTransaction = () => {
    let code = new Date();

    const data = {
      cashier_id: "APYM1209",
      transaction_id: code,
      transaction_type: dineType,
      table_number: 1,
      total_amount: parseFloat(total),
      amount_given: parseFloat(amountGiven),
      discount: 0.0,
      change: parseFloat(amountGiven) - parseFloat(total),
      address: "JAGNA",
      items: orders,
    };
    axios
      .post("/api/transactions/", {
        data: data,
      })
      .then((res) => {
        console.log(res);
        alert(
          `Change: ${(parseFloat(amountGiven) - parseFloat(total)).toFixed(2)}`
        );
        window.location.replace("/dashboard/items");
      });
  };

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
            <Route path="" element={<Navigate replace to="items" />}></Route>
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
            <Route
              path="checkout"
              element={
                <CheckoutKeypad
                  handleSubmitTransaction={handleSubmitTransaction}
                  amountGiven={amountGiven}
                  setAmountGiven={setAmountGiven}
                />
              }
            ></Route>
            <Route path="tables" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
