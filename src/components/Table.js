import React from "react";

export default function Table({ table, setTableNumber, tableNumber }) {
  return (
    <div
      className={`relative bg-white h-22 md:h-40 p-4 shadow-md rounded-lg hover:bg-gray-400 ${
        tableNumber === table ? "bg-gray-400" : ""
      }`}
    >
      <div
        className="absolute top-1 right-1 cursor-pointer hover:bg-white/75 p-2 rounded-full"
        onClick={() => {
          alert("Table Options");
        }}
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
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
      <button onClick={() => setTableNumber(table)} className="h-full">
        <div className="text-xs md:text-base">
          {/* {table.number} */}
          Table {table}
        </div>
        <div className="text-xs md:text-base">
          {/* {table.seats}  */}
          Seats Occupied
        </div>
      </button>
    </div>
  );
}
