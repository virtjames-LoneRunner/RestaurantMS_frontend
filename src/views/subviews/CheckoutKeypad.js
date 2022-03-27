import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutKeypad({handleSubmitTransaction, amountGiven, setAmountGiven}) {
  const navigate = useNavigate();
  const handleDone = () => {
    navigate();
  };
  const handleInput = (e) => {
    setAmountGiven(amountGiven + e.target.value)
  }
  const handleClear = () => {
    setAmountGiven(amountGiven.slice(0, -1))
  }
  const handleCancel = () => {
    navigate("/dashboard/items");
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white p-5">
        <div className="mb-2">
          <TextField fullWidth value={amountGiven}/>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='1'>
            1
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='2'>
            2
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='3'>
            3
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='4'>
            4
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='5'>
            5
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='6'>
            6
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='7'>
            7
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='8'>
            8
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='9'>
            9
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='.'>
            .
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleInput} value='0'>
            0
          </button>
          <button className="border border-blue-100 px-8 py-4 text-4xl" onClick={handleClear}>
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
        <button
          className="bg-blue-500 w-full h-16 mt-2 text-white shadow-md"
          onClick={handleSubmitTransaction}
        >
          Done
        </button>
        <button
          className="bg-pink-500 w-full h-16 mt-1 text-white shadow-md"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
