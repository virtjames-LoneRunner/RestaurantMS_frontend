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
  tableNumber,
  setTableNumber,
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
    <div className="flex flex-col w-full md:w-1/3 lg:w-1/4 h-5/6 md:h-full shadow-xl pt-2 md:pt-10 pb-1 md:pb-0 px-2 md:border-r border-b-2 bg-white text-gray-900">
      <div className="flex border-b py-1 w-full sticky top-0 bg-white z-20">
        <p className="font-semibold text-sm md:text-base">Order:</p>
        <input
          className="border-b w-full mx-2 text-xs text-gray-700 font-semibold"
          value={transactionCode}
        />
        <p className="font-semibold text-sm md:text-base">Table:</p>
        <button
          onClick={handleShowTables}
          className="w-full ml-2 bg-gray-100 disabled:bg-gray-50 disabled:text-gray-300"
          disabled={dineType === "out" ? true : false}
        >
          {tableNumber ? tableNumber : "Select table"}
        </button>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="h-36 md:h-96">
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
      <div className="border-t">
        <div className="flex space-x-2">
          {/* <div className="w-1/2">
            <div className="text-left  text-sm lg:text-base">Customer:</div>
            <input
              className="border placeholder:text-black w-full mb-2 bg-blue-200 py-1  text-sm lg:text-base"
              placeholder="Enter Customer"
            />
            
          </div> */}
          <div className="w-full">
            <div className="flex justify-between text-xs md:text-sm lg:text-base">
              <div>Subtotal:</div>
              <div>{total.toFixed(2)}</div>
            </div>
            <div className="flex justify-between text-xs md:text-sm lg:text-base">
              <div>Discount:</div>
              <div>{discount.toFixed(2)}</div>
            </div>
            <div className="flex justify-between">
              <div className="md:text-lg font-semibold">Total:</div>
              <div className="md:text-lg font-semibold">{final.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            className={`flex ${
              dineType === "in"
                ? `bg-[#FF6700] text-white`
                : "bg-gray-200 text-gray-800"
            } w-1/2 h-10 justify-center items-center rounded`}
            onClick={() => {
              setDineType("in");
            }}
          >
            Dine-in
          </button>
          <button
            className={`flex ${
              dineType === "out"
                ? `bg-[#FF6700] text-white`
                : "bg-gray-200 text-gray-800"
            } w-1/2 h-10 justify-center items-center rounded`}
            onClick={() => {
              setDineType("out");
              setTableNumber(null);
            }}
          >
            Take-out
          </button>
        </div>
        <div className="flex mt-1">
          <button
            className="flex justify-center items-center w-full h-10 md:h-14 bg-[#6320EE] text-white rounded-md shadow-md"
            onClick={handleCheckout}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
