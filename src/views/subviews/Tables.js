import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";

export default function Tables() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-start pl-5 pt-10">
        <button
          className="bg-blue-500 hover:bg-blue-600 px-2 py-1 text-white rounded-md shadow-md"
          onClick={() => {
            navigate("/dashboard/items");
          }}
        >
          Back to Categories
        </button>
      </div>
      <div className="grid grid-cols-4 gap-x-5 gap-y-5 pt-16 pr-5 pl-5">
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
    </>
  );
}
