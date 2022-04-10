import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OrderItem from "./OrderItem";

export default function OrderSummary({
  transactionCode,
  orders,
  setOrders,
  setEditIndex,
  total,
  setTotal,
  discount,
  setDiscount,
  final,
  setFinal,
  dineType,
  setDineType,
}) {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/dashboard/checkout");
  };
  const handleShowTables = () => {
    navigate("/dashboard/tables");
  };

  useEffect(() => {
    let subtotal = 0;
    orders.forEach((order) => {
      console.log(order);
      console.log(order.pcs, order.unit_price);
      subtotal = subtotal + parseInt(order.pcs) * parseFloat(order.unit_price);
      console.log(parseInt(order.pcs), parseFloat(order.unit_price));
      console.log("sub", subtotal);
    });
    setTotal(subtotal);
    setFinal(subtotal - discount);
  }, [orders]);

  const handleRemoveItem = (e) => {
    let ordersTemp = orders;
    ordersTemp.splice(e.target.dataset.index, 1);
    setOrders([...ordersTemp]);
  };

  return (
    <div className="flex flex-col w-1/3 shadow-xl pt-10 px-2 border-r">
      <div className="flex-1 flex flex-col">
        <div className="flex border-b py-1">
          <p className="font-semibold">Order:</p>
          <input className="border-b w-1/3 mx-2" value={transactionCode} />
          <p className="font-semibold">Table:</p>
          <input onClick={handleShowTables} className="border-b w-1/3 mx-2" />
        </div>
        <div className="flex-1 bg-gray-100 overflow-y-auto">
          {orders.map((order, index) => (
            <OrderItem
              order={order}
              index={index}
              setEditIndex={setEditIndex}
              key={order.id + "-key"}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      </div>
      <div className="border-t pb-1">
        <div className="flex space-x-2 mb-2">
          <div className="w-1/2">
            <div className="text-left">Customer:</div>
            <input
              className="border placeholder:text-black w-full mb-2 bg-blue-200 py-1"
              placeholder="Enter Customer"
            />
            {/* <button className="w-full bg-pink-500 text-white py-1 shadow-md rounded">
              Change
            </button> */}
          </div>
          <div className="w-1/2">
            <div className="flex justify-between">
              <div>Subtotal:</div>
              <div>{total.toFixed(2)}</div>
            </div>
            <div className="flex justify-between">
              <div>Discount:</div>
              <div>{discount.toFixed(2)}</div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-lg font-semibold">Total:</div>
              <div className="text-lg font-semibold">{final.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            className={`flex ${
              dineType === "in" ? `bg-green-500 text-white` : "text-blue-400"
            } w-1/2 h-10 justify-center items-center border border-blue-400 rounded`}
            onClick={() => {
              setDineType("in");
            }}
          >
            Dine-in
          </button>
          <button
            className={`flex ${
              dineType === "out" ? `bg-green-500 text-white` : "text-blue-400"
            } w-1/2 h-10 justify-center items-center border border-blue-400 rounded`}
            onClick={() => {
              setDineType("out");
            }}
          >
            Take-out
          </button>
        </div>
        <div className="flex mt-1">
          <button
            className="flex justify-center items-center w-full h-14 border bg-blue-500 text-white rounded-md shadow-md"
            onClick={handleCheckout}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
