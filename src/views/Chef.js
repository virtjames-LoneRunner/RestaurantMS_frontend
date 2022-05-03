import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "../components/Header";
import Order from "../components/Order";
import moment from "moment";
import { BASE_URL_WS } from "../config/config";

function Chef() {
  const [messages, setMessages] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  var socketPath = "ws://" + BASE_URL_WS + "/ws/notifications/";
  const chatSocket = new WebSocket(socketPath);
  chatSocket.onmessage = (e) => {
    var data = JSON.parse(e.data);
    var message = { text: data.message, date: data.utc_time };
    message.date = moment(message.date).local().format("YYYY-MM-DD HH:mm:ss");

    let updated_messages = [...messages];
    setUpdateCount(updateCount + 1);
    updated_messages.push(message);
    setMessages([...updated_messages]);
    console.log("Message");

    return;
  };

  chatSocket.onclose = (e) => {
    console.error("Chat socket closed unexpectedly");
  };

  const [tab, setTab] = useState(1);
  let auth = localStorage.getItem("auth");
  const [transactions, setTransactions] = useState([]);
  const getTransactions = () => {
    axios
      .get(`/api/orders?state=${tab === 1 ? "Not Started" : "Done"}`)
      .then((res) => {
        if (res.status === 200) {
          setTransactions(res.data);
        }
      });
  };

  const handleDone = (e) => {
    console.log(e.target.value);
    axios
      .patch(`/api/orders/`, {
        data: JSON.parse(e.target.value),
      })
      .then((res) => {
        if (res.status === 200) {
          setUpdateCount(updateCount + 1);
        }
      });
  };
  const handleUndo = (e) => {
    console.log(e.target.value);
    axios
      .patch(`/api/orders/`, {
        data: JSON.parse(e.target.value),
      })
      .then((res) => {
        if (res.status === 200) {
          setUpdateCount(updateCount + 1);
        }
      });
  };

  useEffect(() => {
    getTransactions();
  }, [updateCount, tab]);
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header role="chef" auth={auth} />
      <div className="flex pt-10 md:pt-16 px-5 justify-end">
        <button
          className="bg-gray-500 text-white px-2 py-1"
          onClick={() => {
            setTab(tab === 1 ? 2 : 1);
          }}
        >
          {tab === 1 ? "Show Done" : "Back to Orders"}
        </button>
      </div>
      <div className="flex flex-col md:flex-row pb-6 h-full">
        {tab === 1 ? (
          ["Not Started", "Started"].map((state, i) => (
            <div className="md:w-1/2 px-5 border-r md:border-gray-500">
              <h2 className="text-xl font-semibold my-4 text-gray-700">
                {state}
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {transactions?.map((transaction, index) => {
                  if (transaction.status == state) {
                    return (
                      <Order
                        masterStatus={"Not Done"}
                        updateCount={updateCount}
                        setUpdateCount={setUpdateCount}
                        transaction={transaction}
                        transactions={transactions}
                        index={index}
                        setTransactions={setTransactions}
                        handleDone={handleDone}
                        handleUndo={handleUndo}
                      />
                    );
                  }
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full px-5">
            <h2 className="text-xl font-semibold my-4 text-gray-700">Done</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {transactions?.map((transaction, index) => {
                if (transaction.status == "Done") {
                  return (
                    <Order
                      masterStatus={"Done"}
                      updateCount={updateCount}
                      setUpdateCount={setUpdateCount}
                      transaction={transaction}
                      transactions={transactions}
                      index={index}
                      setTransactions={setTransactions}
                      handleDone={handleDone}
                      handleUndo={handleUndo}
                    />
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chef;
