import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";

export default function Tables({ setTableNumber, tableNumber }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-start pl-5 py-2 sticky top-0 z-20 bg-white shadow-md">
        <button
          className="bg-gray-500 hover:bg-gray-600 px-2 py-1 text-white"
          onClick={() => {
            navigate("/dashboard/items");
          }}
        >
          Back to Categories
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pt-2 pr-5 pl-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((table) => (
          <Table
            key={table}
            table={table}
            setTableNumber={setTableNumber}
            tableNumber={tableNumber}
          />
        ))}
      </div>
    </>
  );
}
