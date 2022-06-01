import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutKeypad({
  handleSubmitTransaction,
  amountGiven,
  setAmountGiven,
}) {
  const navigate = useNavigate();
  const handleDone = () => {
    navigate();
  };
  const handleInput = (e) => {
    setAmountGiven(amountGiven + e.target.value);
  };
  const handleClear = () => {
    setAmountGiven(amountGiven.slice(0, -1));
  };
  const handleCancel = () => {
    navigate("/dashboard/items");
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-5 flex md:block">
        <div>
          <div className="mb-2">
            <input
              readOnly
              value={amountGiven}
              className="border-2 border-gray-400 h-10 md:h-14 pl-2 w-full font-semibold text-2xl"
            />
          </div>
          <div className="grid grid-cols-3 gap-1">
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="1"
            >
              1
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="2"
            >
              2
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="3"
            >
              3
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="4"
            >
              4
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="5"
            >
              5
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="6"
            >
              6
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="7"
            >
              7
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="8"
            >
              8
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="9"
            >
              9
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="."
            >
              .
            </button>
            <button
              className="px-4 md:px-8 py-2 md:py-4 text-base md:text-4xl bg-gray-400 hover:bg-gray-600"
              onClick={handleInput}
              value="0"
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
        <div>
          <button
            className="bg-[#00171F] w-full h-2/3 md:h-14 ml-2 md:ml-0 md:mt-2 text-white shadow-md"
            onClick={handleSubmitTransaction}
          >
            Done
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 w-full h-1/3 md:h-14 ml-2 md:ml-0 md:mt-1 shadow-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
