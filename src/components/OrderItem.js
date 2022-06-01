import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderItem({
  order,
  index,
  setEditIndex,
  handleRemoveItem,
}) {
  const navigate = useNavigate();
  return (
    <div className="flex py-2 px-1 items-center justify-between border-b">
      <div className="flex flex-none text-left flex-col">
        <div className="font-regular w-32 truncate text-sm">{order.item}</div>
        <div className="text-xs text-gray-500">
          P{parseFloat(order.unit_price).toFixed(2)}/{order.unit}
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center mr-2">
          <input
            readOnly
            className="bg-gray-200 w-12 text-gray-600"
            onFocus={() => {
              setEditIndex({ i: index, id: `${order.id}-input-id` });
              navigate("/dashboard/keypad");
            }}
            value={order.pcs}
            id={`${order.id}-input-id`}
          />
        </div>
        <div className="flex justify-end items-center mr-2 w-20">
          <p className="text-xs lg:text-sm">
            P{" "}
            {(
              parseInt(order.pcs) * parseFloat(order.unit_price).toFixed(2)
            ).toFixed(2)}
          </p>
        </div>
        <div
          className="flex items-center mr-2 bg-gray-700 my-2 p-1 text-white shadow-md  rounded-full"
          onClick={handleRemoveItem}
          data-index={index}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
  );
}
