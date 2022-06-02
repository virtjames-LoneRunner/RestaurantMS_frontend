import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "../components/Header";
import Order from "../components/Order";
import moment from "moment";
import { BASE_URL_WS } from "../config/config";

import { DateRangePicker } from "react-date-range";

function Chef() {
  const [messages, setMessages] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  // Date Range Picker Default
  const [showPicker, setShowPicker] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [socket, setSocket] = useState("");

  useEffect(() => {
    var socketPath = "wss://" + BASE_URL_WS + "/ws/notifications/";
    const chatSocket = new WebSocket(socketPath);
    chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      var message = { text: data.message, date: data.utc_time };
      message.date = moment(message.date).local().format("YYYY-MM-DD HH:mm:ss");

      let updated_messages = [...messages];
      // setUpdateCount(updateCount + 1);
      getTransactions(dates);
      // updated_messages.push(message);
      // setMessages([...updated_messages]);
      console.log("Message");
    };

    chatSocket.onclose = (e) => {
      console.log(e);
      console.error("Chat socket closed unexpectedly");
    };

    setSocket(chatSocket);
  }, []);

  const [tab, setTab] = useState(1);
  let auth = localStorage.getItem("auth");
  const [transactions, setTransactions] = useState([]);
  const getTransactions = (dates) => {
    var options = { year: "numeric", month: "numeric", day: "numeric" };
    console.log(dates);
    axios
      .get(
        `/api/orders?state=${
          tab === 1 ? "Not Started" : "Done"
        }&start-date=${dates[0].startDate
          .toISOString()
          .slice(0, 10)}&end-date=${dates[0].endDate
          .toISOString()
          .slice(0, 10)}`
      )
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
          console.log(JSON.parse(e.target.value).transaction_id);
          socket.send(
            JSON.stringify({
              message:
                "Order Done: " +
                res.data.transaction_id +
                " | Table: " +
                res.data.table_number,
            })
          );
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

  const handleSelectRange = (item) => {
    setDates([item.selection]);
    // setIsCustom(true);
  };

  useEffect(() => {
    getTransactions(dates);
  }, [updateCount, tab, dates]);
  return (
    <div className="relative bg-[#F6F8FF] min-h-screen">
      <Header role="chef" auth={auth} />
      <div className="flex pt-12 md:pt-16 px-5 justify-end">
        <div className="flex">
          <div className="relative">
            <button
              className="mr-1 block text-white bg-blue-600 hover:bg-blue-700 font-medium text-sm px-5 py-2.5 text-center "
              type="button"
              onClick={() => {
                setShowPicker(showPicker ? false : true);
              }}
            >
              Filter
            </button>
            <div
              className={`absolute right-0 z-20 mr-1 drop-shadow-md ${
                showPicker ? "" : "hidden"
              }`}
            >
              <DateRangePicker
                onChange={handleSelectRange}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                showDateDisplay={false}
                months={1}
                ranges={dates}
                maxDate={new Date()}
                direction="horizontal"
              />
            </div>
          </div>
          <button
            className="bg-gray-500 text-white px-2 py-1"
            onClick={() => {
              setTab(tab === 1 ? 2 : 1);
            }}
          >
            {tab === 1 ? "Show Done" : "Back to Orders"}
          </button>
        </div>
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
