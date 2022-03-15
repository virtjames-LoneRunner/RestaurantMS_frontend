import React from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/dashboard/checkout");
  };
  return (
    <div className="w-1/4 shadow-xl pt-12 px-2 border-r">
      <div className="flex border-b">
        <p className="font-semibold">Order:</p>
        <p className="font-semibold">|</p>
        <p className="font-semibold">Table:</p>
      </div>
      <div className="h-2/3">
        <div className="flex py-2 px-1 items-center justify-between border-b">
          <div className="flex flex-none text-left flex-col">
            <div className="font-semibold">Lomi</div>
            <div className="text-xs">P 30.00</div>
          </div>
          <div className="flex justify-end">
            <div className="w-1/5 flex items-center mr-2">
              <TextField
                size="small"
                className="bg-white"
                onFocus={() => {
                  navigate("/dashboard/keypad");
                }}
              />
            </div>
            <div className="flex items-center mr-2">
              <p>P 60.00</p>
            </div>
            <div className="flex items-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="flex space-x-2 mb-2">
          <div className="w-1/2">
            <div className="text-left">Customer: ________________ </div>
            <button className="w-full bg-pink-500 text-white py-1 shadow-md rounded">
              Change
            </button>
          </div>
          <div className="w-1/2">
            <div className="flex justify-between">
              <div>Subtotal:</div>
              <div>60.00</div>
            </div>
            <div className="flex justify-between">
              <div>Discount:</div>
              <div>00.00</div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-lg font-semibold">Total:</div>
              <div className="text-lg font-semibold">60.00</div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="flex w-1/2 h-12 justify-center items-center border border-blue-400 text-blue-400 rounded">
            Dine-in
          </button>
          <button className="flex w-1/2 h-12 justify-center items-center border border-blue-400 text-blue-400 rounded">
            Take-out
          </button>
        </div>
        <div className="flex mt-2">
          <button
            className="flex justify-center items-center w-full h-16 border bg-blue-500 text-white rounded-md shadow-md"
            onClick={handleCheckout}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
