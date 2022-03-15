import React from "react";

export default function Category({ handleClick }) {
  return (
    <div
      className="flex justify-center items-center bg-white h-36 w-36 shadow-md"
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <div>Category</div>
        <div className="text-xs">Number of Items</div>
      </div>
    </div>
  );
}
