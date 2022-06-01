import React from "react";
import { useNavigate } from "react-router-dom";

export default function Keypad({ editIndex, setOrders, orders }) {
  const navigate = useNavigate();
  const handleDone = () => {
    navigate("/dashboard/items");
  };
  const handleClick = (e) => {
    let orders_list = orders;
    orders_list[editIndex.i].pcs =
      orders_list[editIndex.i].pcs.toString() !== "0"
        ? orders_list[editIndex.i].pcs.toString() + e.target.dataset.value
        : e.target.dataset.value;
    setOrders([...orders]);
    document.getElementById(editIndex.id).focus();
  };
  const handleClear = (e) => {
    let orders_list = orders;
    orders_list[editIndex.i].pcs = orders_list[editIndex.i].pcs
      .toString()
      .slice(0, -1)
      ? orders_list[editIndex.i].pcs.toString().slice(0, -1)
      : 0;
    setOrders([...orders]);
    document.getElementById(editIndex.id).focus();
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-2 flex md:block">
        <div>
          <div className="grid grid-cols-3 gap-1">
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="1"
              onClick={handleClick}
            >
              1
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="2"
              onClick={handleClick}
            >
              2
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="3"
              onClick={handleClick}
            >
              3
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="4"
              onClick={handleClick}
            >
              4
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="5"
              onClick={handleClick}
            >
              5
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="6"
              onClick={handleClick}
            >
              6
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="7"
              onClick={handleClick}
            >
              7
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="8"
              onClick={handleClick}
            >
              8
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="9"
              onClick={handleClick}
            >
              9
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="00"
              onClick={handleClick}
            >
              00
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              data-value="0"
              onClick={handleClick}
            >
              0
            </button>
            <button
              className="flex justify-center px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleClear}
            >
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
                  d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-1/2 md:w-full">
          <button
            className="bg-[#00171F] w-4/5 md:w-full h-full md:h-16 ml-1 md:ml-0 md:mt-2 text-white shadow-md"
            onClick={handleDone}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
