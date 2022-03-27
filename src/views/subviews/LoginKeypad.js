import { TextField } from "@mui/material";
import React from "react";

export default function LoginKeypad() {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <div className="mb-2">
          <TextField fullWidth />
        </div>
        <div className="grid grid-cols-3 gap-1">
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            1
          </button>
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            2
          </button>
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            3
          </button>
          <button
            utton
            className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100"
          >
            4
          </button>
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            5
          </button>
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            6
          </button>
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            7
          </button>
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            8
          </button>
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            9
          </button>
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            00
          </button>
          <button className="flex justify-center items-center border border-blue-100 px-8 py-2 text-4xl hover:bg-blue-100">
            0
          </button>
          <button className="flex justify-center items-center border border-blue-100 text-4xl hover:bg-blue-100">
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
    </div>
  );
}
