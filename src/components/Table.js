import React from "react";

export default function Table({ table }) {
  return (
    <button className="bg-white h-28 w-28 md:h-40 md:w-40 p-4 shadow-md rounded-lg space-y-3 hover:bg-[#1BF673] active:bg-[#1BF673]">
      <div>
        {/* {table.number} */}
        Table
      </div>
      <div>
        {/* {table.seats}  */}
        Seats Occupied
      </div>
    </button>
  );
}
