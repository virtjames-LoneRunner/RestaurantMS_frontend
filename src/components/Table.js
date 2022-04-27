import React from "react";

export default function Table({ table, setTableNumber, tableNumber }) {
  return (
    <button
      onClick={() => setTableNumber(table)}
      className={`bg-white h-22 w-22 md:h-40 md:w-40 p-4 shadow-md rounded-lg space-y-3 hover:bg-[#1BF673] ${
        tableNumber === table ? "bg-[#1BF673]" : ""
      }`}
    >
      <div className="text-xs md:text-base">
        {/* {table.number} */}
        Table {table}
      </div>
      <div className="text-xs md:text-base">
        {/* {table.seats}  */}
        Seats Occupied
      </div>
    </button>
  );
}
