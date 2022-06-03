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
  const [messages, setMessages] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);
  const [alertNotifications, setAlertNotifications] = useState({
    show: false,
    text: "Alert Text",
    state: "success",
  });

  const [socket, setSocket] = useState("");
  useEffect(() => {
    var socketPath = "wss://" + BASE_URL_WS + "/ws/notifications/";

    const chatSocket = new WebSocket(socketPath);
    chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      var message = { text: data.message, date: data.utc_time };
      message.date = moment(message.date).local().format("YYYY-MM-DD HH:mm:ss");

      let updated_messages = [...messages];
      // for (let i = 0; i < messages.length; i++) {
      //   console.log(messages[i]);
      //   console.log(messages);
      //   if (messages[i].date !== message.date) {
      //     console.log(message);
      //     updated_messages.push(message);
      //     setMessages(updated_messages);
      //   } else if (messages[i].date === message.date) {
      //     return;
      //   }
      // }
      // console.log(messages);
      console.log(message);

      setAlertNotifications({
        show: true,
        text: message.text,

        state: "success",
      });
      return;
    };
    chatSocket.onclose = (e) => {
      console.error("Chat socket closed unexpectedly");
    };

    setSocket(chatSocket);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (alertNotifications.show === true) {
        setAlertNotifications({
          show: false,
          text: "",
          state: "",
        });
      }
    }, 8000);
  }, [alertNotifications]);

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
    // "HNJ" + date.dd + date.mm + date.yyyy + date.hh + date.min + date.ss
    "HNJ" + date.hh + date.min + date.ss
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
        socket.send(JSON.stringify({ message: "order-submitted" }));
        window.location.replace("/dashboard/items");
        const date = formatDate(new Date());
        setTransactionCode(
          // "HNJ" + date.dd + date.mm + date.yyyy + date.hh + date.min + date.ss
          // "HNJ" + date.min + date.ss
          "HNJ" + date.hh + date.min + date.ss
        );
      });
  };

  return (
    <div>
      <Header role="non-admin" auth={auth} />
      <div className="relative flex flex-col md:flex-row h-screen pt-10 md:pt-0">
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
          setTableNumber={setTableNumber}
        />
        <div className="md:w-3/4 md:pt-10 pb-5 md:pb-0 bg-[#F6F8FF] h-4/5 md:h-full overflow-y-auto">
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
        {/* ALERTS */}
        <div
          id="alert-1"
          className={`absolute shadow-md top-14 md:top-12 right-5 flex p-4 mb-4 transition duration-500 ease-in-out ${
            alertNotifications.state === "success"
              ? "bg-green-100"
              : "bg-red-100"
          } rounded-lg ${alertNotifications.show === true ? "" : "hidden"}`}
          role="alert"
        >
          {/* <svg
            className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg> */}
          <div
            className={`mr-4 text-sm font-medium ${
              alertNotifications.state === "success"
                ? "text-green-700"
                : "bg-red-700"
            }`}
          >
            {alertNotifications.text}
          </div>
          <button
            type="button"
            className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8  ${
              alertNotifications.state === "success"
                ? "text-green-500"
                : "bg-red-500"
            }`}
            data-dismiss-target="#alert-1"
            aria-label="Close"
            onClick={() => {
              setAlertNotifications({
                ...alertNotifications,
                show: false,
                text: "",
                state: "",
              });
            }}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
