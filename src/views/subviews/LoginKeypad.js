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
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00"].map(
            (key) => (
              <button
                key={key}
                className="flex justify-center items-center px-8 py-2 text-4xl bg-blue-200 hover:bg-blue-100"
              >
                {key}
              </button>
            )
          )}

          <button className="flex justify-center items-center bg-blue-200 text-4xl hover:bg-blue-100">
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
