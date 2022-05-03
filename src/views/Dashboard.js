import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";
import CheckoutKeypad from "./subviews/CheckoutKeypad";
import Items from "./subviews/Items";
import Keypad from "./subviews/Keypad";
import Tables from "./subviews/Tables";

import axios from "axios";
import moment from "moment";
import { BASE_URL_WS } from "../config/config";

function formatDate(date) {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  const formatMap = {
    hh: addZero(date.getHours()),
    min: addZero(date.getMinutes()),
    ss: addZero(date.getSeconds()),
    mm: addZero(date.getMonth() + 1),
    dd: addZero(date.getDate()),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };
  return formatMap;
}

export default function Dashboard() {
  const [messages, setMessages] = useState({});
  const [updateCount, setUpdateCount] = useState(0);

  var socketPath = "ws://" + BASE_URL_WS + "/ws/notifications/";

  const chatSocket = new WebSocket(socketPath);
  chatSocket.onmessage = (e) => {
    var data = JSON.parse(e.data);
    var message = { text: data.message, date: data.utc_time };
    message.date = moment(message.date).local().format("YYYY-MM-DD HH:mm:ss");

    let updated_messages = [...messages];
    updated_messages.push(message);
    setMessages({ messages: updated_messages });
    return;
  };

  chatSocket.onclose = (e) => {
    console.error("Chat socket closed unexpectedly");
  };

  const auth_token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";

  const auth = localStorage.getItem("auth");
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
  const [tableNumber, setTableNumber] = useState(null);
  const [editIndex, setEditIndex] = useState({ i: 0, id: "" });
  const date = formatDate(new Date());

  const [transactionCode, setTransactionCode] = useState(
    "HNJ" + date.dd + date.mm + date.yyyy + date.hh + date.min + date.ss
  );
  const handleSubmitTransaction = () => {
    if (parseFloat(amountGiven) < parseFloat(total)) {
      alert("Amount given less than total");
      return;
    }
    if (orders.length === 0) {
      alert("No orders");
      return;
    }
    const data = {
      cashier_id: "APYM1209",
      transaction_id: transactionCode,
      transaction_type: dineType,
      table_number: tableNumber,
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
        chatSocket.send(JSON.stringify({ message: "order-submitted" }));
        window.location.replace("/dashboard/items");
        const date = formatDate(new Date());
        setTransactionCode(
          "HNJ" + date.dd + date.mm + date.yyyy + date.hh + date.min + date.ss
        );
      });
  };

  return (
    <div>
      <Header role="non-admin" auth={auth} />
      <div className="flex flex-col-reverse md:flex-row h-screen pt-10 md:pt-0">
        <OrderSummary
          transactionCode={transactionCode}
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
          tableNumber={tableNumber}
        />
        <div className="md:w-3/4 pt-5 md:pt-12 pb-5 md:pb-0 bg-[#ebefff] h-4/5 md:h-full overflow-y-auto">
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
            <Route
              path="tables"
              element={
                <Tables
                  setTableNumber={setTableNumber}
                  tableNumber={tableNumber}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
