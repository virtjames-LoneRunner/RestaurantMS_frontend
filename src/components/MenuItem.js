import React from "react";

export default function MenuItem() {
  return (
    <div className="bg-white h-36 w-36 shadow-md">
      <div className="flex justify-between px-1">
        <div>Item</div>
        <div>
          <div className="text-xs">Item</div>
          <div className="text-xs">Num</div>
        </div>
      </div>
      <div className="bg-blue-200 h-full relative">
        <div className="absolute bottom-2 right-1 bg-yellow-300 px-2 rounded shadow-md text-sm">
          P 30.00
        </div>
      </div>
    </div>
  );
}
